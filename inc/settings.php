<?php
/**
 * Blocks.
 */

declare( strict_types = 1 );

namespace Donations;

/**
 * Actions
 */
\add_action( 'init', __NAMESPACE__ . '\\register_settings' );
\add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\\register_assets' );

/**
 * Filters
 */

/**
 * Register Settings
 */
function register_settings() {
	\register_setting(
		'donations_settings',
		'donations_option_key',
		[ // phpcs:ignore Generic.Arrays.DisallowShortArraySyntax.Found
			'type'         => 'string',
			'show_in_rest' => true,
			'default'      => '',
		]
	);

	\register_setting(
		'donations_settings',
		'donations_option_url',
		[ // phpcs:ignore Generic.Arrays.DisallowShortArraySyntax.Found
			'type'         => 'string',
			'show_in_rest' => true,
			'default'      => '',
		]
	);
}

function register_assets() {
	$dependencies = [];

	if ( \file_exists( DONATIONS_PLUGIN_DIR . 'build/settings.asset.php' ) ) {
		$asset_file   = include DONATIONS_PLUGIN_DIR . 'build/settings.asset.php';
		$dependencies = \array_merge( $asset_file['dependencies'], $dependencies );
	}

	\wp_register_script(
		'donations-settings',
		DONATIONS_PLUGIN_URL . 'build/settings.js',
		$dependencies,
		\filemtime( DONATIONS_PLUGIN_DIR . 'build/settings.js' ),
		false
	);
	\wp_enqueue_script( 'donations-settings' );

	\wp_register_style(
		'donations-settings-style',
		DONATIONS_PLUGIN_URL . 'build/settings.css',
		['wp-components'],
		\filemtime( DONATIONS_PLUGIN_DIR . 'build/settings.css' )
	);
	\wp_enqueue_style( 'donations-settings-style' );
}
