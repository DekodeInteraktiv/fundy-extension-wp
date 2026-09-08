<?php
/**
 * Live Map embed.
 *
 * The Live Map is a page of the Fundy interface built to be framed; the
 * block and the shortcode both render an <iframe> of it through the one
 * helper here, so the two embed paths can never drift.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\LiveMap;

use function Dekode\Fundraising\get_base_url;
use function Dekode\Fundraising\Settings\get_organization_public_id;

if ( ! \defined( 'ABSPATH' ) ) {
	die();
}

const MIN_HEIGHT     = 240;
const DEFAULT_HEIGHT = 480;

/**
 * Hooks.
 */
\add_filter( 'wp_resource_hints', __NAMESPACE__ . '\\add_preconnect', 10, 2 );

/**
 * The attribute defaults, shared by the block (block.json mirrors them) and
 * the shortcode.
 *
 * @return array<string, mixed>
 */
function default_args(): array {
	return [
		'mode'         => 'gifts',
		'view'         => 'org',
		'theme'        => 'light',
		'showCounters' => true,
		'showLabels'   => true,
		'interactive'  => false,
		'height'       => DEFAULT_HEIGHT,
		'window'       => 'today',
		'ctaUrl'       => '',
	];
}

/**
 * Normalize author-supplied arguments to the values the interface accepts.
 *
 * @param array<string, mixed> $args Raw block attributes or shortcode attributes.
 * @return array{mode: string, view: string, theme: string, showCounters: bool, showLabels: bool, interactive: bool, height: int, window: string, ctaUrl: string}
 */
function sanitize_args( array $args ): array {
	$defaults = default_args();

	$one_of = static function ( mixed $value, array $allowed, string $fallback ): string {
		$value = \strtolower( \trim( (string) $value ) );

		return \in_array( $value, $allowed, true ) ? $value : $fallback;
	};

	$flag = static function ( mixed $value, bool $fallback ): bool {
		if ( \is_bool( $value ) ) {
			return $value;
		}
		if ( null === $value || '' === $value ) {
			return $fallback;
		}

		return \in_array( \strtolower( (string) $value ), [ '1', 'true', 'yes', 'on' ], true );
	};

	$height = (int) ( $args['height'] ?? $defaults['height'] );

	return [
		'mode'         => $one_of( $args['mode'] ?? '', [ 'activity', 'gifts' ], $defaults['mode'] ),
		'view'         => $one_of( $args['view'] ?? '', [ 'org', 'nordics', 'europe', 'world' ], $defaults['view'] ),
		'theme'        => $one_of( $args['theme'] ?? '', [ 'light', 'dark' ], $defaults['theme'] ),
		'showCounters' => $flag( $args['showCounters'] ?? null, $defaults['showCounters'] ),
		'showLabels'   => $flag( $args['showLabels'] ?? null, $defaults['showLabels'] ),
		'interactive'  => $flag( $args['interactive'] ?? null, $defaults['interactive'] ),
		'height'       => $height >= MIN_HEIGHT ? $height : $defaults['height'],
		'window'       => $one_of( $args['window'] ?? '', [ 'live', 'hour', 'today' ], $defaults['window'] ),
		'ctaUrl'       => \esc_url_raw( (string) ( $args['ctaUrl'] ?? '' ), [ 'http', 'https' ] ),
	];
}

/**
 * The origin of the Fundy interface that serves the map: the core URL with
 * its /core path stripped, the way the forms bundle derives the surge URL.
 */
function get_base_url_for_live_map(): string {
	$base = (string) \preg_replace( '#/core/?$#', '', get_base_url() );

	return \untrailingslashit( (string) \apply_filters( 'fundy/live_map/base_url', $base ) );
}

/**
 * The interface locale prefix for the site language: Norwegian variants
 * are served under /no/, everything else in English.
 */
function get_interface_locale(): string {
	$locale = \strtolower( (string) \get_locale() );

	return \in_array( \substr( $locale, 0, 2 ), [ 'nb', 'nn', 'no' ], true ) ? 'no' : 'en';
}

/**
 * The public Live Map URL for an organization, without parameters.
 */
function get_page_url( string $public_id ): string {
	return \sprintf( '%s/%s/live-map/%s', get_base_url_for_live_map(), get_interface_locale(), \rawurlencode( $public_id ) );
}

/**
 * Build the iframe src for the sanitized arguments.
 *
 * @param array<string, mixed> $args Sanitized arguments (see sanitize_args()).
 */
function build_embed_url( array $args, string $public_id ): string {
	$params = [
		'embed'    => '1',
		'src'      => 'wp',
		'mode'     => $args['mode'],
		'view'     => $args['view'],
		'theme'    => $args['theme'],
		'counters' => $args['showCounters'] ? '1' : '0',
		'labels'   => $args['showLabels'] ? '1' : '0',
		'window'   => $args['window'],
	];

	if ( $args['interactive'] ) {
		$params['interactive'] = '1';
	}

	if ( '' !== $args['ctaUrl'] ) {
		$params['cta'] = $args['ctaUrl'];
	}

	/**
	 * Filter the query parameters of the Live Map embed URL.
	 *
	 * @param array<string, string> $params Query parameters.
	 * @param array<string, mixed>  $args   Sanitized embed arguments.
	 */
	$params = (array) \apply_filters( 'fundy/live_map/embed_params', $params, $args );

	$url = \add_query_arg( \array_map( 'strval', $params ), get_page_url( $public_id ) );

	/**
	 * Filter the final Live Map embed URL.
	 *
	 * @param string               $url  The iframe src.
	 * @param array<string, mixed> $args Sanitized embed arguments.
	 */
	return (string) \apply_filters( 'fundy/live_map/embed_url', $url, $args );
}

/**
 * The kiosk URL for office and event screens, or '' without a token.
 */
function get_kiosk_url( string $public_id, string $kiosk_token ): string {
	if ( '' === $public_id || '' === $kiosk_token ) {
		return '';
	}

	return \add_query_arg(
		[
			'kiosk' => '1',
			'token' => $kiosk_token,
		],
		get_page_url( $public_id )
	);
}

/**
 * The organization the map is embedded for: the stored public id, unless
 * a filter points elsewhere (local development against surge's fake
 * organization, or a multi-brand site).
 */
function get_embed_organization_id(): string {
	$public_id = \apply_filters( 'fundy/live_map/organization_id', get_organization_public_id() );

	return \is_string( $public_id ) ? \trim( $public_id ) : '';
}

/**
 * Render the Live Map iframe.
 *
 * Nothing renders without a stored organization public id: the map is
 * scoped to the organization, and the id arrives with the API key.
 *
 * @param array<string, mixed> $args               Raw arguments.
 * @param string               $wrapper_attributes Extra attributes for the wrapper element (block supports).
 */
function render( array $args, string $wrapper_attributes = '' ): string {
	$public_id = get_embed_organization_id();

	if ( '' === $public_id ) {
		return '';
	}

	$args = sanitize_args( $args );
	$src  = build_embed_url( $args, $public_id );

	$wrapper_attributes = \trim( $wrapper_attributes );
	if ( false === \strpos( $wrapper_attributes, 'class=' ) ) {
		$wrapper_attributes = \trim( 'class="fundy-live-map-wrapper" ' . $wrapper_attributes );
	}

	return \sprintf(
		'<div %1$s><iframe class="fundy-live-map" src="%2$s" title="%3$s" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="" style="width:100%%;height:%4$dpx;border:0;display:block"></iframe></div>',
		$wrapper_attributes,
		\esc_url( $src ),
		\esc_attr(
			\sprintf(
				/* translators: %s: site name. */
				\__( 'Live map of donations to %s', 'dekode-fundraising' ),
				\get_bloginfo( 'name' )
			)
		),
		$args['height']
	);
}

/**
 * Whether the queried singular post carries the block or the shortcode.
 *
 * Mirrors Assets\should_load_form_assets_in_head(): synced patterns and
 * reusable blocks are not seen, which only costs the preconnect hint.
 */
function is_detected_on_page(): bool {
	if ( ! \is_singular() ) {
		return false;
	}

	$post = \get_post();

	if ( ! $post ) {
		return false;
	}

	$content = (string) $post->post_content;

	return \has_shortcode( $content, 'fundy_live_map' ) || \has_block( 'fundy/live-map', $content );
}

/**
 * Preconnect to the interface origin only on pages that embed the map.
 *
 * @param string[] $hints         Resource hints.
 * @param string   $relation_type The relation type.
 * @return string[]
 */
function add_preconnect( array $hints, string $relation_type ): array {
	if ( 'preconnect' === $relation_type && is_detected_on_page() ) {
		$hints[] = get_base_url_for_live_map();
	}

	return $hints;
}
