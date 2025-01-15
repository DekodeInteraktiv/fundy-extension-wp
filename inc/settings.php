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
    $site_options = \get_option( 'fundy_options', [] );
    $api_key      = $site_options['api_key'] ?? '';

    if ( ! empty( $api_key ) ) {
        return $api_key;
    }

    if ( \is_multisite() ) {
        $network_options = \get_network_option( null, 'fundy_network_options', [] );
        $api_key         = $network_options['api_key'] ?? '';

        if ( ! empty( $api_key ) ) {
            return $api_key;
        }
    }

    return '';
}

/**
 * Retrieve the render script environment ('dev' or 'prod').
 */
function get_script_env(): string {
    $site_options = \get_option( 'fundy_options', [] );
    $script_env   = $site_options['script_env'] ?? '';

    if ( ! empty( $script_env ) ) {
        return $script_env;
    }

    if ( \is_multisite() ) {
        $network_options = \get_network_option( null, 'fundy_network_options', [] );
        $script_env      = $network_options['script_env'] ?? '';

        if ( ! empty( $script_env ) ) {
            return $script_env;
        }
    }

    return 'prod';
}