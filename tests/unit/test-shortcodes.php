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

	public function test_selected_theme_is_emitted_as_data_theme() {
		\update_option( 'fundy_options', [ 'theme' => 'moss' ] );

		$html = \do_shortcode( '[fundy_form id="1"]' );

		$this->assertStringContainsString( 'data-theme="moss"', $html );
		\delete_option( 'fundy_options' );
	}

	public function test_no_data_theme_without_a_selected_theme() {
		\delete_option( 'fundy_options' );

		$html = \do_shortcode( '[fundy_form id="1"]' );

		$this->assertStringNotContainsString( 'data-theme', $html );
	}

	/**
	 * Pull the data-params JSON back out of the rendered attribute.
	 */
	private function extract_params( string $html ): array {
		$this->assertSame( 1, \preg_match( '/data-params="([^"]*)"/', $html, $matches ) );

		$decoded = \json_decode( \html_entity_decode( $matches[1], ENT_QUOTES ), true );

		return \is_array( $decoded ) ? $decoded : [];
	}

	public function test_valid_params_are_rendered() {
		$html = \do_shortcode( '[fundy_form id="1" params=\'{"utm_source":"newsletter"}\']' );

		$this->assertSame( [ 'utm_source' => 'newsletter' ], $this->extract_params( $html ) );
	}

	public function test_invalid_param_keys_are_dropped() {
		$json = '{"has space":"x","<script>":"x","' . \str_repeat( 'a', 65 ) . '":"x","valid-key":"kept"}';
		$html = \do_shortcode( "[fundy_form id='1' params='" . $json . "']" );

		$this->assertSame( [ 'valid-key' => 'kept' ], $this->extract_params( $html ) );
	}

	public function test_param_values_are_length_capped() {
		$html = \do_shortcode( '[fundy_form id="1" params=\'{"long":"' . \str_repeat( 'v', 600 ) . '"}\']' );

		$params = $this->extract_params( $html );

		$this->assertSame( 500, \strlen( $params['long'] ) );
	}

	public function test_invalid_params_json_is_dropped() {
		$html = \do_shortcode( '[fundy_form id="1" params="not json"]' );

		$this->assertStringContainsString( 'data-params=""', $html );
	}

	public function test_non_object_params_json_is_dropped() {
		$html = \do_shortcode( '[fundy_form id="1" params="123"]' );

		$this->assertStringContainsString( 'data-params=""', $html );
	}
}
