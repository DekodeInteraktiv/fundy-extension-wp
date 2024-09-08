<?php
/**
 * Donation Receipt.
 *
 * @package fundy
 */

declare( strict_types = 1 );

namespace Dekode\Fundy\DonationReceipt;

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
		'fundy-donation-receipt-script',
		'fundySettings',
		[
			'baseURL'  => \FUNDY_CORE_URL,
		]
	);
}

/**
 * Render the block.
 */
function render_block( array $attributes ): string {
	return \sprintf( '
		<div %s>
			<div
				class="fundy-receipt"
			></div>
		</div>
		',
		\get_block_wrapper_attributes( [
			'class' => 'fundy-receipt-wrapper',
		] )
	);
}
