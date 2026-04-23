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
 * Preload the form script when a form is detected on the current page.
 *
 * The form script is enqueued lazily by the [fundy_form] shortcode, which runs
 * after wp_head. Preloading here lets the browser start fetching in parallel
 * with HTML parsing instead of waiting until the shortcode is reached.
 *
 * Detection is best-effort against the queried post's content. Sites that
 * render the form via blocks, patterns, widgets, or custom templates can
 * force preload on via the `fundy/preload/form_script` filter.
 */
function add_preload_resources( array $resources ): array {
	if ( ! should_preload_form_script() ) {
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

/**
 * Decide whether to preload the form script on this request.
 *
 * Defers to the shared detection in the Assets namespace so preload and
 * head-load decisions stay in sync. The `fundy/preload/form_script` filter
 * still lets sites override just the preload decision if they need to.
 */
function should_preload_form_script(): bool {
	return (bool) \apply_filters( 'fundy/preload/form_script', should_load_form_assets_in_head() );
}
