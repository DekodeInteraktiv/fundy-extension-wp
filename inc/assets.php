<?php
/**
 * Assets.
 *
 * @package fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\Assets;

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

/**
 * Hooks
 */
\add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\register_scripts' );

function register_scripts() {
	\wp_register_script( 'fundy-form-script', FUNDRAISING_PLUGIN_URL . 'dist/form-renderer.js', ['react', 'react-dom'], \FUNDRAISING_VERSION, true );
}
