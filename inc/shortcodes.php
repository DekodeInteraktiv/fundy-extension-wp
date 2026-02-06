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
			'id'     => '',
			'params' => '',
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

	\wp_enqueue_script( 'fundy-form-script' );

	if ( \apply_filters( 'fundy/enqueue/form_styles', true ) ) {
		\wp_enqueue_style( 'fundy-form-style' );
	}

	return \sprintf( '
		<div class="fundy-form-wrapper">
			<div
				class="fundy-form fundraising-form"
				data-form-id="%s"
				data-core-url="%s"
				data-params="%s"
			></div>
		</div>
		',
		\esc_attr( (int) $atts['id'] ),
		\esc_attr( get_base_url() ),
		\esc_attr( $atts['params'] ),
	);
}
