<?php
/**
 * Settings.
 *
 * @package fundy
 */

declare( strict_types = 1 );

namespace Dekode\Fundy\Settings;

/**
 * Hooks
 */
\add_action( 'init', __NAMESPACE__ . '\\register_settings' );

/**
 * Register Settings
 */
function register_settings(): void {
	\register_setting(
		'fundy_settings',
		'fundy_option_token',
		[ // phpcs:ignore Generic.Arrays.DisallowShortArraySyntax.Found
			'type'         => 'string',
			'show_in_rest' => true,
			'default'      => '',
		]
	);

	\register_setting(
		'fundy_settings',
		'fundy_option_development_script',
		[ // phpcs:ignore Generic.Arrays.DisallowShortArraySyntax.Found
			'type'         => 'string',
			'show_in_rest' => true,
			'default'      => 'false',
		]
	);
}

/**
 * Retrieve the API key.
 */
function get_api_key(): string {
	$site_key = \get_option( 'fundy_api_key', '' );
	if ( ! empty( $site_key ) ) {
		return $site_key;
	}

	if ( \is_multisite() ) {
		return \get_network_option( null, 'fundy_api_key', '' );
	}

	return '';
}

/**
 * Retrieve the render script environment.
 */
function get_script_env(): string {
	$site_env = \get_option( 'fundy_script_env', '' );
	if ( ! empty( $site_env ) ) {
		return $site_env;
	}

	if ( \is_multisite() ) {
		return \get_network_option( null, 'fundy_script_env', 'prod' );
	}

	return 'prod';
}
