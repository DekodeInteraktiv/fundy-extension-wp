<?php
/**
 * Shortcodes.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\Shortcodes;

use function Dekode\Fundraising\get_base_url;

/**
 * Hooks.
 */
\add_action( 'init', __NAMESPACE__ . '\\register_shortcodes' );

/**
 * Register shortcodes.
 */
function register_shortcodes(): void {
	\add_shortcode( 'fundy_form', __NAMESPACE__ . '\\render_fundy_form_shortcode' );
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

	$params = [];

	if ( ! empty( $atts['params'] ) ) {
		$params = \json_decode( $atts['params'], true );

		if ( \json_last_error() === JSON_ERROR_NONE ) {
			$atts['params'] = \wp_json_encode( $params );
		} else {
			$atts['params'] = '';
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
				data-params="%s"%s
			></div>
		</div>
		',
		\esc_attr( (int) $atts['id'] ),
		\esc_attr( get_base_url() ),
		\esc_attr( $atts['params'] ),
		$variation_attr,
	);
}
