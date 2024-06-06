<?php
/**
 * Extensions.
 *
 * @package fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\ExtensionLibrary;

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

/**
 * Hooks.
 */

/**
 * Load extensions.
 */
\array_map( fn( $f ) => require_once $f, \glob( FUNDRAISING_PLUGIN_DIR . '/build/*/extension.php' ) );
