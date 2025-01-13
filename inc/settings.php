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
