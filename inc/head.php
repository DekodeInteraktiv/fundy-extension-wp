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
\add_filter('wp_preload_resources', __NAMESPACE__ . '\\add_resource_preload' );

/**
 * Add DNS prefetch.
 */
function add_dns_prefetch( array $hints, string $relation_type ): array {
	if ( 'preconnect' === $relation_type ) {
		$hints[] = get_base_url();
		$hints[] = 'https://assets.fundy.cloud';
	}

	return $hints;
}

/**
 * Add script preload.
 */
function add_resource_preload( array $resources ): array {
	$resources[] = [
		'href'        => 'https://assets.fundy.cloud/fundy-forms.latest.js',
		'as'          => 'script',
		'crossorigin' => 'anonymous',
	];

	foreach ( get_current_post_form_ids() as $form_id ) {
		$resources[] = [
			'href'        => get_base_url() . '/api/v1/form/schema/' . $form_id,
			'as'          => 'fetch',
			'crossorigin' => 'anonymous',
		];
	}

	return $resources;
}

/**
 * Collect form IDs from donation-form blocks in the current singular post.
 *
 * @return int[]
 */
function get_current_post_form_ids(): array {
	if ( ! \is_singular() ) {
		return [];
	}

	$post = \get_post();
	if ( ! $post instanceof \WP_Post || ! \has_blocks( $post->post_content ) ) {
		return [];
	}

	$form_ids = [];
	collect_donation_form_ids( \parse_blocks( $post->post_content ), $form_ids );

	return \array_values( \array_unique( $form_ids ) );
}

/**
 * Walk parsed blocks recursively and collect donation-form IDs.
 *
 * @param array $blocks   Parsed blocks.
 * @param int[] $form_ids Accumulator, passed by reference.
 */
function collect_donation_form_ids( array $blocks, array &$form_ids ): void {
	foreach ( $blocks as $block ) {
		if ( 'fundy/donation-form' === ( $block['blockName'] ?? '' ) ) {
			$form_id = (int) ( $block['attrs']['formId'] ?? 0 );
			if ( $form_id > 0 ) {
				$form_ids[] = $form_id;
			}
		}

		if ( ! empty( $block['innerBlocks'] ) ) {
			collect_donation_form_ids( $block['innerBlocks'], $form_ids );
		}
	}
}
