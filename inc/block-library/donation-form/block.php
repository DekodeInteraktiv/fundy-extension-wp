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
}

/**
 * Render the block.
 */
function render_block(): string {
	return '<div class="donations-form wp-block-donations-form"></div>';
}
