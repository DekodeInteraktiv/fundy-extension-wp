<?php
/**
 * Live Map block.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\Blocks\LiveMap;

use function Dekode\Fundraising\LiveMap\build_embed_url;
use function Dekode\Fundraising\LiveMap\get_embed_organization_id;
use function Dekode\Fundraising\LiveMap\render;
use function Dekode\Fundraising\LiveMap\sanitize_args;

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
	\register_block_type_from_metadata( \FUNDY_PLUGIN_DIR . 'build/blocks/live-map/block.json', [
		'render_callback' => __NAMESPACE__ . '\\render_block',
	] );

	\wp_set_script_translations( 'fundy-live-map-editor-script', 'dekode-fundraising', \FUNDY_PLUGIN_DIR . 'languages' );

	$public_id = get_embed_organization_id();

	// The editor preview is the same iframe the front end renders, built
	// here so the interface origin and the id never reach the JS by any
	// other route; the id is public by design, the API token never is.
	$settings = [
		'hasOrganizationId' => '' !== $public_id,
		'previewUrl'        => '' !== $public_id ? build_embed_url( sanitize_args( [] ), $public_id ) : '',
	];

	if ( \current_user_can( 'manage_options' ) ) {
		$settings['settingsUrl'] = \admin_url( 'options-general.php?page=fundy_settings_page' );
	}

	\wp_add_inline_script(
		'fundy-live-map-editor-script',
		'window.fundyLiveMapSettings = ' . \wp_json_encode( $settings, \JSON_HEX_TAG | \JSON_HEX_AMP | \JSON_UNESCAPED_SLASHES ) . ';',
		'before'
	);
}

/**
 * Render the block.
 *
 * @param array<string, mixed> $attributes Block attributes.
 */
function render_block( array $attributes ): string {
	return render( $attributes, \get_block_wrapper_attributes( [ 'class' => 'fundy-live-map-wrapper' ] ) );
}
