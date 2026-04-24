<?php

use function Dekode\Fundraising\Assets\register_assets;
use function Dekode\Fundraising\Assets\should_load_form_assets_in_head;

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

	public function test_detection_returns_false_on_non_singular() {
		$this->go_to( '/' );

		$this->assertFalse( should_load_form_assets_in_head() );
	}

	public function test_detection_returns_true_for_post_with_shortcode() {
		$post_id = self::factory()->post->create( [
			'post_content' => '[fundy_form id="1"]',
		] );
		$this->go_to( \get_permalink( $post_id ) );

		$this->assertTrue( should_load_form_assets_in_head() );
	}

	public function test_detection_returns_true_for_post_with_block() {
		$post_id = self::factory()->post->create( [
			'post_content' => '<!-- wp:fundy/donation-form {"formId":1} /-->',
		] );
		$this->go_to( \get_permalink( $post_id ) );

		$this->assertTrue( should_load_form_assets_in_head() );
	}

	public function test_detection_returns_false_for_post_without_form() {
		$post_id = self::factory()->post->create( [
			'post_content' => 'Just some text.',
		] );
		$this->go_to( \get_permalink( $post_id ) );

		$this->assertFalse( should_load_form_assets_in_head() );
	}

	public function test_detection_respects_filter_override() {
		$this->go_to( '/' );

		\add_filter( 'fundy/load_form_assets_in_head', '__return_true' );
		$this->assertTrue( should_load_form_assets_in_head() );
		\remove_filter( 'fundy/load_form_assets_in_head', '__return_true' );
	}

	public function test_form_script_registers_in_footer_when_detection_fails() {
		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		global $wp_scripts;
		$script = $wp_scripts->registered['fundy-form-script'];
		$this->assertSame( 1, $script->extra['group'] ?? null );
	}

	public function test_form_script_registers_in_head_when_detection_passes() {
		$post_id = self::factory()->post->create( [
			'post_content' => '[fundy_form id="1"]',
		] );
		$this->go_to( \get_permalink( $post_id ) );

		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		global $wp_scripts;
		$script = $wp_scripts->registered['fundy-form-script'];
		$this->assertArrayNotHasKey( 'group', $script->extra );
		$this->assertTrue( \wp_script_is( 'fundy-form-script', 'enqueued' ) );
		$this->assertTrue( \wp_style_is( 'fundy-form-style', 'enqueued' ) );
	}

	public function test_form_script_uses_defer_strategy() {
		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		global $wp_scripts;
		$script = $wp_scripts->registered['fundy-form-script'];
		$this->assertSame( 'defer', $script->extra['strategy'] ?? null );
	}

	public function test_preload_resources_added_when_detection_passes() {
		$post_id = self::factory()->post->create( [
			'post_content' => '[fundy_form id="1"]',
		] );
		$this->go_to( \get_permalink( $post_id ) );

		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		$resources = \apply_filters( 'wp_preload_resources', [] );

		$script_entry = null;
		$style_entry  = null;
		foreach ( $resources as $resource ) {
			if ( ( $resource['as'] ?? '' ) === 'script' ) {
				$script_entry = $resource;
			}
			if ( ( $resource['as'] ?? '' ) === 'style' ) {
				$style_entry = $resource;
			}
		}

		$this->assertNotNull( $script_entry );
		$this->assertSame( 'high', $script_entry['fetchpriority'] );
		$this->assertArrayNotHasKey( 'crossorigin', $script_entry );

		$this->assertNotNull( $style_entry );
		$this->assertSame( 'high', $style_entry['fetchpriority'] );
		$this->assertArrayNotHasKey( 'crossorigin', $style_entry );
	}

	public function test_preload_resources_not_added_when_detection_fails() {
		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		$resources = \apply_filters( 'wp_preload_resources', [] );

		foreach ( $resources as $resource ) {
			$this->assertNotSame( 'fundy-form-script', $resource['href'] ?? null );
		}
	}

	public function test_form_style_tag_gains_fetchpriority() {
		$tag = "<link rel='stylesheet' id='fundy-form-style-css' href='https://assets.fundy.cloud/fundy-forms.latest.css' media='all' />\n";

		$filtered = \apply_filters( 'style_loader_tag', $tag, 'fundy-form-style', 'https://assets.fundy.cloud/fundy-forms.latest.css', 'all' );

		$this->assertStringContainsString( 'fetchpriority="high"', $filtered );
	}

	public function test_form_style_tag_is_idempotent() {
		$tag      = "<link rel='stylesheet' fetchpriority=\"high\" href='https://assets.fundy.cloud/x.css' />\n";
		$filtered = \apply_filters( 'style_loader_tag', $tag, 'fundy-form-style', 'https://assets.fundy.cloud/x.css', 'all' );

		$this->assertSame( 1, \substr_count( $filtered, 'fetchpriority=' ) );
	}

	public function test_other_style_handles_are_untouched() {
		$tag      = "<link rel='stylesheet' id='other-css' href='https://example.test/other.css' />\n";
		$filtered = \apply_filters( 'style_loader_tag', $tag, 'some-other-handle', 'https://example.test/other.css', 'all' );

		$this->assertSame( $tag, $filtered );
	}
}
