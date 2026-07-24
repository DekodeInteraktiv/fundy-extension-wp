<?php

/**
 * Tests for the [fundy_form] shortcode output.
 */
class TestShortcodes extends WP_UnitTestCase {
	public function test_variation_attribute_is_emitted() {
		$html = \do_shortcode( '[fundy_form id="1" variation="compact"]' );

		$this->assertStringContainsString( 'data-variation="compact"', $html );
	}

	public function test_variation_is_lowercased() {
		$html = \do_shortcode( '[fundy_form id="1" variation="Compact"]' );

		$this->assertStringContainsString( 'data-variation="compact"', $html );
	}

	public function test_invalid_variation_is_dropped() {
		$html = \do_shortcode( '[fundy_form id="1" variation="not a slug!"]' );

		$this->assertStringNotContainsString( 'data-variation', $html );
	}

	public function test_no_data_variation_by_default() {
		$html = \do_shortcode( '[fundy_form id="1"]' );

		$this->assertStringContainsString( 'fundraising-form', $html );
		$this->assertStringNotContainsString( 'data-variation', $html );
	}
}
