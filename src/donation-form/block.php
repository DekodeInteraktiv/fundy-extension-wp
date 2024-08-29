<?php
/**
 * Donation Form.
 *
 * @package fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\DonationForm;

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
	\register_block_type( __DIR__, [
		'render_callback' => __NAMESPACE__ . '\\render_block',
	] );

	\wp_localize_script(
		'fundraising-donation-form-editor-script',
		'fundraisingSettings',
		[
			'baseURL'  => \FUNDY_CORE_URL,
			'apiToken' => \get_option('fundraising_option_token', ''),
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

	return sprintf( '
		<div %s>
			<div
				class="fundraising-form"
				data-form-id="%s"
				data-core-url="%s"
				data-button-classes="%s"
			></div>
		</div>
		',
		\get_block_wrapper_attributes( [
			'class' => 'fundraising-form-wrapper',
		] ),
		\esc_attr( $attributes['formId'] ),
		\esc_attr( \FUNDY_CORE_URL ),
		\esc_attr( 'wp-element-button' ),
	);
}
