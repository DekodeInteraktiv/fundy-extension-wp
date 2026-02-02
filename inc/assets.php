<?php
/**
 * Assets.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\Assets;

use function Dekode\Fundraising\Settings\get_script_env;

if ( ! \defined( 'ABSPATH' ) ) {
	die();
}

/**
 * Hooks
 */
\add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\register_assets' );
\add_action( 'wp_head', __NAMESPACE__ . '\\output_fundy_config' );

function register_assets() {
	if (
		\wp_script_is( 'fundy-form-script', 'registered' )
		&& \wp_style_is( 'fundy-form-style', 'registered' )
	) {
		return;
	}

	$suffix = ( 'prod' === get_script_env() ) ? 'latest' : 'development';

	\wp_register_script( 'fundy-form-script', "https://assets.fundy.cloud/fundy-forms.{$suffix}.js", [], null, true );

	if ( \apply_filters( 'fundy/enqueue/form_styles', true ) ) {
		\wp_register_style( 'fundy-form-style', "https://assets.fundy.cloud/fundy-forms.{$suffix}.css", [], null, 'all' );
	}

}

/**
 * Output FundyConfig to window.FundyConfig on every page load.
 *
 * This embeds configuration data for the Fundy conversion script.
 * All values can be filtered using the 'fundy/config' and 'fundy/config/{key}' filters.
 *
 * @return void
 */
function output_fundy_config(): void {
	$config = [
		'coreBaseUrl'           => \apply_filters( 'fundy/config/core_base_url', \FUNDY_CORE_URL ),
		'surgeBaseUrl'          => \apply_filters( 'fundy/config/surge_base_url', \FUNDY_SURGE_URL ),
		'disableDataLayerEvent' => \apply_filters( 'fundy/config/disable_data_layer_event', false ),
		'debug'                 => \apply_filters( 'fundy/config/debug', false ),
	];

	/**
	 * Filter the entire FundyConfig array.
	 *
	 * @param array $config The configuration array.
	 */
	$config = \apply_filters( 'fundy/config', $config );

	\printf(
		'<script>window.FundyConfig = %s;</script>' . "\n",
		\wp_json_encode( $config, \JSON_HEX_TAG | \JSON_HEX_AMP )
	);
}
