<?php
/**
 * Donation Form.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\Blocks\DonationForm;

use function Dekode\Fundraising\get_base_url;
use function Dekode\Fundraising\sanitize_form_url_params;
use function Dekode\Fundraising\Settings\get_api_key;

/**
 * Hooks.
 */
\add_action( 'init', __NAMESPACE__ . '\\register_block' );

/**
 * Register block.
 *
 * @return void
 */
function register_block(): void {
	\register_block_type_from_metadata( \FUNDY_PLUGIN_DIR . 'build/blocks/donation-form/block.json', [
		'render_callback' => __NAMESPACE__ . '\\render_block',
	] );

	\wp_set_script_translations( 'fundy-donation-form-editor-script', 'dekode-fundraising', \FUNDY_PLUGIN_DIR . 'languages' );

	// The API token must never reach the browser so only the
	// token's existence is exposed here.
	$settings = [
		'hasApiToken' => '' !== get_api_key(),
	];

	if ( \current_user_can( 'manage_options' ) ) {
		$settings['settingsUrl'] = \admin_url( 'options-general.php?page=fundy_settings_page' );
	}

	\wp_add_inline_script(
		'fundy-donation-form-editor-script',
		'window.fundySettings = ' . \wp_json_encode( $settings, \JSON_HEX_TAG | \JSON_HEX_AMP | \JSON_UNESCAPED_SLASHES ) . ';',
		'before'
	);
}

/**
 * Render the block.
 */
function render_block( array $attributes ): string {
	// If no form ID is set, return empty string.
	if ( empty( $attributes['formId'] ) ) {
		return '';
	}

	$raw_params = [];

	foreach ( (array) ( $attributes['urlParams'] ?? [] ) as $p ) {
		if ( \is_array( $p ) && ! empty( $p['key'] ) && \is_string( $p['key'] ) ) {
			$raw_params[ $p['key'] ] = $p['value'] ?? '';
		}
	}

	// Free-form author input that ends up as URL query parameters in the
	// forms runtime - hence the shared conservative key shape and length caps.
	$params = sanitize_form_url_params( $raw_params );

	$json_params = \wp_json_encode( $params );

	if ( false === $json_params ) {
		$json_params = '[]';
	}

	// Block styles registered by themes land in className as is-style-*.
	// data-variation carries the chosen style across the shadow boundary so
	// theme CSS can target .variation-<name> inside the shadow root. The
	// lookahead makes non-slug style names (e.g. is-style-myFancy) drop the
	// attribute entirely instead of truncating to their lowercase prefix.
	$variation_attr = '';

	if ( \preg_match( '/(?:^|\s)is-style-([a-z0-9-]+)(?=\s|$)/', (string) ( $attributes['className'] ?? '' ), $matches ) ) {
		$variation_attr = \sprintf( ' data-variation="%s"', \esc_attr( $matches[1] ) );
	}

	// The forms runtime replaces the mount's children when it renders, so
	// the noscript fallback below only ever reaches users for whom the
	// remote bundle never executes.
	return \sprintf( '
		<div %1$s>
			<div
				class="fundy-form fundraising-form"
				data-form-id="%2$s"
				data-core-url="%3$s"
				data-params="%4$s"%5$s
			><noscript>%6$s</noscript></div>
		</div>
		',
		\get_block_wrapper_attributes( [
			'class' => 'fundy-form-wrapper',
		] ),
		\esc_attr( $attributes['formId'] ),
		\esc_attr( get_base_url() ),
		\esc_attr( $json_params ),
		$variation_attr,
		\esc_html__( 'This donation form requires JavaScript. Please enable JavaScript in your browser and reload the page.', 'dekode-fundraising' ),
	);
}
