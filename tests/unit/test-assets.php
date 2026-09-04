<?php

use function Dekode\Fundraising\Assets\build_fundy_config;
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

	public function test_config_omits_custom_css_url_by_default() {
		$config = build_fundy_config();

		$this->assertArrayNotHasKey( 'customCssUrl', $config );
	}

	public function test_config_includes_custom_css_url_when_set() {
		\update_option( 'fundy_options', [ 'custom_css_url' => 'https://assets.fundy.cloud/styles/production/acme/default.css' ] );

		$config = build_fundy_config();

		$this->assertSame( 'https://assets.fundy.cloud/styles/production/acme/default.css', $config['customCssUrl'] ?? null );
		\delete_option( 'fundy_options' );
	}

	public function test_config_custom_css_url_falls_back_to_theme_url() {
		\update_option( 'fundy_options', [
			'theme'         => 'default',
			'theme_css_url' => 'https://assets.fundy.cloud/styles/production/acme/default.css',
		] );

		$config = build_fundy_config();

		$this->assertSame( 'https://assets.fundy.cloud/styles/production/acme/default.css', $config['customCssUrl'] ?? null );
		\delete_option( 'fundy_options' );
	}

	public function test_config_custom_css_url_wins_over_theme_url() {
		\update_option( 'fundy_options', [
			'custom_css_url' => 'https://example.test/custom.css',
			'theme_css_url'  => 'https://assets.fundy.cloud/styles/production/acme/default.css',
		] );

		$config = build_fundy_config();

		$this->assertSame( 'https://example.test/custom.css', $config['customCssUrl'] ?? null );
		\delete_option( 'fundy_options' );
	}

	public function test_config_custom_css_url_filter_overrides() {
		$override = static function () {
			return 'https://example.test/theme.css';
		};
		\add_filter( 'fundy/config/custom_css_url', $override );

		$config = build_fundy_config();

		$this->assertSame( 'https://example.test/theme.css', $config['customCssUrl'] ?? null );
		\remove_filter( 'fundy/config/custom_css_url', $override );
	}

	public function test_config_includes_organization_id_when_stored() {
		\update_option( 'fundy_options', [ 'organization_public_id' => '2e5b9014-f274-44c7-8b6b-27ae151d9a9e' ] );

		$config = build_fundy_config();

		$this->assertSame( '2e5b9014-f274-44c7-8b6b-27ae151d9a9e', $config['organizationId'] ?? null );
		\delete_option( 'fundy_options' );
	}

	public function test_config_omits_organization_id_by_default() {
		$config = build_fundy_config();

		$this->assertArrayNotHasKey( 'organizationId', $config );
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

	public function test_preload_includes_client_css_when_form_detected() {
		\update_option( 'fundy_options', [
			'theme_css_url' => 'https://assets.fundy.cloud/styles/production/acme/default.css',
		] );

		$post_id = self::factory()->post->create( [
			'post_content' => '[fundy_form id="1"]',
		] );
		$this->go_to( \get_permalink( $post_id ) );

		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		$resources = \apply_filters( 'wp_preload_resources', [] );

		$client_entry = null;
		foreach ( $resources as $resource ) {
			if ( ( $resource['href'] ?? '' ) === 'https://assets.fundy.cloud/styles/production/acme/default.css' ) {
				$client_entry = $resource;
			}
		}

		$this->assertNotNull( $client_entry );
		$this->assertSame( 'style', $client_entry['as'] );
		$this->assertArrayNotHasKey( 'crossorigin', $client_entry );
		\delete_option( 'fundy_options' );
	}

	public function test_preload_includes_organization_css_when_form_detected() {
		\update_option( 'fundy_options', [ 'organization_public_id' => '2e5b9014-f274-44c7-8b6b-27ae151d9a9e' ] );
		// Pin the base URL: the wp-env config points FUNDY_CORE_URL at stage.
		$production = static function () {
			return 'https://fundy.cloud/core';
		};
		\add_filter( 'fundy/base_url', $production );

		$post_id = self::factory()->post->create( [
			'post_content' => '[fundy_form id="1"]',
		] );
		$this->go_to( \get_permalink( $post_id ) );

		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		// A non-local home host, added only after navigation so permalinks
		// stay intact: wp-env serves from localhost, which the local-
		// development guard would otherwise skip the preload for.
		$public_home = static function ( $url, $path ) {
			return 'https://example.org' . $path;
		};
		\add_filter( 'home_url', $public_home, 10, 2 );

		$resources = \apply_filters( 'wp_preload_resources', [] );

		$this->assertContains(
			'https://assets.fundy.cloud/styles/production/2e5b9014-f274-44c7-8b6b-27ae151d9a9e/default.css',
			\wp_list_pluck( $resources, 'href' )
		);

		\remove_filter( 'fundy/base_url', $production );
		\remove_filter( 'home_url', $public_home );
		\delete_option( 'fundy_options' );
	}

	public function test_organization_css_preload_dedupes_against_the_theme_url() {
		\update_option( 'fundy_options', [
			'organization_public_id' => '2e5b9014-f274-44c7-8b6b-27ae151d9a9e',
			'theme'                  => 'moss',
			'theme_css_url'          => 'https://assets.fundy.cloud/styles/production/2e5b9014-f274-44c7-8b6b-27ae151d9a9e/moss.css',
		] );
		// Pin the base URL so the derived organization URL matches the
		// stored theme URL.
		$production = static function () {
			return 'https://fundy.cloud/core';
		};
		\add_filter( 'fundy/base_url', $production );

		$post_id = self::factory()->post->create( [
			'post_content' => '[fundy_form id="1"]',
		] );
		$this->go_to( \get_permalink( $post_id ) );

		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		// A non-local home host, added only after navigation so permalinks
		// stay intact - without it the local-development guard skips the
		// organization preload and the dedupe path is never exercised.
		$public_home = static function ( $url, $path ) {
			return 'https://example.org' . $path;
		};
		\add_filter( 'home_url', $public_home, 10, 2 );

		$resources = \apply_filters( 'wp_preload_resources', [] );

		$hrefs = \array_count_values( \wp_list_pluck( $resources, 'href' ) );

		$this->assertSame(
			1,
			$hrefs['https://assets.fundy.cloud/styles/production/2e5b9014-f274-44c7-8b6b-27ae151d9a9e/moss.css'] ?? 0
		);

		\remove_filter( 'fundy/base_url', $production );
		\remove_filter( 'home_url', $public_home );
		\delete_option( 'fundy_options' );
	}

	public function test_preload_omits_client_css_without_form() {
		\update_option( 'fundy_options', [
			'theme_css_url' => 'https://assets.fundy.cloud/styles/production/acme/default.css',
		] );

		$this->go_to( '/' );

		register_assets();
		\do_action( 'wp_enqueue_scripts' );

		$resources = \apply_filters( 'wp_preload_resources', [] );

		$this->assertNotContains(
			'https://assets.fundy.cloud/styles/production/acme/default.css',
			\wp_list_pluck( $resources, 'href' )
		);

		\delete_option( 'fundy_options' );
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

	public function test_form_script_tag_gains_high_fetchpriority() {
		$tag = "<script src='https://assets.fundy.cloud/fundy-forms.latest.js' id='fundy-form-script-js' defer data-wp-strategy='defer'></script>\n";

		$filtered = \apply_filters( 'script_loader_tag', $tag, 'fundy-form-script', 'https://assets.fundy.cloud/fundy-forms.latest.js' );

		$this->assertStringContainsString( 'fetchpriority="high"', $filtered );
	}

	public function test_conversion_and_tracking_script_tags_gain_low_fetchpriority() {
		foreach ( [ 'fundy-conversion-script', 'fundy-tracking-script' ] as $handle ) {
			$tag = "<script src='https://assets.fundy.cloud/x.js' id='{$handle}-js' defer></script>\n";

			$filtered = \apply_filters( 'script_loader_tag', $tag, $handle, 'https://assets.fundy.cloud/x.js' );

			$this->assertStringContainsString( 'fetchpriority="low"', $filtered );
		}
	}

	public function test_form_script_tag_fetchpriority_is_idempotent() {
		$tag      = "<script fetchpriority=\"high\" src='https://assets.fundy.cloud/x.js'></script>\n";
		$filtered = \apply_filters( 'script_loader_tag', $tag, 'fundy-form-script', 'https://assets.fundy.cloud/x.js' );

		$this->assertSame( 1, \substr_count( $filtered, 'fetchpriority=' ) );
	}

	public function test_other_script_handles_are_untouched() {
		$tag      = "<script src='https://example.test/other.js' id='other-js'></script>\n";
		$filtered = \apply_filters( 'script_loader_tag', $tag, 'some-other-handle', 'https://example.test/other.js' );

		$this->assertSame( $tag, $filtered );
	}

	public function test_form_script_inline_fragment_is_untouched() {
		$tag      = "<script id='fundy-form-script-js-before'>window.x = 1;</script>\n";
		$filtered = \apply_filters( 'script_loader_tag', $tag, 'fundy-form-script', '' );

		$this->assertStringNotContainsString( 'fetchpriority=', $filtered );
	}
}
