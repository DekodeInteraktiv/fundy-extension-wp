<?php
/**
 * Head.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\Head;

use function Dekode\Fundraising\get_base_url;
use function Dekode\Fundraising\Assets\should_load_form_assets_in_head;

if ( ! \defined( 'ABSPATH' ) ) {
	die();
}

/**
 * Hooks
 */
\add_filter( 'wp_resource_hints', __NAMESPACE__ . '\\add_dns_prefetch', 10, 2 );
\add_filter( 'wp_preload_resources', __NAMESPACE__ . '\\add_preload_resources' );

/**
 * Add preconnect hints for the API origin and the asset CDN origin.
 */
function add_dns_prefetch( array $hints, string $relation_type ): array {
	if ( 'preconnect' === $relation_type ) {
		$hints[] = get_base_url();
		$hints[] = 'https://assets.fundy.cloud';
	}

	return $hints;
}

/**
 * Preload the form script and stylesheet when a form is detected on the
 * current page. Gated by the shared `fundy/load_form_assets_in_head` decision
 * so preload and head-load stay in sync.
 *
 * The preload entries deliberately omit `crossorigin` so they match the
 * default no-cors mode of the rendered <script> and <link> tags. If a future
 * change adds `crossorigin` here it MUST also be added to the rendered tags
 * (and the CDN must serve `Access-Control-Allow-Origin` on GET responses) —
 * otherwise the credentials modes diverge and the browser fetches the
 * resource twice.
 */
function add_preload_resources( array $resources ): array {
	if ( ! should_load_form_assets_in_head() ) {
		return $resources;
	}

	$script = \wp_scripts()->registered['fundy-form-script'] ?? null;

	if ( $script && ! empty( $script->src ) ) {
		$resources[] = [
			'href'          => $script->src,
			'as'            => 'script',
			'fetchpriority' => 'high',
		];
	}

	$style = \wp_styles()->registered['fundy-form-style'] ?? null;

	if ( $style && ! empty( $style->src ) ) {
		$resources[] = [
			'href'          => $style->src,
			'as'            => 'style',
			'fetchpriority' => 'high',
		];
	}

	return $resources;
}
