<?php
/**
 * Settings page.
 *
 * @package donations
 */

declare( strict_types = 1 );

namespace Donations\ExtensionLibrary\SettingsPage;

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
		\__( 'Donations Settings', 'donations' ),
		\__( 'Donations', 'donations' ),
		'manage_options',
		'options_donations',
		__NAMESPACE__ . '\\render_page',
	);
}

/**
 * Renders Page
 */
function render_page() {
	?>
	<div id="donations-plugin-settings"></div>
	<?php
}

/**
 * Add Settings Link to Plugin Screen.
 *
 * @param
 */
function settings_link( array $links ) : array {
	$label = \esc_html__( 'Settings', 'donations' );
	$slug  = 'options_donations';

	\array_unshift( $links, "<a href='options-general.php?page=$slug'>$label</a>" );

	return $links;
}

/**
 * Register Settings
 */
function register_settings(): void {
	\register_setting(
		'donations_settings',
		'donations_option_token',
		[ // phpcs:ignore Generic.Arrays.DisallowShortArraySyntax.Found
			'type'         => 'string',
			'show_in_rest' => true,
			'default'      => '',
		]
	);
}

/**
 * Register Assets
 */
function register_assets(): void {
	if ( \file_exists( plugin_dir_path( __FILE__ ) . 'build/index.asset.php' ) ) {
		$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

		\wp_register_script(
			'donations-settings',
			plugins_url( 'settings-page/build/index.js', dirname( __FILE__ ) ),
			$asset_file['dependencies'],
			$asset_file['version'],
			false
		);
		\wp_enqueue_script( 'donations-settings' );
	}

	\wp_register_style(
		'donations-settings-style',
		plugins_url( 'build/index.css', dirname(__FILE__) ),
		['wp-components'],
		\filemtime( __DIR__ . '/build/index.css' ),
	);
	\wp_enqueue_style( 'donations-settings-style' );
}
