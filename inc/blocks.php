<?php
/**
 * Blocks.
 *
 * @package fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\BlockLibrary;

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

/**
 * Hooks.
 */

/**
 * Load blocks.
 */
\array_map( fn( $f ) => require_once $f, \glob( FUNDRAISING_PLUGIN_DIR . '/inc/block-library/build/*/block.php' ) );
