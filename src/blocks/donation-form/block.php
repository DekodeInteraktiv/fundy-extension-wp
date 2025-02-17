<?php
/**
 * Donation Form.
 *
 * @package fundy
 */

declare( strict_types = 1 );

namespace Dekode\Fundy\Blocks\DonationForm;

use function Dekode\Fundy\get_base_url;
use function Dekode\Fundy\Settings\get_api_key;

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

	\wp_set_script_translations( 'fundy-donation-form-editor-script', 'fundy', \FUNDY_PLUGIN_DIR . '/languages' );

	\wp_localize_script(
		'fundy-donation-form-editor-script',
		'fundySettings',
		[
			'baseURL'  => get_base_url(),
			'apiToken' => get_api_key(),
		]
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

	\wp_enqueue_script( 'fundy-form-script' );

	return \sprintf( '
		<div %s>
			<div
				class="fundy-form fundraising-form"
				data-form-id="%s"
				data-core-url="%s"
				data-button-classes="%s"
			></div>
		</div>
		',
		\get_block_wrapper_attributes( [
			'class' => 'fundy-form-wrapper',
		] ),
		\esc_attr( $attributes['formId'] ),
		\esc_attr( get_base_url() ),
		\esc_attr( 'wp-element-button' ),
	);
}
