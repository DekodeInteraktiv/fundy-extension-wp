<?php

use function Dekode\Fundraising\SettingsPage\sanitize_options;

/**
 * Tests for the settings page sanitize flow, focused on theme resolution.
 */
class TestSettingsPage extends WP_UnitTestCase {
	private const THEME_URL = 'https://assets.fundy.cloud/styles/production/acme/default.css';

	/**
	 * @var callable|null
	 */
	private $http_filter = null;

	public function set_up() {
		parent::set_up();

		global $wp_settings_errors;
		$wp_settings_errors = [];
	}

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

	private function mock_theme_list(): void {
		$this->mock_http( static function () {
			return [
				'headers'  => [],
				'body'     => \wp_json_encode( [
					'themes' => [
						[
							'name'        => 'default',
							'url'         => self::THEME_URL,
							'deployed_at' => '2026-07-17T09:30:00.000000Z',
						],
					],
				] ),
				'response' => [
					'code'    => 200,
					'message' => 'OK',
				],
				'cookies'  => [],
				'filename' => null,
			];
		} );
	}

	private function mock_http_failure(): void {
		$this->mock_http( static function () {
			return new WP_Error( 'http_request_failed', 'timeout' );
		} );
	}

	public function test_resolvable_theme_stores_url() {
		$this->mock_theme_list();

		$sanitized = sanitize_options( [
			'api_key' => 'secret-token',
			'theme'   => 'default',
		] );

		$this->assertSame( 'default', $sanitized['theme'] );
		$this->assertSame( self::THEME_URL, $sanitized['theme_css_url'] );
	}

	public function test_empty_theme_stores_empty_url() {
		$sanitized = sanitize_options( [
			'api_key' => 'secret-token',
			'theme'   => '',
		] );

		$this->assertSame( '', $sanitized['theme'] );
		$this->assertSame( '', $sanitized['theme_css_url'] );
	}

	public function test_unresolvable_unchanged_theme_keeps_previous_url() {
		\update_option( 'fundy_options', [
			'api_key'       => 'secret-token',
			'theme'         => 'default',
			'theme_css_url' => self::THEME_URL,
		] );
		$this->mock_http_failure();

		$sanitized = sanitize_options( [
			'api_key' => 'secret-token',
			'theme'   => 'default',
		] );

		$this->assertSame( self::THEME_URL, $sanitized['theme_css_url'] );
		$this->assertEmpty( \get_settings_errors( 'fundy_options' ) );
	}

	public function test_unresolvable_changed_theme_clears_url_and_warns() {
		\update_option( 'fundy_options', [
			'api_key'       => 'secret-token',
			'theme'         => 'default',
			'theme_css_url' => self::THEME_URL,
		] );
		$this->mock_http_failure();

		$sanitized = sanitize_options( [
			'api_key' => 'secret-token',
			'theme'   => 'other',
		] );

		$this->assertSame( 'other', $sanitized['theme'] );
		$this->assertSame( '', $sanitized['theme_css_url'] );
		$this->assertNotEmpty( \get_settings_errors( 'fundy_options' ) );
	}

	public function test_undeployed_theme_clears_url_and_warns() {
		$this->mock_theme_list();

		$sanitized = sanitize_options( [
			'api_key' => 'secret-token',
			'theme'   => 'missing',
		] );

		$this->assertSame( '', $sanitized['theme_css_url'] );
		$this->assertNotEmpty( \get_settings_errors( 'fundy_options' ) );
	}

	public function test_api_key_change_fetches_and_stores_the_organization_public_id() {
		\update_option( 'fundy_options', [
			'api_key'                => 'old-token',
			'organization_public_id' => '11111111-1111-1111-1111-111111111111',
		] );
		$this->mock_http( static function ( $pre, $args, $url ) {
			if ( false === \strpos( $url, '/organization/self' ) ) {
				return $pre;
			}

			return [
				'headers'  => [],
				'body'     => \wp_json_encode( [
					'organization' => [ 'public_id' => '2e5b9014-f274-44c7-8b6b-27ae151d9a9e' ],
				] ),
				'response' => [
					'code'    => 200,
					'message' => 'OK',
				],
				'cookies'  => [],
				'filename' => null,
			];
		} );

		$sanitized = sanitize_options( [ 'api_key' => 'new-token' ] );

		$this->assertSame( '2e5b9014-f274-44c7-8b6b-27ae151d9a9e', $sanitized['organization_public_id'] );
	}

	public function test_unchanged_api_key_keeps_the_public_id_without_a_request() {
		\update_option( 'fundy_options', [
			'api_key'                => 'secret-token',
			'organization_public_id' => '2e5b9014-f274-44c7-8b6b-27ae151d9a9e',
		] );
		$this->mock_http( function () {
			$this->fail( 'No HTTP request expected for an unchanged API key.' );
		} );

		$sanitized = sanitize_options( [ 'api_key' => 'secret-token' ] );

		$this->assertSame( '2e5b9014-f274-44c7-8b6b-27ae151d9a9e', $sanitized['organization_public_id'] );
	}

	public function test_failed_public_id_fetch_on_key_change_clears_and_warns() {
		\update_option( 'fundy_options', [
			'api_key'                => 'old-token',
			'organization_public_id' => '11111111-1111-1111-1111-111111111111',
		] );
		$this->mock_http_failure();

		$sanitized = sanitize_options( [ 'api_key' => 'new-token' ] );

		$this->assertSame( '', $sanitized['organization_public_id'] );
		$this->assertNotEmpty( \get_settings_errors( 'fundy_options' ) );
	}

	public function test_multisite_without_override_blanks_theme_keys() {
		if ( ! \is_multisite() ) {
			$this->markTestSkipped( 'Requires multisite.' );
		}

		$sanitized = sanitize_options( [
			'api_key' => 'secret-token',
			'theme'   => 'default',
		] );

		$this->assertSame( '', $sanitized['theme'] );
		$this->assertSame( '', $sanitized['theme_css_url'] );
	}
}
