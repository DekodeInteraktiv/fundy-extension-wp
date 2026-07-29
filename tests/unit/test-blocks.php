<?php

use function Dekode\Fundraising\Blocks\DonationForm\render_block;

/**
 * Tests for the donation form block render output.
 */
class TestDonationFormBlock extends WP_UnitTestCase {
	/**
	 * get_block_wrapper_attributes() reads block context from
	 * WP_Block_Supports, so calling the render callback directly needs that
	 * context primed — it isn't set outside a real do_blocks() pass.
	 */
	private function render_donation_form( array $attributes ): string {
		$previous = WP_Block_Supports::$block_to_render;

		WP_Block_Supports::$block_to_render = [
			'blockName' => 'fundy/donation-form',
			'attrs'     => $attributes,
		];

		$html = render_block( $attributes );

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

	public function test_first_block_style_class_wins() {
		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
			'className' => 'is-style-compact is-style-hero',
		] );

		$this->assertStringContainsString( 'data-variation="compact"', $html );
		$this->assertStringNotContainsString( 'data-variation="hero"', $html );
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

	public function test_non_slug_style_name_is_dropped_not_truncated() {
		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
			'className' => 'is-style-myFancy',
		] );

		$this->assertStringNotContainsString( 'data-variation', $html );
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

	public function test_fallback_content_is_present() {
		$html = $this->render_donation_form( [
			'formId'    => 1,
			'urlParams' => [],
		] );

		$this->assertStringContainsString( '<noscript>', $html );
		$this->assertStringContainsString( 'Donation form loading', $html );
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
