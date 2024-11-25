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
\add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\register_assets' );

function register_assets() {
	if ( \wp_script_is( 'fundy-form-script', 'registered' ) ) {
		return;
	}

	$development_script = \get_option( 'fundraising_option_development_script', 'false' );

	if ( 'true' === $development_script ) {
		\wp_register_script( 'fundy-form-script', 'https://assets.fundy.cloud/fundy-forms.development.js', [], null, true );

		if ( \apply_filters( 'fundy/enqueue/form_styles', true ) ) {
			\wp_enqueue_style( 'fundy-form-style', 'https://assets.fundy.cloud/fundy-forms.development.css', [], null, 'all' );
		}
	} else {
		\wp_register_script( 'fundy-form-script', 'https://assets.fundy.cloud/fundy-forms.latest.js', [], null, true );

		if ( \apply_filters( 'fundy/enqueue/form_styles', true ) ) {
			\wp_enqueue_style( 'fundy-form-style', 'https://assets.fundy.cloud/fundy-forms.latest.css', [], null, 'all' );
		}
	}
}
