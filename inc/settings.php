<?php
/**
 * Settings.
 *
 * @package fundy
 */

declare( strict_types = 1 );

namespace Dekode\Fundy\Settings;

/**
 * Retrieve the API key.
 */
function get_api_key(): string {
	$site_options = \get_option( 'fundy_options', [] );

	if ( ! \is_multisite() ) {
		return $site_options['api_key'] ?? '';
	}

	// Should site override network?
	if ( ! empty( $site_options['override_network'] ) ) {
		return $site_options['api_key'] ?? '';
	}

	$network_options = \get_network_option( null, 'fundy_network_options', [] );

	return $network_options['api_key'] ?? '';
}

/**
 * Retrieve the render script environment ('dev' or 'prod').
 */
function get_script_env(): string {
	$site_options = \get_option( 'fundy_options', [] );

	if ( ! \is_multisite() ) {
		return $site_options['script_env'] ?? 'prod';
	}

	// Should site override network?
	if ( ! empty( $site_options['override_network'] ) ) {
		return $site_options['script_env'] ?? 'prod';
	}

	$network_options = \get_network_option( null, 'fundy_network_options', [] );

	return $network_options['script_env'] ?? 'prod';
}
