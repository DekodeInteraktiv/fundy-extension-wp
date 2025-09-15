<?php
/**
 * Head.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\Head;

use function Dekode\Fundraising\get_base_url;

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
		$hints[] = get_base_url();
	}

	return $hints;
}
