<?php
/**
 * Head.
 *
 * @package fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\Head;

if ( ! \defined( 'ABSPATH' ) ) {
	die();
}

/**
 * Hooks
 */
\add_filter( 'wp_resource_hints', __NAMESPACE__ . '\\add_dns_prefetch', 10, 2 );

/**
 * Add DNS prefetch.
 */
function add_dns_prefetch( array $hints, string $relation_type ): array {
	if ( 'preconnect' === $relation_type ) {
		$hints[] = \FUNDY_CORE_URL;
	}

	return $hints;
}
