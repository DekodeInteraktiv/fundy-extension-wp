<?php
/**
 * Plugin Name: Fundraising by Dekode
 * Description: Integrates with the Fundraising Engine, making it easy to add donation forms to your website.
 * Version: 0.4.0
 * Update URI: false
 *
 * @package fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising;

if ( ! \defined( 'ABSPATH' ) ) {
	die();
}

\define( 'FUNDRAISING_VERSION', '0.4.0' );
\define( 'FUNDRAISING_PLUGIN_URL', \plugin_dir_url( __FILE__ ) );
\define( 'FUNDRAISING_PLUGIN_DIR', \plugin_dir_path( __FILE__ ) );
\define( 'FUNDRAISING_MIN_PHP_VERSION', '8.0' );
\define( 'FUNDRAISING_MIN_WP_VERSION', '6.0' );

/**
 * Check for required PHP version.
 *
 * @return bool
 */
function php_version_check() {
	if ( \version_compare( PHP_VERSION, FUNDRAISING_MIN_PHP_VERSION, '<' ) ) {
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
	if ( \version_compare( $GLOBALS['wp_version'], FUNDRAISING_MIN_WP_VERSION, '<' ) ) {
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
			\esc_html__( 'Fundraising plugin requires PHP %1$s or higher. You are still on %2$s.', 'fundraising' ),
			\esc_html( FUNDRAISING_MIN_PHP_VERSION ),
			\esc_html( PHP_VERSION )
		);
	}

	if ( ! wp_version_check() ) {
		$notices[] = \sprintf(
			/* translators: placeholder 1 is minimum required WordPress version, placeholder 2 is installed WordPress version. */
			\esc_html__( 'Fundraising plugin requires at least WordPress in version %1$s, You are on %2$s.', 'fundraising' ),
			\esc_html( FUNDRAISING_MIN_WP_VERSION ),
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

require_once FUNDRAISING_PLUGIN_DIR . 'inc/assets.php';
require_once FUNDRAISING_PLUGIN_DIR . 'inc/extensions.php';
require_once FUNDRAISING_PLUGIN_DIR . 'inc/blocks.php';
require_once FUNDRAISING_PLUGIN_DIR . 'inc/rest.php';
