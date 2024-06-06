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
			'baseURL' => get_fundy_url(),
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
				data-env="%s"
				data-lang="%s"
				data-button-classes="%s"
			></div>
		</div>
		',
		\get_block_wrapper_attributes( [
			'class' => 'fundraising-form-wrapper',
		] ),
		\esc_attr( $attributes['formId'] ),
		\esc_attr( \wp_get_environment_type() ),
		\esc_attr( \get_locale() ),
		\esc_attr( 'wp-element-button' ),
	);
}

/**
 * Return the Fundy URL based on environment.
 */
function get_fundy_url() {
	switch (\wp_get_environment_type()) {
		case 'local':
			return 'http://localhost';
		case 'staging':
		case 'stage':
		case 'development':
		case 'develop':
			return 'https://fundy-stage-be.do.dekodes.no';
		case 'production':
		default:
			return 'https://fundy-prod.do.dekodes.no/core';
	}
}
