<?php

/**
 * Tests for the fundy/v1/forms REST proxy.
 */
class TestRestForms extends WP_UnitTestCase {
	/**
	 * @var WP_REST_Server
	 */
	private $server;

	public function set_up() {
		parent::set_up();

		global $wp_rest_server;
		$wp_rest_server = new WP_REST_Server();
		$this->server   = $wp_rest_server;

		\do_action( 'rest_api_init' );
	}

	public function tear_down() {
		global $wp_rest_server;
		$wp_rest_server = null;

		\delete_option( 'fundy_options' );

		parent::tear_down();
	}

	private function dispatch(): WP_REST_Response {
		return $this->server->dispatch( new WP_REST_Request( 'GET', '/fundy/v1/forms' ) );
	}

	private function set_api_key( string $key ): void {
		\update_option( 'fundy_options', [ 'api_key' => $key ] );
	}

	private function as_editor(): void {
		\wp_set_current_user( self::factory()->user->create( [ 'role' => 'editor' ] ) );
	}

	public function test_route_is_registered() {
		$this->assertArrayHasKey( '/fundy/v1/forms', $this->server->get_routes() );
	}

	public function test_logged_out_requests_are_rejected() {
		\wp_set_current_user( 0 );

		$this->assertSame( 401, $this->dispatch()->get_status() );
	}

	public function test_users_without_edit_posts_are_rejected() {
		\wp_set_current_user( self::factory()->user->create( [ 'role' => 'subscriber' ] ) );

		$this->assertSame( 403, $this->dispatch()->get_status() );
	}

	public function test_missing_api_key_returns_error() {
		$this->as_editor();

		$response = $this->dispatch();

		$this->assertSame( 400, $response->get_status() );
		$this->assertSame( 'fundy_no_api_token', $response->get_data()['code'] );
	}

	public function test_forms_are_proxied_and_mapped() {
		$this->as_editor();
		$this->set_api_key( 'secret-token' );

		$seen = [];

		\add_filter(
			'pre_http_request',
			function ( $pre, $args, $url ) use ( &$seen ) {
				$seen['url']  = $url;
				$seen['auth'] = $args['headers']['Authorization'] ?? '';

				return [
					'headers'  => [],
					'body'     => \wp_json_encode( [
						[
							'id'     => 7,
							'name'   => 'Main form',
							'secret' => 'must-not-leak',
						],
						[
							'id'   => '9',
							'name' => 'Petition',
						],
						'not-a-form',
						[ 'name' => 'missing id' ],
					] ),
					'response' => [
						'code'    => 200,
						'message' => 'OK',
					],
					'cookies'  => [],
					'filename' => null,
				];
			},
			10,
			3
		);

		$response = $this->dispatch();

		$this->assertSame( 200, $response->get_status() );
		$this->assertSame(
			[
				[
					'id'   => 7,
					'name' => 'Main form',
				],
				[
					'id'   => 9,
					'name' => 'Petition',
				],
			],
			$response->get_data()
		);
		$this->assertStringEndsWith( '/api/v1/organization/forms', $seen['url'] );
		$this->assertSame( 'Bearer secret-token', $seen['auth'] );
	}

	public function test_upstream_error_status_maps_to_bad_gateway() {
		$this->as_editor();
		$this->set_api_key( 'secret-token' );

		\add_filter(
			'pre_http_request',
			static function () {
				return [
					'headers'  => [],
					'body'     => '',
					'response' => [
						'code'    => 500,
						'message' => 'Internal Server Error',
					],
					'cookies'  => [],
					'filename' => null,
				];
			}
		);

		$this->assertSame( 502, $this->dispatch()->get_status() );
	}

	public function test_upstream_transport_failure_maps_to_bad_gateway() {
		$this->as_editor();
		$this->set_api_key( 'secret-token' );

		\add_filter(
			'pre_http_request',
			static function () {
				return new WP_Error( 'http_request_failed', 'timeout' );
			}
		);

		$this->assertSame( 502, $this->dispatch()->get_status() );
	}

	public function test_invalid_upstream_body_maps_to_bad_gateway() {
		$this->as_editor();
		$this->set_api_key( 'secret-token' );

		\add_filter(
			'pre_http_request',
			static function () {
				return [
					'headers'  => [],
					'body'     => 'not json',
					'response' => [
						'code'    => 200,
						'message' => 'OK',
					],
					'cookies'  => [],
					'filename' => null,
				];
			}
		);

		$this->assertSame( 502, $this->dispatch()->get_status() );
	}
}
