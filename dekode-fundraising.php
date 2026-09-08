<?php
/**
 * Plugin Name:       Dekode Fundraising
 * Plugin URI:        https://github.com/DekodeInteraktiv/fundy-extension-wp/
 * Description:       Integrates with Dekode Fundraising, making it easy to add donation forms to your website.
 * Version:           2.6.0
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

\define( 'FUNDY_VERSION', '2.6.0' );
\define( 'FUNDY_PLUGIN_URL', \plugin_dir_url( __FILE__ ) );
\define( 'FUNDY_PLUGIN_DIR', \plugin_dir_path( __FILE__ ) );
\define( 'FUNDY_MIN_PHP_VERSION', '8.1' );
\define( 'FUNDY_MIN_WP_VERSION', '6.4' );

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
 * Define the Surge URL.
 *
 * Use existing constant if available, if not check for environment
 * variable and if not default to production URL.
 */
if ( ! \defined( 'FUNDY_SURGE_URL' ) ) {
	if ( \function_exists( 'env' ) && ! empty( \env( 'FUNDY_SURGE_URL' ) ) ) {
		\define( 'FUNDY_SURGE_URL', \env( 'FUNDY_SURGE_URL' ) );
	} else {
		\define( 'FUNDY_SURGE_URL', 'https://fundy.cloud/surge' );
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
 * Sanitize author-supplied form URL parameters.
 *
 * The forms runtime appends these to URL query strings, hence the
 * conservative shape: keys must match [A-Za-z0-9_-]{1,64}, values must be
 * scalar and are capped at 500 characters. Entries outside those limits are
 * dropped. Shared by the donation-form block and the [fundy_form] shortcode
 * so both embed paths enforce the same limits.
 *
 * @param array $params Raw parameters, keyed by parameter name.
 * @return array<string, string> The sanitized parameters.
 */
function sanitize_form_url_params( array $params ): array {
	$sanitized = [];

	foreach ( $params as $key => $value ) {
		if ( ! \preg_match( '/^[A-Za-z0-9_-]{1,64}$/', (string) $key ) || ! \is_scalar( $value ) ) {
			continue;
		}

		$sanitized[ (string) $key ] = \mb_substr( (string) $value, 0, 500 );
	}

	return $sanitized;
}

/**
 * The data-theme attribute for form containers ('' when no theme is set).
 *
 * The forms bundle also builds an organization stylesheet URL from the
 * schema's organization_id, taking the theme name from the container's
 * data-theme attribute; without it that path falls back to the "default"
 * theme regardless of the Theme setting. Shared by the donation-form block
 * and the [fundy_form] shortcode so both embed paths agree.
 */
function theme_data_attribute(): string {
	$theme = Settings\get_theme_name();

	if ( '' === $theme ) {
		return '';
	}

	return \sprintf( ' data-theme="%s"', \esc_attr( $theme ) );
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
	\load_plugin_textdomain( 'dekode-fundraising', false, \dirname( \plugin_basename( __FILE__ ) ) . '/languages' );
}
\add_action( 'init', __NAMESPACE__ . '\\load_textdomain' );

require_once FUNDY_PLUGIN_DIR . 'inc/settings.php';
require_once FUNDY_PLUGIN_DIR . 'inc/api.php';
require_once FUNDY_PLUGIN_DIR . 'inc/rest.php';
require_once FUNDY_PLUGIN_DIR . 'inc/settings-page.php';
require_once FUNDY_PLUGIN_DIR . 'inc/settings-page-network.php';
require_once FUNDY_PLUGIN_DIR . 'inc/shortcodes.php';
require_once FUNDY_PLUGIN_DIR . 'inc/assets.php';
require_once FUNDY_PLUGIN_DIR . 'inc/head.php';
require_once FUNDY_PLUGIN_DIR . 'inc/live-map.php';

// Blocks.
require_once FUNDY_PLUGIN_DIR . 'src/blocks/donation-form/block.php';
require_once FUNDY_PLUGIN_DIR . 'src/blocks/donation-receipt/block.php';
require_once FUNDY_PLUGIN_DIR . 'src/blocks/live-map/block.php';
