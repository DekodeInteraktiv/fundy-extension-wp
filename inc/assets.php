<?php
/**
 * Assets.
 *
 * @package donations
 */

declare( strict_types = 1 );

namespace Donations\Assets;

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

/**
 * Hooks
 */
\add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\register_scripts' );

function register_scripts() {
	\wp_register_script( 'fundy-form-script', DONATIONS_PLUGIN_URL . 'dist/fundy-form-renderer.js', ['react', 'react-dom'], \DONATIONS_VERSION, true );
}
