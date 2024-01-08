<?php
/**
 * Plugin Name: Fundy (Fundraising)
 * Description: Integrates with Fundy, making it easy to add donation forms to your website.
 * Version: 0.1.3
 * Update URI: false
 *
 * @package donations
 */

declare( strict_types = 1 );

namespace Donations;

if ( ! \defined( 'ABSPATH' ) ) {
	die();
}

\define( 'DONATIONS_VERSION', '0.1.3' );
\define( 'DONATIONS_PLUGIN_URL', \plugin_dir_url( __FILE__ ) );
\define( 'DONATIONS_PLUGIN_DIR', \plugin_dir_path( __FILE__ ) );
\define( 'DONATIONS_MIN_PHP_VERSION', '8.0' );
\define( 'DONATIONS_MIN_WP_VERSION', '6.0' );

/**
 * Check for required PHP version.
 *
 * @return bool
 */
function php_version_check() {
	if ( \version_compare( PHP_VERSION, DONATIONS_MIN_PHP_VERSION, '<' ) ) {
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
	if ( \version_compare( $GLOBALS['wp_version'], DONATIONS_MIN_WP_VERSION, '<' ) ) {
		return false;
	}
	return true;
}

/**
 * Admin notices if requirements aren't met.
 */
function requirements_error_notice() {
	$notices = [];

	if ( ! \php_version_check() ) {
		$notices[] = \sprintf(
			/* translators: placeholder 1 is minimum required PHP version, placeholder 2 is installed PHP version. */
			\esc_html__( 'Donations plugin requires PHP %1$s or higher. You’re still on %2$s.', 'donations' ),
			\esc_html( DONATIONS_MIN_PHP_VERSION ),
			\esc_html( PHP_VERSION )
		);
	}

	if ( ! wp_version_check() ) {
		$notices[] = \sprintf(
			/* translators: placeholder 1 is minimum required WordPress version, placeholder 2 is installed WordPress version. */
			\esc_html__( 'Donations plugin requires at least WordPress in version %1$s, You are on %2$s.', 'donations' ),
			\esc_html( DONATIONS_MIN_WP_VERSION ),
			\esc_html( $GLOBALS['wp_version'] )
		);
	}

	foreach ( $notices as $notice ) {
		echo '<div class="notice notice-error"><p>' . \esc_html( $notice ) . '</p></div>';
	}
}

/**
 * If either check fails, display notice and bail.
 */
if ( ! php_version_check() || ! wp_version_check() ) {
	\add_action( 'admin_notices', __NAMESPACE__ . '\\requirements_error_notice' );
	return;
}

require_once DONATIONS_PLUGIN_DIR . 'inc/assets.php';
require_once DONATIONS_PLUGIN_DIR . 'inc/extensions.php';
require_once DONATIONS_PLUGIN_DIR . 'inc/blocks.php';
require_once DONATIONS_PLUGIN_DIR . 'inc/rest.php';
