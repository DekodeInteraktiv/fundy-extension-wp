<?php
/**
 * Assets.
 *
 * @package fundy
 */

declare( strict_types = 1 );

namespace Dekode\Fundy\Assets;

if ( ! \defined( 'ABSPATH' ) ) {
	die();
}

/**
 * Hooks
 */
\add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\register_scripts' );

function register_scripts() {
	if ( \wp_script_is( 'fundy-form-script', 'registered' ) ) {
		return;
	}

	$development_script = \get_option( 'fundraising_option_development_script', 'false' );

	if ( 'true' === $development_script ) {
		\wp_register_script( 'fundy-form-script', 'https://assets.fundy.cloud/form-renderer.development.js', [], null, true );
	} else {
		\wp_register_script( 'fundy-form-script', 'https://assets.fundy.cloud/form-renderer.latest.js', [], null, true );
	}
}
