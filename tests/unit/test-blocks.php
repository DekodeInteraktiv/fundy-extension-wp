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
}
