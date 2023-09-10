<?php
/**
 * Settings page.
 *
 * @package donations
 */

declare( strict_types = 1 );

namespace Donations\ExtensionLibrary\SettingsPage;

// Check we are on the admin interface.
if ( ! \is_blog_admin() ) {
	return;
}

/**
 * Hooks
 */
\add_action( 'admin_menu', __NAMESPACE__ . '\\register_page' );
\add_action( 'plugin_action_links_' . \plugin_basename( __FILE__ ), __NAMESPACE__ . '\\settings_link' );


/**
 * Registers Page
 */
function register_page() {
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
function settings_link( $links ) : array {
	$label = \esc_html__( 'Settings', 'donations' );
	$slug  = 'options_donations';

	\array_unshift( $links, "<a href='options-general.php?page=$slug'>$label</a>" );

	return $links;
}
