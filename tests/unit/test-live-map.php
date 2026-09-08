<?php

use function Dekode\Fundraising\LiveMap\build_embed_url;
use function Dekode\Fundraising\LiveMap\get_base_url_for_live_map;
use function Dekode\Fundraising\LiveMap\get_kiosk_url;
use function Dekode\Fundraising\LiveMap\is_detected_on_page;
use function Dekode\Fundraising\LiveMap\render;
use function Dekode\Fundraising\LiveMap\sanitize_args;
use function Dekode\Fundraising\Blocks\LiveMap\render_block;

/**
 * Tests for the Live Map embed: the shared renderer, the block and the
 * URL it builds.
 */
class TestLiveMap extends WP_UnitTestCase {
	private const PUBLIC_ID = '2e5b9014-f274-44c7-8b6b-27ae151d9a9e';

	public function tear_down() {
		\delete_option( 'fundy_options' );
		\remove_all_filters( 'fundy/live_map/base_url' );
		\remove_all_filters( 'fundy/live_map/organization_id' );
		\remove_all_filters( 'fundy/live_map/embed_params' );
		\remove_all_filters( 'fundy/live_map/embed_url' );
		\remove_all_filters( 'locale' );

		parent::tear_down();
	}

	private function store_public_id(): void {
		\update_option( 'fundy_options', [ 'organization_public_id' => self::PUBLIC_ID ] );
	}

	/**
	 * Pull the iframe src back out of the rendered markup.
	 */
	private function extract_src( string $html ): array {
		$this->assertSame( 1, \preg_match( '/<iframe[^>]* src="([^"]*)"/', $html, $matches ) );

		$url = \html_entity_decode( $matches[1], ENT_QUOTES );
		\parse_str( (string) \wp_parse_url( $url, PHP_URL_QUERY ), $query );

		return [ $url, $query ];
	}

	public function test_defaults_are_applied_and_unknown_values_fall_back() {
		$args = sanitize_args( [
			'mode'   => 'nonsense',
			'view'   => 'Nordics',
			'theme'  => 'DARK',
			'height' => 100,
			'window' => 'forever',
			'ctaUrl' => 'javascript:alert(1)',
		] );

		$this->assertSame( 'gifts', $args['mode'] );
		$this->assertSame( 'nordics', $args['view'] );
		$this->assertSame( 'dark', $args['theme'] );
		$this->assertSame( 480, $args['height'] );
		$this->assertSame( 'today', $args['window'] );
		$this->assertSame( '', $args['ctaUrl'] );
		$this->assertTrue( $args['showCounters'] );
		$this->assertTrue( $args['showLabels'] );
		$this->assertFalse( $args['interactive'] );
	}

	public function test_flags_accept_shortcode_style_strings() {
		$args = sanitize_args( [
			'showCounters' => 'false',
			'showLabels'   => '0',
			'interactive'  => 'yes',
		] );

		$this->assertFalse( $args['showCounters'] );
		$this->assertFalse( $args['showLabels'] );
		$this->assertTrue( $args['interactive'] );
	}

	public function test_base_url_strips_the_core_path_and_is_filterable() {
		$this->assertSame( \preg_replace( '#/core$#', '', \Dekode\Fundraising\get_base_url() ), get_base_url_for_live_map() );

		\add_filter( 'fundy/live_map/base_url', fn () => 'https://stage.fundy.cloud/' );
		$this->assertSame( 'https://stage.fundy.cloud', get_base_url_for_live_map() );
	}

	public function test_embed_url_carries_every_option_and_the_site_locale() {
		\add_filter( 'locale', fn () => 'nb_NO' );
		$this->store_public_id();

		[ $url, $query ] = $this->extract_src(
			render( [ 'mode' => 'activity', 'view' => 'europe', 'theme' => 'dark', 'showCounters' => false, 'interactive' => true, 'window' => 'hour', 'ctaUrl' => 'https://example.org/give' ], 'class="wrapper"' )
		);

		$this->assertStringStartsWith( get_base_url_for_live_map() . '/no/live-map/' . self::PUBLIC_ID . '?', $url );
		$this->assertSame( '1', $query['embed'] );
		$this->assertSame( 'wp', $query['src'] );
		$this->assertSame( 'activity', $query['mode'] );
		$this->assertSame( 'europe', $query['view'] );
		$this->assertSame( 'dark', $query['theme'] );
		$this->assertSame( '0', $query['counters'] );
		$this->assertSame( '1', $query['labels'] );
		$this->assertSame( 'hour', $query['window'] );
		$this->assertSame( '1', $query['interactive'] );
		$this->assertSame( 'https://example.org/give', $query['cta'] );
	}

	public function test_english_sites_use_the_english_interface() {
		\add_filter( 'locale', fn () => 'en_US' );
		$this->store_public_id();

		$this->assertStringContainsString( '/en/live-map/' . self::PUBLIC_ID, build_embed_url( sanitize_args( [] ), self::PUBLIC_ID ) );
	}

	public function test_nothing_renders_without_a_stored_public_id() {
		\delete_option( 'fundy_options' );

		$this->assertSame( '', render( [] ) );
		$this->assertSame( '', \do_shortcode( '[fundy_live_map]' ) );
	}

	public function test_organization_id_filter_overrides_the_stored_id() {
		$this->store_public_id();
		\add_filter( 'fundy/live_map/organization_id', fn () => '00000000-0000-0000-0000-000000000000' );

		[ $url ] = $this->extract_src( render( [] ) );

		$this->assertStringContainsString( '/live-map/00000000-0000-0000-0000-000000000000?', $url );
	}

	public function test_organization_id_filter_can_switch_the_map_off() {
		$this->store_public_id();
		\add_filter( 'fundy/live_map/organization_id', '__return_empty_string' );

		$this->assertSame( '', render( [] ) );
	}

	public function test_iframe_markup() {
		$this->store_public_id();

		$html = render( [ 'height' => 600 ], 'class="wrapper"' );

		$this->assertStringContainsString( '<div class="wrapper">', $html );
		$this->assertStringContainsString( 'loading="lazy"', $html );
		$this->assertStringContainsString( 'referrerpolicy="strict-origin-when-cross-origin"', $html );
		$this->assertStringContainsString( 'allow=""', $html );
		$this->assertStringContainsString( 'height:600px', $html );
		$this->assertStringContainsString( 'title="Live map of donations to', $html );
		$this->assertStringNotContainsString( 'token', $html );
	}

	public function test_block_and_shortcode_render_the_same_iframe() {
		$this->store_public_id();

		$previous = WP_Block_Supports::$block_to_render;
		WP_Block_Supports::$block_to_render = [ 'blockName' => 'fundy/live-map', 'attrs' => [ 'view' => 'world', 'height' => 300 ] ];
		$block = render_block( [ 'view' => 'world', 'height' => 300 ] );
		WP_Block_Supports::$block_to_render = $previous;

		$shortcode = \do_shortcode( '[fundy_live_map view="world" height="300"]' );

		[ $block_src ]     = $this->extract_src( $block );
		[ $shortcode_src ] = $this->extract_src( $shortcode );

		$this->assertSame( $block_src, $shortcode_src );
		$this->assertStringContainsString( 'fundy-live-map-wrapper', $block );
		$this->assertStringContainsString( 'fundy-live-map-wrapper', $shortcode );
	}

	public function test_shortcode_attributes_are_sanitized() {
		$this->store_public_id();

		[ , $query ] = $this->extract_src( \do_shortcode( '[fundy_live_map mode="gifts" view="mars" showcounters="false" window="live" height="10"]' ) );

		$this->assertSame( 'gifts', $query['mode'] );
		$this->assertSame( 'org', $query['view'] );
		$this->assertSame( '0', $query['counters'] );
		$this->assertSame( 'live', $query['window'] );
		$this->assertStringContainsString( 'height:480px', \do_shortcode( '[fundy_live_map height="10"]' ) );
	}

	public function test_embed_filters_run_in_order() {
		$this->store_public_id();

		\add_filter( 'fundy/live_map/embed_params', function ( array $params ) {
			$params['utm_source'] = 'wp';
			return $params;
		} );
		\add_filter( 'fundy/live_map/embed_url', fn ( string $url ) => $url . '#filtered' );

		[ $url, $query ] = $this->extract_src( render( [] ) );

		$this->assertSame( 'wp', $query['utm_source'] );
		$this->assertStringEndsWith( '#filtered', $url );
	}

	public function test_kiosk_url() {
		$token = \str_repeat( 'ab', 32 );

		$this->assertSame( '', get_kiosk_url( '', $token ) );
		$this->assertSame( '', get_kiosk_url( self::PUBLIC_ID, '' ) );
		$this->assertSame(
			get_base_url_for_live_map() . '/en/live-map/' . self::PUBLIC_ID . '?kiosk=1&token=' . $token,
			get_kiosk_url( self::PUBLIC_ID, $token )
		);
	}

	public function test_detection_on_singular_pages() {
		$this->store_public_id();

		$with_block = self::factory()->post->create( [ 'post_content' => '<!-- wp:fundy/live-map /-->' ] );
		$with_shortcode = self::factory()->post->create( [ 'post_content' => '[fundy_live_map]' ] );
		$without = self::factory()->post->create( [ 'post_content' => 'Hello' ] );

		$this->go_to( \get_permalink( $with_block ) );
		$this->assertTrue( is_detected_on_page() );
		$this->assertContains( get_base_url_for_live_map(), \apply_filters( 'wp_resource_hints', [], 'preconnect' ) );

		$this->go_to( \get_permalink( $with_shortcode ) );
		$this->assertTrue( is_detected_on_page() );

		$this->go_to( \get_permalink( $without ) );
		$this->assertFalse( is_detected_on_page() );
		$this->assertNotContains( get_base_url_for_live_map(), \apply_filters( 'wp_resource_hints', [], 'preconnect' ) );
	}
}
