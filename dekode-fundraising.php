<?php
/**
 * Plugin Name:       Dekode Fundraising
 * Plugin URI:        https://github.com/DekodeInteraktiv/fundy-extension-wp/
 * Description:       Integrates with Dekode Fundraising, making it easy to add donation forms to your website.
 * Version:           2.3.0
 * Author:            Dekode Interaktiv
 * Author URI:        https://dekode.no
 * Text Domain:       dekode-fundraising
 * Domain Path:       /languages
 * License:           GPL v3
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.txt
 * Requires at least: 6.4
 * Requires PHP:      8.1
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising;

if ( ! \defined( 'ABSPATH' ) ) {
	die();
}

\define( 'FUNDY_VERSION', '2.3.0' );
\define( 'FUNDY_PLUGIN_URL', \plugin_dir_url( __FILE__ ) );
\define( 'FUNDY_PLUGIN_DIR', \plugin_dir_path( __FILE__ ) );
\define( 'FUNDY_MIN_PHP_VERSION', '8.0' );
\define( 'FUNDY_MIN_WP_VERSION', '6.0' );

/**
 * Define the Core URL.
 *
 * Use existing constant if available, if not check for environment
 * variable and if not default to production URL.
 */
if ( ! \defined( 'FUNDY_CORE_URL' ) ) {
	if ( \function_exists( 'env' ) && ! empty( \env( 'FUNDY_CORE_URL' ) ) ) {
		\define( 'FUNDY_CORE_URL', \env( 'FUNDY_CORE_URL' ) );
	} else {
		\define( 'FUNDY_CORE_URL', 'https://fundy.cloud/core' );
	}
}

/**
 * Check for required PHP version.
 *
 * @return bool
 */
function php_version_check() {
	if ( \version_compare( PHP_VERSION, FUNDY_MIN_PHP_VERSION, '<' ) ) {
		return false;
	}
	return true;
}

/**
 * Check for required WordPress version.
 *
 * @return bool
 */
function wp_version_check() {
	if ( \version_compare( $GLOBALS['wp_version'], FUNDY_MIN_WP_VERSION, '<' ) ) {
		return false;
	}
	return true;
}

/**
 * Admin notices if requirements aren't met.
 */
function requirements_error_notice() {
	$notices = [];

	if ( ! php_version_check() ) {
		$notices[] = \sprintf(
			/* translators: placeholder 1 is minimum required PHP version, placeholder 2 is installed PHP version. */
			\esc_html__( 'Dekode Fundraising plugin requires PHP %1$s or higher. You are still on %2$s.', 'dekode-fundraising' ),
			\esc_html( FUNDY_MIN_PHP_VERSION ),
			\esc_html( PHP_VERSION )
		);
	}

	if ( ! wp_version_check() ) {
		$notices[] = \sprintf(
			/* translators: placeholder 1 is minimum required WordPress version, placeholder 2 is installed WordPress version. */
			\esc_html__( 'Dekode Fundraising plugin requires at least WordPress in version %1$s, You are on %2$s.', 'dekode-fundraising' ),
			\esc_html( FUNDY_MIN_WP_VERSION ),
			\esc_html( $GLOBALS['wp_version'] )
		);
	}

	foreach ( $notices as $notice ) {
		echo '<div class="notice notice-error"><p>' . \esc_html( $notice ) . '</p></div>';
	}
}

/**
 * Get the API base URL.
 */
function get_base_url(): string {
	return \untrailingslashit( \apply_filters( 'fundy/base_url', FUNDY_CORE_URL ) );
}

/**
 * If either check fails, display notice and bail.
 */
if ( ! php_version_check() || ! wp_version_check() ) {
	\add_action( 'admin_notices', __NAMESPACE__ . '\\requirements_error_notice' );
	return;
}

/**
 * Load plugin text domain.
 */
function load_textdomain(): void {
	\load_plugin_textdomain( 'dekode-fundraising', false, FUNDY_PLUGIN_DIR . '/languages' );
}
\add_action( 'init', __NAMESPACE__ . '\\load_textdomain' );

require_once FUNDY_PLUGIN_DIR . 'inc/settings.php';
require_once FUNDY_PLUGIN_DIR . 'inc/settings-page.php';
require_once FUNDY_PLUGIN_DIR . 'inc/settings-page-network.php';
require_once FUNDY_PLUGIN_DIR . 'inc/shortcodes.php';
require_once FUNDY_PLUGIN_DIR . 'inc/assets.php';
require_once FUNDY_PLUGIN_DIR . 'inc/head.php';

// Blocks.
require_once FUNDY_PLUGIN_DIR . 'src/blocks/donation-form/block.php';
require_once FUNDY_PLUGIN_DIR . 'src/blocks/donation-receipt/block.php';
