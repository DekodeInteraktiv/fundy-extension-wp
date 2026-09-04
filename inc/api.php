<?php
/**
 * Fundy API client.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\API;

use function Dekode\Fundraising\get_base_url;
use function Dekode\Fundraising\Settings\sanitize_custom_css_url;
use function Dekode\Fundraising\Settings\sanitize_organization_public_id;
use function Dekode\Fundraising\Settings\sanitize_theme_name;

if ( ! \defined( 'ABSPATH' ) ) {
	die();
}

const THEMES_CACHE_TTL = 5 * \MINUTE_IN_SECONDS;

/**
 * Hooks.
 *
 * The theme cache key embeds the API key, but the cache is still flushed on
 * every settings save so a changed key can never surface another
 * organization's themes from a stale entry.
 */
\add_action( 'update_option_fundy_options', __NAMESPACE__ . '\\flush_themes_cache_on_site_update', 10, 2 );
\add_action( 'add_option_fundy_options', __NAMESPACE__ . '\\flush_themes_cache_on_site_add', 10, 2 );
\add_action( 'update_site_option_fundy_network_options', __NAMESPACE__ . '\\flush_themes_cache_on_network_update', 10, 3 );
\add_action( 'add_site_option_fundy_network_options', __NAMESPACE__ . '\\flush_themes_cache_on_network_add', 10, 2 );

/**
 * Perform a GET request against the Fundy API.
 *
 * @param string $path    API path, starting with a slash.
 * @param string $api_key Organization API token.
 * @param int    $timeout Request timeout in seconds.
 * @return array<mixed>|\WP_Error Decoded JSON response, or an error.
 */
function request( string $path, string $api_key, int $timeout = 15 ): array|\WP_Error {
	$response = \wp_remote_get(
		get_base_url() . $path,
		[
			'headers' => [
				'Accept'        => 'application/json',
				'Authorization' => 'Bearer ' . $api_key,
			],
			'timeout' => $timeout,
		]
	);

	if ( \is_wp_error( $response ) ) {
		return new \WP_Error(
			'fundy_request_failed',
			\__( 'Could not reach the Fundy API.', 'dekode-fundraising' ),
			[ 'status' => 502 ]
		);
	}

	$code = (int) \wp_remote_retrieve_response_code( $response );

	if ( 200 !== $code ) {
		return new \WP_Error(
			'fundy_request_failed',
			\sprintf(
				/* translators: %d: HTTP status code returned by the Fundy API. */
				\__( 'The Fundy API returned an unexpected response (HTTP %d).', 'dekode-fundraising' ),
				$code
			),
			[ 'status' => 502 ]
		);
	}

	$data = \json_decode( \wp_remote_retrieve_body( $response ), true );

	if ( ! \is_array( $data ) ) {
		return new \WP_Error(
			'fundy_invalid_response',
			\__( 'The Fundy API returned an invalid response.', 'dekode-fundraising' ),
			[ 'status' => 502 ]
		);
	}

	return $data;
}

/**
 * Fetch the organization's deployed themes, cached for a few minutes.
 *
 * The settings page render fills the cache and the sanitize callback on the
 * following POST reads it, so a normal save resolves the theme URL without a
 * second remote request. Errors are never cached.
 *
 * @param string $api_key Organization API token.
 * @return array<string, array{name: string, url: string, deployed_at: string}>|\WP_Error Themes keyed by name, or an error.
 */
function get_organization_themes( string $api_key ): array|\WP_Error {
	if ( '' === $api_key ) {
		return new \WP_Error(
			'fundy_no_api_token',
			\__( 'No Fundy API token is configured.', 'dekode-fundraising' ),
			[ 'status' => 400 ]
		);
	}

	$cache_key = themes_cache_key( $api_key );
	$cached    = \get_transient( $cache_key );

	if ( \is_array( $cached ) ) {
		return $cached;
	}

	// The settings page blocks on this request, so the timeout is kept short:
	// a slow or down core delays wp-admin by at most this many seconds.
	$data = request( '/api/v1/organization/themes', $api_key, 5 );

	if ( \is_wp_error( $data ) ) {
		return $data;
	}

	$themes = [];

	foreach ( (array) ( $data['themes'] ?? [] ) as $theme ) {
		if ( ! \is_array( $theme ) ) {
			continue;
		}

		$name = sanitize_theme_name( (string) ( $theme['name'] ?? '' ) );
		$url  = sanitize_custom_css_url( (string) ( $theme['url'] ?? '' ) );

		if ( '' === $name || '' === $url ) {
			continue;
		}

		$themes[ $name ] = [
			'name'        => $name,
			'url'         => $url,
			'deployed_at' => (string) ( $theme['deployed_at'] ?? '' ),
		];
	}

	\set_transient( $cache_key, $themes, THEMES_CACHE_TTL );

	return $themes;
}

/**
 * Fetch the organization public id for an API key.
 *
 * Called from the settings sanitize flow when an API key is saved; the id
 * is stored as a setting so front-end renders never make this request.
 *
 * @param string $api_key Organization API token.
 * @return string|\WP_Error The organization public id (a UUID), or an error.
 */
function fetch_organization_public_id( string $api_key ): string|\WP_Error {
	if ( '' === $api_key ) {
		return new \WP_Error(
			'fundy_no_api_token',
			\__( 'No Fundy API token is configured.', 'dekode-fundraising' ),
			[ 'status' => 400 ]
		);
	}

	$data = request( '/api/v1/organization/self', $api_key, 5 );

	if ( \is_wp_error( $data ) ) {
		return $data;
	}

	$public_id = sanitize_organization_public_id( (string) ( $data['organization']['public_id'] ?? '' ) );

	if ( '' === $public_id ) {
		return new \WP_Error(
			'fundy_invalid_response',
			\__( 'The Fundy API returned an invalid response.', 'dekode-fundraising' ),
			[ 'status' => 502 ]
		);
	}

	return $public_id;
}

/**
 * Build the theme cache transient key for an API key.
 */
function themes_cache_key( string $api_key ): string {
	return 'fundy_org_themes_' . \md5( get_base_url() . '|' . $api_key );
}

/**
 * Delete the cached theme list for every API key found in the given option sets.
 *
 * @param array<mixed> ...$option_sets Old and/or new option arrays.
 */
function flush_themes_cache( array ...$option_sets ): void {
	foreach ( $option_sets as $options ) {
		$api_key = (string) ( $options['api_key'] ?? '' );

		if ( '' !== $api_key ) {
			\delete_transient( themes_cache_key( $api_key ) );
		}
	}
}

/**
 * Flush the theme cache when the site options are updated.
 *
 * @param mixed $old_value Previous option value.
 * @param mixed $value     New option value.
 */
function flush_themes_cache_on_site_update( mixed $old_value, mixed $value ): void {
	flush_themes_cache( (array) $old_value, (array) $value );
}

/**
 * Flush the theme cache when the site options are first added.
 *
 * @param string $option Option name.
 * @param mixed  $value  New option value.
 */
function flush_themes_cache_on_site_add( string $option, mixed $value ): void {
	flush_themes_cache( (array) $value );
}

/**
 * Flush the theme cache when the network options are updated.
 *
 * @param string $option    Option name.
 * @param mixed  $value     New option value.
 * @param mixed  $old_value Previous option value.
 */
function flush_themes_cache_on_network_update( string $option, mixed $value, mixed $old_value ): void {
	flush_themes_cache( (array) $old_value, (array) $value );
}

/**
 * Flush the theme cache when the network options are first added.
 *
 * @param string $option Option name.
 * @param mixed  $value  New option value.
 */
function flush_themes_cache_on_network_add( string $option, mixed $value ): void {
	flush_themes_cache( (array) $value );
}
