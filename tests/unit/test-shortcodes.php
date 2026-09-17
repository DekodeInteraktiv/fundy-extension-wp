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

	public function test_comma_separated_variations_are_emitted() {
		$html = \do_shortcode( '[fundy_form id="1" variation="compact,hero"]' );

		$this->assertStringContainsString( 'data-variation="compact,hero"', $html );
	}

	public function test_surrounding_whitespace_in_the_list_is_trimmed() {
		$html = \do_shortcode( '[fundy_form id="1" variation=" compact , Hero "]' );

		$this->assertStringContainsString( 'data-variation="compact,hero"', $html );
	}

	public function test_invalid_entries_are_dropped_from_the_list() {
		$html = \do_shortcode( '[fundy_form id="1" variation="compact,not a slug!,,hero"]' );

		$this->assertStringContainsString( 'data-variation="compact,hero"', $html );
	}

	public function test_duplicate_entries_are_emitted_once() {
		$html = \do_shortcode( '[fundy_form id="1" variation="compact,compact"]' );

		$this->assertStringContainsString( 'data-variation="compact"', $html );
	}

	public function test_no_data_variation_by_default() {
		$html = \do_shortcode( '[fundy_form id="1"]' );

		$this->assertStringContainsString( 'fundraising-form', $html );
		$this->assertStringNotContainsString( 'data-variation', $html );
	}

	public function test_theme_attribute_is_emitted() {
		$html = \do_shortcode( '[fundy_form id="1" theme="clay"]' );

		$this->assertStringContainsString( 'data-theme="clay"', $html );
	}

	public function test_theme_attribute_overrides_the_selected_theme() {
		\update_option( 'fundy_options', [ 'theme' => 'moss' ] );

		$html = \do_shortcode( '[fundy_form id="1" theme="clay"]' );

		\delete_option( 'fundy_options' );

		$this->assertStringContainsString( 'data-theme="clay"', $html );
	}

	public function test_invalid_theme_attribute_falls_back_to_the_setting() {
		\update_option( 'fundy_options', [ 'theme' => 'moss' ] );

		$html = \do_shortcode( '[fundy_form id="1" theme="not a slug!"]' );

		\delete_option( 'fundy_options' );

		$this->assertStringContainsString( 'data-theme="moss"', $html );
	}

	public function test_theme_filter_receives_the_shortcode_attributes() {
		$received = null;
		$filter   = static function ( string $theme, array $atts ) use ( &$received ): string {
			$received = $atts;

			return $theme;
		};

		\add_filter( 'fundy/donation_form/theme', $filter, 10, 2 );

		\do_shortcode( '[fundy_form id="1" theme="clay"]' );

		\remove_filter( 'fundy/donation_form/theme', $filter, 10 );

		$this->assertSame( 'clay', $received['theme'] ?? null );
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
