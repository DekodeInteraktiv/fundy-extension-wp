<?php
/**
 * Extensions.
 *
 * @package donations
 */

declare( strict_types = 1 );

namespace Donations\ExtensionLibrary;

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

/**
 * Hooks.
 */

/**
 * Load blocks (with potential inner child blocks from /dir/subdir/).
 */
foreach ( glob( DONATIONS_PLUGIN_DIR . 'inc/extension-library/*', GLOB_ONLYDIR ) as $dir ) {
	require_once "$dir/extension.php";
}
