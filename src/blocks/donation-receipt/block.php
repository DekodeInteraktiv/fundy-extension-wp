<?php
/**
 * Donation Receipt.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\Blocks\DonationReceipt;

use function Dekode\Fundraising\get_base_url;

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
	\register_block_type_from_metadata( \FUNDY_PLUGIN_DIR . 'build/blocks/donation-receipt/block.json', [
		'render_callback' => __NAMESPACE__ . '\\render_block',
	] );

	\wp_set_script_translations( 'fundy-donation-receipt-editor-script', 'dekode-fundraising', \FUNDY_PLUGIN_DIR . '/languages' );
	\wp_set_script_translations( 'fundy-donation-receipt-script', 'dekode-fundraising', \FUNDY_PLUGIN_DIR . '/languages' );

	if (! \is_admin() ) {
		\wp_localize_script(
			'fundy-donation-receipt-script',
			'fundySettings',
			[
				'baseURL'  => get_base_url(),
			]
		);
	}
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
