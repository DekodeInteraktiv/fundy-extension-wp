<?php

use function Dekode\Fundraising\API\fetch_organization_public_id;
use function Dekode\Fundraising\API\get_organization_self;
use function Dekode\Fundraising\API\get_organization_themes;
use function Dekode\Fundraising\API\request;
use function Dekode\Fundraising\API\themes_cache_key;

/**
 * Tests for the shared Fundy API client.
 */
class TestApi extends WP_UnitTestCase {
	/**
	 * @var callable|null
	 */
	private $http_filter = null;

	public function tear_down() {
		$this->unmock_http();

		\delete_option( 'fundy_options' );

		parent::tear_down();
	}

	private function mock_http( callable $handler ): void {
		$this->unmock_http();
		$this->http_filter = $handler;

		\add_filter( 'pre_http_request', $handler, 10, 3 );
	}

	private function unmock_http(): void {
		if ( null !== $this->http_filter ) {
			\remove_filter( 'pre_http_request', $this->http_filter );
			$this->http_filter = null;
		}
	}

	private function json_response( mixed $body, int $code = 200 ): array {
		return [
			'headers'  => [],
			'body'     => \is_string( $body ) ? $body : \wp_json_encode( $body ),
			'response' => [
				'code'    => $code,
				'message' => 'OK',
			],
			'cookies'  => [],
			'filename' => null,
		];
	}

	public function test_request_sends_bearer_token_and_path() {
		$seen = [];

		$this->mock_http( function ( $pre, $args, $url ) use ( &$seen ) {
			$seen['url']    = $url;
			$seen['auth']   = $args['headers']['Authorization'] ?? '';
			$seen['accept'] = $args['headers']['Accept'] ?? '';

			return $this->json_response( [ 'ok' => true ] );
		} );

		$data = request( '/api/v1/organization/themes', 'secret-token' );

		$this->assertSame( [ 'ok' => true ], $data );
		$this->assertStringEndsWith( '/api/v1/organization/themes', $seen['url'] );
		$this->assertSame( 'Bearer secret-token', $seen['auth'] );
		$this->assertSame( 'application/json', $seen['accept'] );
	}

	public function test_request_maps_transport_failure() {
		$this->mock_http( static function () {
			return new WP_Error( 'http_request_failed', 'timeout' );
		} );

		$result = request( '/api/v1/organization/themes', 'secret-token' );

		$this->assertWPError( $result );
		$this->assertSame( 'fundy_request_failed', $result->get_error_code() );
	}

	public function test_request_maps_unexpected_status() {
		$this->mock_http( function () {
			return $this->json_response( '', 500 );
		} );

		$result = request( '/api/v1/organization/themes', 'secret-token' );

		$this->assertWPError( $result );
		$this->assertSame( 'fundy_request_failed', $result->get_error_code() );
		$this->assertStringContainsString( '500', $result->get_error_message() );
	}

	public function test_request_maps_invalid_json() {
		$this->mock_http( function () {
			return $this->json_response( 'not json' );
		} );

		$result = request( '/api/v1/organization/themes', 'secret-token' );

		$this->assertWPError( $result );
		$this->assertSame( 'fundy_invalid_response', $result->get_error_code() );
	}

	public function test_themes_require_an_api_key_without_touching_http() {
		$this->mock_http( function () {
			$this->fail( 'No HTTP request expected without an API key.' );
		} );

		$result = get_organization_themes( '' );

		$this->assertWPError( $result );
		$this->assertSame( 'fundy_no_api_token', $result->get_error_code() );
	}

	public function test_themes_are_mapped_and_invalid_entries_dropped() {
		$this->mock_http( function () {
			return $this->json_response( [
				'themes' => [
					[
						'name'        => 'default',
						'url'         => 'https://assets.fundy.cloud/styles/production/acme/default.css',
						'deployed_at' => '2026-07-17T09:30:00.000000Z',
					],
					[
						'name' => 'bad name',
						'url'  => 'https://assets.fundy.cloud/styles/production/acme/bad.css',
					],
					[
						'name' => 'insecure',
						'url'  => 'http://example.com/insecure.css',
					],
					[
						'name' => 'no-url',
					],
					'not-a-theme',
				],
			] );
		} );

		$themes = get_organization_themes( 'secret-token' );

		$this->assertSame(
			[
				'default' => [
					'name'        => 'default',
					'url'         => 'https://assets.fundy.cloud/styles/production/acme/default.css',
					'deployed_at' => '2026-07-17T09:30:00.000000Z',
				],
			],
			$themes
		);
	}

	public function test_themes_are_cached() {
		$requests = 0;

		$this->mock_http( function () use ( &$requests ) {
			++$requests;

			return $this->json_response( [ 'themes' => [] ] );
		} );

		get_organization_themes( 'secret-token' );
		get_organization_themes( 'secret-token' );

		$this->assertSame( 1, $requests );
		$this->assertIsArray( \get_transient( themes_cache_key( 'secret-token' ) ) );
	}

	public function test_themes_cache_is_flushed_when_options_are_saved() {
		$requests = 0;

		$this->mock_http( function () use ( &$requests ) {
			++$requests;

			return $this->json_response( [ 'themes' => [] ] );
		} );

		get_organization_themes( 'secret-token' );
		\update_option( 'fundy_options', [ 'api_key' => 'secret-token' ] );
		get_organization_themes( 'secret-token' );

		$this->assertSame( 2, $requests );
	}

	public function test_organization_public_id_is_fetched_and_sanitized() {
		$seen = [];

		$this->mock_http( function ( $pre, $args, $url ) use ( &$seen ) {
			$seen['url'] = $url;

			return $this->json_response( [
				'organization' => [
					'id'        => 7,
					'public_id' => '2E5B9014-F274-44C7-8B6B-27AE151D9A9E',
					'name'      => 'Acme',
				],
			] );
		} );

		$this->assertSame( '2e5b9014-f274-44c7-8b6b-27ae151d9a9e', fetch_organization_public_id( 'secret-token' ) );
		$this->assertStringEndsWith( '/api/v1/organization/self', $seen['url'] );
	}

	public function test_organization_public_id_rejects_a_non_uuid() {
		$this->mock_http( function () {
			return $this->json_response( [
				'organization' => [ 'public_id' => 'not-a-uuid' ],
			] );
		} );

		$result = fetch_organization_public_id( 'secret-token' );

		$this->assertWPError( $result );
		$this->assertSame( 'fundy_invalid_response', $result->get_error_code() );
	}

	public function test_organization_public_id_requires_an_api_key_without_touching_http() {
		$this->mock_http( function () {
			$this->fail( 'No HTTP request expected without an API key.' );
		} );

		$result = fetch_organization_public_id( '' );

		$this->assertWPError( $result );
		$this->assertSame( 'fundy_no_api_token', $result->get_error_code() );
	}

	public function test_organization_public_id_passes_through_upstream_errors() {
		$this->mock_http( function () {
			return $this->json_response( '', 500 );
		} );

		$result = fetch_organization_public_id( 'secret-token' );

		$this->assertWPError( $result );
		$this->assertSame( 'fundy_request_failed', $result->get_error_code() );
	}

	public function test_theme_errors_are_not_cached() {
		$this->mock_http( static function () {
			return new WP_Error( 'http_request_failed', 'timeout' );
		} );

		$this->assertWPError( get_organization_themes( 'secret-token' ) );

		$requests = 0;

		$this->mock_http( function () use ( &$requests ) {
			++$requests;

			return $this->json_response( [ 'themes' => [] ] );
		} );

		$this->assertSame( [], get_organization_themes( 'secret-token' ) );
		$this->assertSame( 1, $requests );
	}

	public function test_organization_self_carries_the_kiosk_token_and_is_cached() {
		$calls = 0;
		$token = \str_repeat( 'ab', 32 );

		$this->mock_http( function () use ( &$calls, $token ) {
			$calls++;

			return $this->json_response( [
				'organization' => [
					'public_id'            => '2e5b9014-f274-44c7-8b6b-27ae151d9a9e',
					'name'                 => 'Acme',
					'live_map_kiosk_token' => \strtoupper( $token ),
				],
			] );
		} );

		$self = get_organization_self( 'secret-token' );

		$this->assertSame( '2e5b9014-f274-44c7-8b6b-27ae151d9a9e', $self['public_id'] );
		$this->assertSame( 'Acme', $self['name'] );
		$this->assertSame( $token, $self['live_map_kiosk_token'] );

		get_organization_self( 'secret-token' );
		$this->assertSame( 1, $calls, 'the second read is served from the cache' );
	}

	public function test_organization_self_drops_a_malformed_kiosk_token() {
		$this->mock_http( function () {
			return $this->json_response( [
				'organization' => [
					'public_id'            => '2e5b9014-f274-44c7-8b6b-27ae151d9a9e',
					'live_map_kiosk_token' => 'not-a-token',
				],
			] );
		} );

		$this->assertSame( '', get_organization_self( 'secret-token' )['live_map_kiosk_token'] );
	}

	public function test_organization_self_cache_is_flushed_when_options_are_saved() {
		$calls = 0;

		$this->mock_http( function () use ( &$calls ) {
			$calls++;

			return $this->json_response( [
				'organization' => [ 'public_id' => '2e5b9014-f274-44c7-8b6b-27ae151d9a9e' ],
			] );
		} );

		get_organization_self( 'secret-token' );
		\update_option( 'fundy_options', [ 'api_key' => 'secret-token' ] );
		get_organization_self( 'secret-token' );

		$this->assertSame( 2, $calls );
	}
}
