<?php
/**
 * Blocks.
 *
 * @package donations
 */

declare( strict_types = 1 );

namespace Donations\BlockLibrary;

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

/**
 * Hooks.
 */

/**
 * Load blocks (with potential inner child blocks from /dir/subdir/).
 */
foreach ( glob( DONATIONS_PLUGIN_DIR . 'inc/block-library/*', GLOB_ONLYDIR ) as $dir ) {
	require_once "$dir/block.php";
}
