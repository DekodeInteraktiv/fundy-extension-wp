<?php
/**
 * Donation Form.
 *
 * @package donations
 */

declare( strict_types = 1 );

namespace Donations\BlockLibrary\ContentGenerationBlock;

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
	\register_block_type_from_metadata(
		__DIR__ . '/src',
		[
			'render_callback' => __NAMESPACE__ . '\\render_block',
		]
	);
	\wp_localize_script(
		'donations-donation-form-editor-script',
		'donationsSettings',
		[
			'baseURL' => get_fundy_url(),
		]
	);
}

/**
 * Render the block.
 */
function render_block(): string {
	\wp_enqueue_script( 'fundy-form-script' );

	return '<div class="fundy-form donations-form wp-block-donations-form" data-form-id="2"></div>';
}

/**
 * Return the Fundy URL based on environment.
 */
function get_fundy_url() {
	switch (\wp_get_environment_type()) {
		case 'staging':
			return 'https://fundy-stage-be.do.dekodes.no';
		case 'production':
			return 'https://fundy-stage-be.do.dekodes.no';
		default:
		return 'http://localhost';
	}
}
