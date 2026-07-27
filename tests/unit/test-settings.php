<?php

use function Dekode\Fundraising\Settings\get_custom_css_url;
use function Dekode\Fundraising\Settings\sanitize_custom_css_url;

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
}
