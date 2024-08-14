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
	\wp_register_script( 'fundy-form-script', 'https://assets.fundy.cloud/form-renderer.latest.js', [], false, true );
}
