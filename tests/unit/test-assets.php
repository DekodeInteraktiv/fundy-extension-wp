<?php

use function Dekode\Fundraising\Assets\register_assets;

/**
 * Test related to Dekode Fundraising assets on the frontend.
 */
class TestAssets extends WP_UnitTestCase {
	/**
	 * Because state is shared between tests, we need to reset the enqueue hook before running the tests below.
	 */
	public function set_up() {
		parent::set_up();
		\wp_deregister_script( 'fundy-config' );
		\wp_dequeue_script( 'fundy-config' );
		\wp_deregister_script( 'fundy-form-script' );
		\wp_dequeue_script( 'fundy-form-script' );
		\wp_deregister_style( 'fundy-form-style' );
		\wp_dequeue_style( 'fundy-form-style' );
		\wp_deregister_script( 'fundy-conversion-script' );
		\wp_dequeue_script( 'fundy-conversion-script' );
		\wp_deregister_script( 'fundy-tracking-script' );
		\wp_dequeue_script( 'fundy-tracking-script' );
	}

	public function test_that_production_js_is_loaded() {
		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		$this->assertTrue( \wp_script_is( 'fundy-form-script', 'registered' ) );
	}

	public function test_that_production_css_is_loaded() {
		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		$this->assertTrue( \wp_style_is( 'fundy-form-style', 'registered' ) );
	}

	public function test_that_production_css_is_not_loaded_when_using_filter() {
		\add_filter( 'fundy/enqueue/form_styles', '__return_false' );
		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		$this->assertFalse( \wp_style_is( 'fundy-form-style', 'registered' ) );
		\remove_filter( 'fundy/enqueue/form_styles', '__return_false' );
	}

	public function test_that_fundy_config_is_registered_and_enqueued() {
		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		$this->assertTrue( \wp_script_is( 'fundy-config', 'registered' ) );
		$this->assertTrue( \wp_script_is( 'fundy-config', 'enqueued' ) );
	}

	public function test_that_fundy_config_has_inline_script() {
		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		global $wp_scripts;
		$this->assertArrayHasKey( 'fundy-config', $wp_scripts->registered );

		$script = $wp_scripts->registered['fundy-config'];
		$this->assertNotEmpty( $script->extra['after'] ?? $script->extra['before'] ?? [] );
	}

	public function test_that_form_script_depends_on_fundy_config() {
		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		global $wp_scripts;
		$script = $wp_scripts->registered['fundy-form-script'];
		$this->assertContains( 'fundy-config', $script->deps );
	}

	public function test_that_conversion_script_is_registered_and_enqueued() {
		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		$this->assertTrue( \wp_script_is( 'fundy-conversion-script', 'registered' ) );
		$this->assertTrue( \wp_script_is( 'fundy-conversion-script', 'enqueued' ) );
	}

	public function test_that_conversion_script_depends_on_fundy_config() {
		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		global $wp_scripts;
		$script = $wp_scripts->registered['fundy-conversion-script'];
		$this->assertContains( 'fundy-config', $script->deps );
	}

	public function test_that_conversion_script_is_not_loaded_when_disabled_via_filter() {
		\add_filter( 'fundy/enable/conversion_script', '__return_false' );
		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		$this->assertFalse( \wp_script_is( 'fundy-conversion-script', 'enqueued' ) );
		\remove_filter( 'fundy/enable/conversion_script', '__return_false' );
	}

	public function test_that_tracking_script_is_not_loaded_by_default() {
		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		$this->assertFalse( \wp_script_is( 'fundy-tracking-script', 'enqueued' ) );
	}

	public function test_that_tracking_script_is_registered_and_enqueued_when_enabled() {
		\update_option( 'fundy_options', [ 'tracking_enabled' => '1' ] );
		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		$this->assertTrue( \wp_script_is( 'fundy-tracking-script', 'registered' ) );
		$this->assertTrue( \wp_script_is( 'fundy-tracking-script', 'enqueued' ) );
		\delete_option( 'fundy_options' );
	}

	public function test_that_tracking_script_depends_on_fundy_config() {
		\update_option( 'fundy_options', [ 'tracking_enabled' => '1' ] );
		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		global $wp_scripts;
		$script = $wp_scripts->registered['fundy-tracking-script'];
		$this->assertContains( 'fundy-config', $script->deps );
		\delete_option( 'fundy_options' );
	}
}
