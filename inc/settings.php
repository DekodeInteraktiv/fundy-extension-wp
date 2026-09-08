<?php
/**
 * Settings.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\Settings;

use function Dekode\Fundraising\get_base_url;

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
 * Sanitize a custom CSS URL.
 *
 * Only https is allowed, except plain http for localhost hosts: the styling
 * dev loop serves from localhost, which browsers exempt from mixed-content
 * blocking. Anything else collapses to '' (feature off).
 */
function sanitize_custom_css_url( string $value ): string {
	$value = \esc_url_raw( \trim( $value ), [ 'http', 'https' ] );

	if ( '' === $value ) {
		return '';
	}

	$scheme = \wp_parse_url( $value, \PHP_URL_SCHEME );

	if ( 'https' === $scheme ) {
		return $value;
	}

	$host = \strtolower( (string) \wp_parse_url( $value, \PHP_URL_HOST ) );

	if ( 'http' === $scheme && \in_array( $host, [ 'localhost', '127.0.0.1' ], true ) ) {
		return $value;
	}

	return '';
}

/**
 * Sanitize an organization theme name.
 *
 * Mirrors the shape core enforces on theme names
 * (OrganizationTheme::VALID_NAME_PATTERN, max 50 characters); anything else
 * collapses to '' (no theme).
 */
function sanitize_theme_name( string $value ): string {
	$value = \trim( $value );

	return 1 === \preg_match( '/^[a-zA-Z0-9-]{1,50}$/', $value ) ? $value : '';
}

/**
 * Sanitize an organization public id.
 *
 * Core public ids are UUIDs; anything else collapses to '' (unknown).
 */
function sanitize_organization_public_id( string $value ): string {
	$value = \strtolower( \trim( $value ) );

	return 1 === \preg_match( '/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/', $value ) ? $value : '';
}

/**
 * Sanitize a Live Map kiosk token.
 *
 * Core issues 64 hex characters; anything else collapses to '' (no link).
 */
function sanitize_live_map_kiosk_token( string $value ): string {
	$value = \strtolower( \trim( $value ) );

	return 1 === \preg_match( '/^[0-9a-f]{64}$/', $value ) ? $value : '';
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
 * Retrieve the debug config value.
 */
function get_debug_enabled(): bool {
	return ! empty( get_setting_value( 'debug', '' ) );
}

/**
 * Retrieve the custom CSS URL for Fundy forms ('' = feature off).
 */
function get_custom_css_url(): string {
	// Re-sanitized on read so values written outside the settings screens
	// (wp-cli, importers) can't bypass the scheme allowlist.
	return sanitize_custom_css_url( (string) get_setting_value( 'custom_css_url', '' ) );
}

/**
 * Retrieve the selected organization theme name ('' = none).
 */
function get_theme_name(): string {
	return sanitize_theme_name( (string) get_setting_value( 'theme', '' ) );
}

/**
 * Retrieve the resolved theme stylesheet URL ('' = none).
 */
function get_theme_css_url(): string {
	// Re-sanitized on read so values written outside the settings screens
	// (wp-cli, importers) can't bypass the scheme allowlist.
	return sanitize_custom_css_url( (string) get_setting_value( 'theme_css_url', '' ) );
}

/**
 * Retrieve the stylesheet URL injected into Fundy forms ('' = none).
 *
 * The custom CSS URL is the explicit override (and the local dev loop);
 * the selected theme's deployed stylesheet applies otherwise.
 */
function get_form_css_url(): string {
	$custom_css_url = get_custom_css_url();

	if ( '' !== $custom_css_url ) {
		return $custom_css_url;
	}

	return get_theme_css_url();
}

/**
 * Retrieve the organization public id ('' = unknown).
 *
 * Fetched from the Fundy API and stored whenever an API key is saved, so
 * front-end renders never make a remote request for it.
 */
function get_organization_public_id(): string {
	return sanitize_organization_public_id( (string) get_setting_value( 'organization_public_id', '' ) );
}

/**
 * The assets.fundy.cloud environment directory for the current core URL.
 *
 * Mirrors the forms bundle's getEnvironmentFromCoreUrl(): anything not
 * recognisably stage or test is treated as production.
 */
function get_assets_environment(): string {
	$base_url = get_base_url();

	if ( false !== \strpos( $base_url, 'stage.fundy.cloud' ) ) {
		return 'stage';
	}

	if ( false !== \strpos( $base_url, 'test.fundy.cloud' ) ) {
		return 'test';
	}

	return 'production';
}

/**
 * The organization stylesheet URL the forms bundle will load ('' when the
 * organization public id is unknown).
 *
 * Built exactly the way the forms bundle builds it from the schema's
 * organization_id: the theme segment comes from the Theme setting,
 * lowercased because the bundle lowercases data-theme, falling back to
 * "default".
 */
function get_organization_css_url(): string {
	$public_id = get_organization_public_id();

	if ( '' === $public_id ) {
		return '';
	}

	$theme = \strtolower( get_theme_name() );

	if ( '' === $theme ) {
		$theme = 'default';
	}

	return \sprintf( 'https://assets.fundy.cloud/styles/%s/%s/%s.css', get_assets_environment(), $public_id, $theme );
}

/**
 * Retrieve the render script environment ('dev' or 'prod').
 */
function get_script_env(): string {
	return get_forms_script_env();
}
