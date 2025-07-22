<?php

use function Dekode\Fundy\Assets\register_assets;

/**
 * Test related to Fundy assets on the frontend.
 */
class TestAssets extends WP_UnitTestCase {
	/**
	 * Because state is shared between tests, we need to reset the enqueue hook before running the tests below.
	 */
	public function set_up() {
		parent::set_up();
		\wp_deregister_script( 'fundy-form-script' );
		\wp_dequeue_script( 'fundy-form-script' );
		\wp_deregister_style( 'fundy-form-style' );
		\wp_dequeue_style( 'fundy-form-style' );
	}

	public function test_that_production_js_is_loaded() {
		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		$this->assertTrue( \wp_script_is( 'fundy-form-script', 'registered' ) );
	}

	public function test_that_production_css_is_loaded() {
		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		$this->assertTrue( \wp_style_is( 'fundy-form-style', 'enqueued' ) );
	}

	public function test_that_production_css_is_not_loaded_when_using_filter() {
		\add_filter( 'fundy/enqueue/form_styles', '__return_false' );
		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		$this->assertFalse( \wp_style_is( 'fundy-form-style', 'enqueued' ) );
		\remove_filter( 'fundy/enqueue/form_styles', '__return_false' );
	}
}
