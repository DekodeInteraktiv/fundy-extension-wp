<?php
/**
 * Shortcodes.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\Shortcodes;

use function Dekode\Fundraising\get_base_url;
use function Dekode\Fundraising\sanitize_form_url_params;
use function Dekode\Fundraising\theme_data_attribute;
use function Dekode\Fundraising\LiveMap\default_args;
use function Dekode\Fundraising\LiveMap\render as render_live_map;

/**
 * Hooks.
 */
\add_action( 'init', __NAMESPACE__ . '\\register_shortcodes' );

/**
 * Register shortcodes.
 */
function register_shortcodes(): void {
	\add_shortcode( 'fundy_form', __NAMESPACE__ . '\\render_fundy_form_shortcode' );
	\add_shortcode( 'fundy_live_map', __NAMESPACE__ . '\\render_fundy_live_map_shortcode' );
}

/**
 * Render the Live Map shortcode.
 *
 * Attribute names and defaults match the fundy/live-map block; both paths
 * render through LiveMap\render(), so they never drift. Shortcode
 * attributes arrive lowercased, hence the mapping onto the camelCase names.
 *
 * @param array<string, mixed>|string $atts Shortcode attributes.
 */
function render_fundy_live_map_shortcode( array|string $atts ): string {
	$atts = \shortcode_atts(
		[
			'mode'         => '',
			'view'         => '',
			'theme'        => '',
			'showcounters' => '',
			'showlabels'   => '',
			'interactive'  => '',
			'height'       => '',
			'window'       => '',
			'ctaurl'       => '',
		],
		\is_array( $atts ) ? $atts : [],
		'fundy_live_map'
	);

	$args = [];

	foreach ( default_args() as $name => $default ) {
		$value = $atts[ \strtolower( $name ) ];

		if ( '' !== $value ) {
			$args[ $name ] = $value;
		}
	}

	return render_live_map( $args );
}

/**
 * Render the Dekode Fundraising form shortcode.
 *
 * @param array $atts Shortcode attributes.
 * @return string
 */
function render_fundy_form_shortcode( array $atts ): string {
	$atts = \shortcode_atts(
		[
			'id'        => '',
			'params'    => '',
			'variation' => '',
		],
		$atts,
		'fundy_form'
	);

	if ( empty( $atts['id'] ) ) {
		return '';
	}

	// Author-supplied params share the block path's limits (see
	// sanitize_form_url_params()); invalid or non-object JSON carries none.
	$json_params = '';

	if ( ! empty( $atts['params'] ) ) {
		$decoded = \json_decode( (string) $atts['params'], true );

		if ( \is_array( $decoded ) ) {
			$json_params = (string) \wp_json_encode( sanitize_form_url_params( $decoded ) );
		}
	}

	// Shortcode parity with the block's is-style-* pass-through: only slugs
	// matching the block-style class shape are forwarded across the shadow
	// boundary as data-variation.
	$variation_attr = '';
	$variation      = \strtolower( \trim( (string) $atts['variation'] ) );

	if ( \preg_match( '/^[a-z0-9-]+$/', $variation ) ) {
		$variation_attr = \sprintf( ' data-variation="%s"', \esc_attr( $variation ) );
	}

	\wp_enqueue_script( 'fundy-form-script' );

	// The host-page base stylesheet becomes redundant once the shadow-root
	// forms bundle ships (it loads base CSS inside the shadow root). Keep it
	// until the forms cutover completes, then remove this path — see
	// plans/custom-styling/client-migration.md in the workspace root.
	if ( \apply_filters( 'fundy/enqueue/form_styles', true ) ) {
		\wp_enqueue_style( 'fundy-form-style' );
	}

	return \sprintf( '
		<div class="fundy-form-wrapper">
			<div
				class="fundy-form fundraising-form"
				data-form-id="%s"
				data-core-url="%s"
				data-params="%s"%s%s
			></div>
		</div>
		',
		\esc_attr( (int) $atts['id'] ),
		\esc_attr( get_base_url() ),
		\esc_attr( $json_params ),
		$variation_attr,
		theme_data_attribute(),
	);
}
