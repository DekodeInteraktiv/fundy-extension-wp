<?php
/**
 * REST API.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\REST;

use function Dekode\Fundraising\get_base_url;
use function Dekode\Fundraising\Settings\get_api_key;

if ( ! \defined( 'ABSPATH' ) ) {
	die();
}

/**
 * Hooks.
 */
\add_action( 'rest_api_init', __NAMESPACE__ . '\\register_routes' );

/**
 * Register REST routes.
 *
 * @return void
 */
function register_routes(): void {
	\register_rest_route(
		'fundy/v1',
		'/forms',
		[
			'methods'             => \WP_REST_Server::READABLE,
			'callback'            => __NAMESPACE__ . '\\get_forms',
			'permission_callback' => static function (): bool {
				return \current_user_can( 'edit_posts' );
			},
		]
	);
}

/**
 * Proxy the organization forms list from the Fundy API.
 *
 * The API token never leaves the server: the block editor calls this route
 * (nonce-authenticated, same-origin) and receives only the id/name pairs it
 * needs to populate the form selector.
 *
 * @return \WP_REST_Response|\WP_Error
 */
function get_forms(): \WP_REST_Response|\WP_Error {
	$api_key = get_api_key();

	if ( '' === $api_key ) {
		return new \WP_Error(
			'fundy_no_api_token',
			\__( 'No Fundy API token is configured.', 'dekode-fundraising' ),
			[ 'status' => 400 ]
		);
	}

	$response = \wp_remote_get(
		get_base_url() . '/api/v1/organization/forms',
		[
			'headers' => [
				'Accept'        => 'application/json',
				'Authorization' => 'Bearer ' . $api_key,
			],
			'timeout' => 15,
		]
	);

	if ( \is_wp_error( $response ) ) {
		return new \WP_Error(
			'fundy_forms_request_failed',
			\__( 'Could not reach the Fundy API.', 'dekode-fundraising' ),
			[ 'status' => 502 ]
		);
	}

	$code = (int) \wp_remote_retrieve_response_code( $response );

	if ( 200 !== $code ) {
		return new \WP_Error(
			'fundy_forms_request_failed',
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
			'fundy_forms_invalid_response',
			\__( 'The Fundy API returned an invalid response.', 'dekode-fundraising' ),
			[ 'status' => 502 ]
		);
	}

	$forms = [];

	foreach ( $data as $form ) {
		if ( \is_array( $form ) && isset( $form['id'], $form['name'] ) ) {
			$forms[] = [
				'id'   => (int) $form['id'],
				'name' => (string) $form['name'],
			];
		}
	}

	return \rest_ensure_response( $forms );
}
