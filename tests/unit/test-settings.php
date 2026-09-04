<?php

use function Dekode\Fundraising\Settings\get_custom_css_url;
use function Dekode\Fundraising\Settings\get_form_css_url;
use function Dekode\Fundraising\Settings\get_organization_css_url;
use function Dekode\Fundraising\Settings\get_organization_public_id;
use function Dekode\Fundraising\Settings\get_theme_css_url;
use function Dekode\Fundraising\Settings\sanitize_custom_css_url;
use function Dekode\Fundraising\Settings\sanitize_organization_public_id;
use function Dekode\Fundraising\Settings\sanitize_theme_name;

/**
 * Tests for the Dekode Fundraising settings helpers.
 */
class TestSettings extends WP_UnitTestCase {
	public function test_custom_css_url_accepts_https() {
		$this->assertSame(
			'https://assets.fundy.cloud/styles/production/acme/default.css',
			sanitize_custom_css_url( 'https://assets.fundy.cloud/styles/production/acme/default.css' )
		);
	}

	public function test_custom_css_url_accepts_http_localhost() {
		$this->assertSame(
			'http://localhost:4100/x.css',
			sanitize_custom_css_url( 'http://localhost:4100/x.css' )
		);
	}

	public function test_custom_css_url_accepts_http_loopback_ip() {
		$this->assertSame(
			'http://127.0.0.1:4100/x.css',
			sanitize_custom_css_url( 'http://127.0.0.1:4100/x.css' )
		);
	}

	public function test_custom_css_url_rejects_http_remote_host() {
		$this->assertSame( '', sanitize_custom_css_url( 'http://example.com/x.css' ) );
	}

	public function test_custom_css_url_allows_empty() {
		$this->assertSame( '', sanitize_custom_css_url( '' ) );
	}

	public function test_custom_css_url_rejects_junk() {
		$this->assertSame( '', sanitize_custom_css_url( 'not a url' ) );
		$this->assertSame( '', sanitize_custom_css_url( 'javascript:alert(1)' ) );
		$this->assertSame( '', sanitize_custom_css_url( 'ftp://example.com/x.css' ) );
	}

	public function test_custom_css_url_rejects_localhost_userinfo_trick() {
		$this->assertSame( '', sanitize_custom_css_url( 'http://localhost@example.com/x.css' ) );
	}

	public function test_get_custom_css_url_reads_option_and_sanitizes() {
		\update_option( 'fundy_options', [ 'custom_css_url' => 'http://example.com/x.css' ] );
		$this->assertSame( '', get_custom_css_url() );

		\update_option( 'fundy_options', [ 'custom_css_url' => 'https://assets.fundy.cloud/a.css' ] );
		$this->assertSame( 'https://assets.fundy.cloud/a.css', get_custom_css_url() );

		\delete_option( 'fundy_options' );
	}

	public function test_get_custom_css_url_defaults_to_empty() {
		\delete_option( 'fundy_options' );

		$this->assertSame( '', get_custom_css_url() );
	}

	public function test_theme_name_accepts_valid_names() {
		$this->assertSame( 'default', sanitize_theme_name( 'default' ) );
		$this->assertSame( 'Theme-2', sanitize_theme_name( 'Theme-2' ) );
		$this->assertSame( 'default', sanitize_theme_name( ' default ' ) );
	}

	public function test_theme_name_rejects_invalid_names() {
		$this->assertSame( '', sanitize_theme_name( '' ) );
		$this->assertSame( '', sanitize_theme_name( 'has space' ) );
		$this->assertSame( '', sanitize_theme_name( 'under_score' ) );
		$this->assertSame( '', sanitize_theme_name( '../../etc' ) );
		$this->assertSame( '', sanitize_theme_name( \str_repeat( 'a', 51 ) ) );
	}

	public function test_get_theme_css_url_reads_option_and_sanitizes() {
		\update_option( 'fundy_options', [ 'theme_css_url' => 'http://example.com/x.css' ] );
		$this->assertSame( '', get_theme_css_url() );

		\update_option( 'fundy_options', [ 'theme_css_url' => 'https://assets.fundy.cloud/styles/production/acme/default.css' ] );
		$this->assertSame( 'https://assets.fundy.cloud/styles/production/acme/default.css', get_theme_css_url() );

		\delete_option( 'fundy_options' );
	}

	public function test_get_form_css_url_prefers_custom_over_theme() {
		\update_option( 'fundy_options', [
			'custom_css_url' => 'https://example.test/custom.css',
			'theme_css_url'  => 'https://assets.fundy.cloud/styles/production/acme/default.css',
		] );

		$this->assertSame( 'https://example.test/custom.css', get_form_css_url() );

		\delete_option( 'fundy_options' );
	}

	public function test_get_form_css_url_falls_back_to_theme() {
		\update_option( 'fundy_options', [
			'custom_css_url' => '',
			'theme_css_url'  => 'https://assets.fundy.cloud/styles/production/acme/default.css',
		] );

		$this->assertSame( 'https://assets.fundy.cloud/styles/production/acme/default.css', get_form_css_url() );

		\delete_option( 'fundy_options' );
	}

	public function test_get_form_css_url_empty_when_both_unset() {
		\delete_option( 'fundy_options' );

		$this->assertSame( '', get_form_css_url() );
	}

	public function test_organization_public_id_accepts_a_uuid_and_normalizes_case() {
		$this->assertSame(
			'2e5b9014-f274-44c7-8b6b-27ae151d9a9e',
			sanitize_organization_public_id( ' 2E5B9014-F274-44C7-8B6B-27AE151D9A9E ' )
		);
	}

	public function test_organization_public_id_rejects_invalid_values() {
		$this->assertSame( '', sanitize_organization_public_id( '' ) );
		$this->assertSame( '', sanitize_organization_public_id( 'not-a-uuid' ) );
		$this->assertSame( '', sanitize_organization_public_id( '2e5b9014f27444c78b6b27ae151d9a9e' ) );
		$this->assertSame( '', sanitize_organization_public_id( '../2e5b9014-f274-44c7-8b6b-27ae151d9a9e' ) );
	}

	public function test_get_organization_public_id_reads_option_and_sanitizes() {
		\update_option( 'fundy_options', [ 'organization_public_id' => 'junk' ] );
		$this->assertSame( '', get_organization_public_id() );

		\update_option( 'fundy_options', [ 'organization_public_id' => '2e5b9014-f274-44c7-8b6b-27ae151d9a9e' ] );
		$this->assertSame( '2e5b9014-f274-44c7-8b6b-27ae151d9a9e', get_organization_public_id() );

		\delete_option( 'fundy_options' );
	}

	public function test_organization_css_url_is_empty_without_a_public_id() {
		\delete_option( 'fundy_options' );

		$this->assertSame( '', get_organization_css_url() );
	}

	public function test_organization_css_url_defaults_to_the_default_theme_on_production() {
		\update_option( 'fundy_options', [ 'organization_public_id' => '2e5b9014-f274-44c7-8b6b-27ae151d9a9e' ] );
		// Pin the base URL: the wp-env config points FUNDY_CORE_URL at stage.
		$production = static function () {
			return 'https://fundy.cloud/core';
		};
		\add_filter( 'fundy/base_url', $production );

		$this->assertSame(
			'https://assets.fundy.cloud/styles/production/2e5b9014-f274-44c7-8b6b-27ae151d9a9e/default.css',
			get_organization_css_url()
		);

		\remove_filter( 'fundy/base_url', $production );
		\delete_option( 'fundy_options' );
	}

	public function test_organization_css_url_uses_the_lowercased_theme_and_environment() {
		\update_option( 'fundy_options', [
			'organization_public_id' => '2e5b9014-f274-44c7-8b6b-27ae151d9a9e',
			'theme'                  => 'Moss',
		] );
		$stage = static function () {
			return 'https://stage.fundy.cloud/core';
		};
		\add_filter( 'fundy/base_url', $stage );

		$this->assertSame(
			'https://assets.fundy.cloud/styles/stage/2e5b9014-f274-44c7-8b6b-27ae151d9a9e/moss.css',
			get_organization_css_url()
		);

		\remove_filter( 'fundy/base_url', $stage );
		\delete_option( 'fundy_options' );
	}
}
