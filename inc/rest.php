<?php
/**
 * REST Endpoints.
 *
 * @package donations
 */

declare( strict_types = 1 );

namespace Donations;

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

/**
 * Hooks.
 */
\add_action( 'rest_api_init', __NAMESPACE__ . '\\register_rest_routes' );

/**
 * Register REST routes.
 */
function register_rest_routes(): void {
	\register_rest_route(
		'donations/v1',
		'/forms',
		[
			'methods'             => \WP_REST_Server::READABLE,
			'callback'            => __NAMESPACE__ . '\\forms',
			'permission_callback' => '__return_true', // TODO: Remove.
		]
	);
}

/**
 * Forms endpoint.
 */
function forms( int $organization_id ): \WP_REST_Response {
	// TODO: Fetch forms from Fundy.
	$forms = [];

	$response = new \WP_REST_Response( $forms, 200 );

	return $response;
}
