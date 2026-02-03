<?php
/**
 * Settings.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\Settings;

/**
 * Retrieve a setting value, respecting multisite overrides.
 *
 * @param string $key     Option key.
 * @param mixed  $default Default value when not set.
 * @return mixed
 */
function get_setting_value( string $key, mixed $default = '' ): mixed {
	$site_options = \get_option( 'fundy_options', [] );
	if ( ! \is_array( $site_options ) ) {
		$site_options = [];
	}

	if ( ! \is_multisite() ) {
		return $site_options[ $key ] ?? $default;
	}

	// Should site override network?
	if ( ! empty( $site_options['override_network'] ) ) {
		return $site_options[ $key ] ?? $default;
	}

	$network_options = \get_network_option( null, 'fundy_network_options', [] );
	if ( ! \is_array( $network_options ) ) {
		$network_options = [];
	}

	return $network_options[ $key ] ?? $default;
}

/**
 * Retrieve a setting value with a flag indicating if the key existed.
 *
 * @param string $key     Option key.
 * @param mixed  $default Default value when not set.
 * @return array{0: mixed, 1: bool} [value, exists]
 */
function get_setting_value_with_presence( string $key, mixed $default = '' ): array {
	$site_options = \get_option( 'fundy_options', [] );
	if ( ! \is_array( $site_options ) ) {
		$site_options = [];
	}

	if ( ! \is_multisite() ) {
		return [
			$site_options[ $key ] ?? $default,
			\array_key_exists( $key, $site_options ),
		];
	}

	if ( ! empty( $site_options['override_network'] ) ) {
		return [
			$site_options[ $key ] ?? $default,
			\array_key_exists( $key, $site_options ),
		];
	}

	$network_options = \get_network_option( null, 'fundy_network_options', [] );
	if ( ! \is_array( $network_options ) ) {
		$network_options = [];
	}

	return [
		$network_options[ $key ] ?? $default,
		\array_key_exists( $key, $network_options ),
	];
}

/**
 * Normalize script environment values.
 */
function normalize_script_env( string $value, string $default = 'prod' ): string {
	$value = \strtolower( $value );

	if ( \in_array( $value, [ 'dev', 'prod' ], true ) ) {
		return $value;
	}

	if ( 'development' === $value ) {
		return 'dev';
	}

	if ( 'latest' === $value ) {
		return 'prod';
	}

	return $default;
}

/**
 * Retrieve the API key.
 */
function get_api_key(): string {
	return (string) get_setting_value( 'api_key', '' );
}

/**
 * Retrieve the forms script environment ('dev' or 'prod').
 */
function get_forms_script_env(): string {
	$value = get_setting_value( 'forms_script', '' );

	if ( '' !== $value ) {
		return normalize_script_env( (string) $value, 'prod' );
	}

	$legacy = get_setting_value( 'script_env', '' );

	if ( '' !== $legacy ) {
		return normalize_script_env( (string) $legacy, 'prod' );
	}

	return 'prod';
}

/**
 * Retrieve the conversion script environment ('dev' or 'prod').
 */
function get_conversion_script_env(): string {
	$value = get_setting_value( 'conversion_script', '' );

	if ( '' !== $value ) {
		return normalize_script_env( (string) $value, 'prod' );
	}

	$legacy = get_setting_value( 'script_env', '' );

	if ( '' !== $legacy ) {
		return normalize_script_env( (string) $legacy, 'prod' );
	}

	return 'prod';
}

/**
 * Check if the tracking script is enabled.
 */
function get_tracking_script_enabled(): bool {
	[ $enabled, $exists ] = get_setting_value_with_presence( 'tracking_enabled', '' );

	if ( ! $exists ) {
		return false;
	}

	return ! empty( $enabled );
}

/**
 * Retrieve the tracking script environment ('dev' or 'prod').
 */
function get_tracking_script_env(): string {
	$value = get_setting_value( 'tracking_script', '' );

	if ( '' !== $value ) {
		return normalize_script_env( (string) $value, 'prod' );
	}

	return 'prod';
}

/**
 * Retrieve the disableDataLayerEvent config value.
 */
function get_disable_data_layer_event(): bool {
	return ! empty( get_setting_value( 'disable_data_layer_event', '' ) );
}

/**
 * Retrieve the render script environment ('dev' or 'prod').
 */
function get_script_env(): string {
	return get_forms_script_env();
}
