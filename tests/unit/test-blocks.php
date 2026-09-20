<?php

use function Dekode\Fundraising\Blocks\DonationForm\render_block;

/**
 * Tests for the donation form block render output.
 */
class TestDonationFormBlock extends WP_UnitTestCase {
	/**
	 * get_block_wrapper_attributes() reads block context from
	 * WP_Block_Supports, so calling the render callback directly needs that
	 * context primed — it isn't set outside a real do_blocks() pass. The
	 * callback also takes core's full render_callback signature, so it gets
	 * the empty inner content and WP_Block instance a dynamic block sees.
	 */
	private function render_donation_form( array $attributes ): string {
		$parsed = [
			'blockName'    => 'fundy/donation-form',
			'attrs'        => $attributes,
			'innerBlocks'  => [],
			'innerHTML'    => '',
			'innerContent' => [],
		];

		$previous = WP_Block_Supports::$block_to_render;

		WP_Block_Supports::$block_to_render = $parsed;

		$html = render_block( $attributes, '', new WP_Block( $parsed ) );

		WP_Block_Supports::$block_to_render = $previous;

		return $html;
	}

	public function test_block_style_class_becomes_data_variation() {
		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
			'className' => 'is-style-compact foo',
		] );

		$this->assertStringContainsString( 'data-variation="compact"', $html );
	}

	public function test_every_block_style_class_is_collected() {
		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
			'className' => 'is-style-compact is-style-hero',
		] );

		$this->assertStringContainsString( 'data-variation="compact,hero"', $html );
	}

	public function test_background_color_class_becomes_a_prefixed_variation() {
		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
			'className' => 'has-green-light-background-color has-background',
		] );

		$this->assertStringContainsString( 'data-variation="background-color-green-light"', $html );
	}

	public function test_style_and_background_color_classes_are_combined() {
		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
			'className' => 'is-style-compact has-green-light-background-color',
		] );

		$this->assertStringContainsString( 'data-variation="compact,background-color-green-light"', $html );
	}

	public function test_background_color_prefix_keeps_a_same_named_style_distinct() {
		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
			'className' => 'is-style-compact has-compact-background-color',
		] );

		$this->assertStringContainsString( 'data-variation="compact,background-color-compact"', $html );
	}

	public function test_duplicate_variations_are_emitted_once() {
		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
			'className' => 'is-style-compact is-style-compact',
		] );

		$this->assertStringContainsString( 'data-variation="compact"', $html );
	}

	public function test_text_color_class_is_not_a_variation() {
		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
			'className' => 'has-green-light-color',
		] );

		$this->assertStringNotContainsString( 'data-variation', $html );
	}

	public function test_variations_filter_can_override_the_attribute() {
		$filter = static fn ( array $variations ): array => [ ...$variations, 'extra' ];

		\add_filter( 'fundy/donation_form/variations', $filter );

		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
			'className' => 'is-style-compact',
		] );

		\remove_filter( 'fundy/donation_form/variations', $filter );

		$this->assertStringContainsString( 'data-variation="compact,extra"', $html );
	}

	public function test_variations_filter_receives_the_attributes() {
		$received = null;
		$filter   = static function ( array $variations, array $attributes ) use ( &$received ): array {
			$received = $attributes;

			return $variations;
		};

		\add_filter( 'fundy/donation_form/variations', $filter, 10, 2 );

		$this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
			'className' => 'is-style-compact',
		] );

		\remove_filter( 'fundy/donation_form/variations', $filter, 10 );

		$this->assertSame( 'is-style-compact', $received['className'] ?? null );
	}

	public function test_no_data_variation_without_class_name() {
		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
		] );

		$this->assertStringNotContainsString( 'data-variation', $html );
	}

	public function test_no_data_variation_without_style_class() {
		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
			'className' => 'foo bar',
		] );

		$this->assertStringNotContainsString( 'data-variation', $html );
	}

	public function test_prefixed_class_is_not_mistaken_for_style() {
		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
			'className' => 'not-is-style-compact',
		] );

		$this->assertStringNotContainsString( 'data-variation', $html );
	}

	public function test_mixed_case_style_name_is_kept_whole() {
		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
			'className' => 'is-style-myFancy',
		] );

		$this->assertStringContainsString( 'data-variation="myFancy"', $html );
	}

	public function test_selected_theme_is_emitted_as_data_theme() {
		\update_option( 'fundy_options', [ 'theme' => 'moss' ] );

		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
		] );

		$this->assertStringContainsString( 'data-theme="moss"', $html );
		\delete_option( 'fundy_options' );
	}

	public function test_no_data_theme_without_a_selected_theme() {
		\delete_option( 'fundy_options' );

		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
		] );

		$this->assertStringNotContainsString( 'data-theme', $html );
	}

	public function test_theme_filter_overrides_the_selected_theme() {
		\update_option( 'fundy_options', [ 'theme' => 'moss' ] );

		$filter = static fn (): string => 'clay';

		\add_filter( 'fundy/donation_form/theme', $filter );

		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
		] );

		\remove_filter( 'fundy/donation_form/theme', $filter );
		\delete_option( 'fundy_options' );

		$this->assertStringContainsString( 'data-theme="clay"', $html );
	}

	public function test_theme_filter_can_set_a_theme_without_a_setting() {
		\delete_option( 'fundy_options' );

		$filter = static fn (): string => 'clay';

		\add_filter( 'fundy/donation_form/theme', $filter );

		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
		] );

		\remove_filter( 'fundy/donation_form/theme', $filter );

		$this->assertStringContainsString( 'data-theme="clay"', $html );
	}

	public function test_invalid_theme_from_the_filter_is_dropped() {
		\update_option( 'fundy_options', [ 'theme' => 'moss' ] );

		$filter = static fn (): string => 'not a slug!';

		\add_filter( 'fundy/donation_form/theme', $filter );

		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
		] );

		\remove_filter( 'fundy/donation_form/theme', $filter );
		\delete_option( 'fundy_options' );

		$this->assertStringNotContainsString( 'data-theme', $html );
	}

	public function test_theme_filter_receives_the_attributes() {
		$received = null;
		$filter   = static function ( string $theme, array $attributes ) use ( &$received ): string {
			$received = $attributes;

			return $theme;
		};

		\add_filter( 'fundy/donation_form/theme', $filter, 10, 2 );

		$this->render_donation_form( [
			'formId'    => 42,
			'urlParams' => [],
		] );

		\remove_filter( 'fundy/donation_form/theme', $filter, 10 );

		$this->assertSame( 42, $received['formId'] ?? null );
	}

	public function test_returns_empty_string_without_form_id() {
		$this->assertSame( '', $this->render_donation_form( [
			'formId'    => 0,
			'urlParams' => [],
		] ) );
	}

	public function test_data_button_classes_is_not_emitted() {
		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
		] );

		$this->assertStringNotContainsString( 'data-button-classes', $html );
	}

	/**
	 * Core does not allow <noscript> in the 'post' context, so a parent block
	 * running wp_kses_post() over its inner blocks would strip the tags and
	 * leave the sentence as visible copy. The fallback is withheld there.
	 */
	public function test_fallback_content_is_omitted_when_kses_strips_noscript() {
		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
		] );

		$this->assertStringNotContainsString( '<noscript>', $html );
		$this->assertStringNotContainsString( 'This donation form requires JavaScript', $html );
	}

	public function test_fallback_content_is_present_when_kses_allows_noscript() {
		$filter = static function ( array $tags, string $context ): array {
			if ( 'post' === $context ) {
				$tags['noscript'] = [];
			}

			return $tags;
		};

		\add_filter( 'wp_kses_allowed_html', $filter, 10, 2 );

		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
		] );

		\remove_filter( 'wp_kses_allowed_html', $filter, 10 );

		$this->assertStringContainsString( '<noscript>', $html );
		$this->assertStringContainsString( 'This donation form requires JavaScript', $html );
	}

	public function test_fallback_survives_wp_kses_post_when_allowed() {
		$filter = static function ( array $tags, string $context ): array {
			if ( 'post' === $context ) {
				$tags['noscript'] = [];
			}

			return $tags;
		};

		\add_filter( 'wp_kses_allowed_html', $filter, 10, 2 );

		$html = \wp_kses_post( $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
		] ) );

		\remove_filter( 'wp_kses_allowed_html', $filter, 10 );

		$this->assertStringContainsString( '<noscript>', $html );
	}

	/**
	 * Pull the data-params JSON back out of the rendered attribute.
	 */
	private function extract_params( string $html ): array {
		$this->assertSame( 1, \preg_match( '/data-params="([^"]*)"/', $html, $matches ) );

		$decoded = \json_decode( \html_entity_decode( $matches[1], ENT_QUOTES ), true );

		return \is_array( $decoded ) ? $decoded : [];
	}

	public function test_valid_url_params_are_rendered() {
		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [
				[
					'key'   => 'utm_source',
					'value' => 'newsletter',
				],
			],
		] );

		$this->assertSame( [ 'utm_source' => 'newsletter' ], $this->extract_params( $html ) );
	}

	public function test_invalid_url_param_keys_are_dropped() {
		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [
				[
					'key'   => 'has space',
					'value' => 'x',
				],
				[
					'key'   => '<script>',
					'value' => 'x',
				],
				[
					'key'   => \str_repeat( 'a', 65 ),
					'value' => 'x',
				],
				[
					'key'   => 'valid-key',
					'value' => 'kept',
				],
			],
		] );

		$this->assertSame( [ 'valid-key' => 'kept' ], $this->extract_params( $html ) );
	}

	public function test_url_param_values_are_length_capped() {
		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [
				[
					'key'   => 'long',
					'value' => \str_repeat( 'v', 600 ),
				],
			],
		] );

		$params = $this->extract_params( $html );

		$this->assertSame( 500, \strlen( $params['long'] ) );
	}
}
