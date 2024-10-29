<?php
/**
 * Settings page.
 *
 * @package fundy
 */

declare( strict_types = 1 );

namespace Dekode\Fundy\SettingsPage;

/**
 * Hooks
 */
\add_action( 'init', __NAMESPACE__ . '\\register_settings' );

/**
 * Admin Hooks
 */
if (\is_blog_admin()) {
	\add_action( 'admin_menu', __NAMESPACE__ . '\\register_page' );
	\add_action( 'plugin_action_links_' . \plugin_basename( __FILE__ ), __NAMESPACE__ . '\\settings_link' );
	\add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\\register_assets' );
}

/**
 * Registers Page
 */
function register_page(): void {
	\add_options_page(
		\__( 'Fundy Settings', 'fundy' ),
		\__( 'Fundy', 'fundy' ),
		'manage_options',
		'options_fundraising',
		__NAMESPACE__ . '\\render_page',
	);
}

/**
 * Renders Page
 */
function render_page() {
	?>
	<div id="fundraising-plugin-settings"></div>
	<?php
}

/**
 * Add Settings Link to Plugin Screen.
 *
 * @param
 */
function settings_link( array $links ) : array {
	$label = \esc_html__( 'Settings', 'fundy' );
	$slug  = 'options_fundraising';

	\array_unshift( $links, "<a href='options-general.php?page=$slug'>$label</a>" );

	return $links;
}

/**
 * Register Settings
 */
function register_settings(): void {
	\register_setting(
		'fundraising_settings',
		'fundraising_option_token',
		[ // phpcs:ignore Generic.Arrays.DisallowShortArraySyntax.Found
			'type'         => 'string',
			'show_in_rest' => true,
			'default'      => '',
		]
	);

	\register_setting(
		'fundraising_settings',
		'fundraising_option_development_script',
		[ // phpcs:ignore Generic.Arrays.DisallowShortArraySyntax.Found
			'type'         => 'string',
			'show_in_rest' => true,
			'default'      => 'false',
		]
	);
}

/**
 * Register Assets
 */
function register_assets(): void {
	if ( \file_exists( plugin_dir_path( __FILE__ ) . '/editor.asset.php' ) ) {
		$asset_file = include plugin_dir_path( __FILE__ ) . '/editor.asset.php';

		\wp_register_script(
			'fundraising-settings',
			plugins_url( '/settings-page/editor.js', dirname( __FILE__ ) ),
			$asset_file['dependencies'],
			$asset_file['version'],
			false
		);
		\wp_enqueue_script( 'fundraising-settings' );

		\wp_set_script_translations( 'fundraising-settings', 'fundy', FUNDRAISING_PLUGIN_DIR . '/languages' );
	}

	\wp_enqueue_style( 'wp-components' );
}
