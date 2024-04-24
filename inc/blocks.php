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
 * Load blocks (with potential inner child blocks from /dir/subdir/).
 */
foreach ( glob( FUNDRAISING_PLUGIN_DIR . 'inc/block-library/*', GLOB_ONLYDIR ) as $dir ) {
	require_once "$dir/block.php";
}
