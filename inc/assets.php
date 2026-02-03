<?php
/**
 * Assets.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\Assets;

use function Dekode\Fundraising\Settings\get_conversion_script_enabled;
use function Dekode\Fundraising\Settings\get_conversion_script_env;
use function Dekode\Fundraising\Settings\get_debug_enabled;
use function Dekode\Fundraising\Settings\get_disable_data_layer_event;
use function Dekode\Fundraising\Settings\get_forms_script_env;
use function Dekode\Fundraising\Settings\get_tracking_script_enabled;
use function Dekode\Fundraising\Settings\get_tracking_script_env;

if ( ! \defined( 'ABSPATH' ) ) {
	die();
}

/**
 * Hooks
 */
\add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\register_assets' );
\add_action( 'wp_head', __NAMESPACE__ . '\\output_fundy_config' );

function register_assets(): void {
	register_form_assets();
	register_conversion_script();
	register_tracking_script();
}

function register_form_assets(): void {
	$env    = get_forms_script_env();
	$suffix = ( 'prod' === $env ) ? 'latest' : 'development';

	if ( ! \wp_script_is( 'fundy-form-script', 'registered' ) ) {
		\wp_register_script( 'fundy-form-script', "https://assets.fundy.cloud/fundy-forms.{$suffix}.js", [], null, true );
	}

	if ( \apply_filters( 'fundy/enqueue/form_styles', true ) && ! \wp_style_is( 'fundy-form-style', 'registered' ) ) {
		\wp_register_style( 'fundy-form-style', "https://assets.fundy.cloud/fundy-forms.{$suffix}.css", [], null, 'all' );
	}
}

function register_conversion_script(): void {
	if ( ! get_conversion_script_enabled() ) {
		return;
	}

	$env    = get_conversion_script_env();
	$suffix = ( 'prod' === $env ) ? 'latest' : 'development';
	$src    = \apply_filters( 'fundy/conversion_script_src', "https://assets.fundy.cloud/fundy-conversion.{$suffix}.js", $env );

	if ( ! \wp_script_is( 'fundy-conversion-script', 'registered' ) ) {
		\wp_register_script( 'fundy-conversion-script', $src, [], null, true );
	}

	\wp_enqueue_script( 'fundy-conversion-script' );
}

function register_tracking_script(): void {
	if ( ! get_tracking_script_enabled() ) {
		return;
	}

	$env    = get_tracking_script_env();
	$suffix = ( 'prod' === $env ) ? 'latest' : 'development';
	$src    = \apply_filters( 'fundy/tracking_script_src', "https://assets.fundy.cloud/fundy-tracking.{$suffix}.js", $env );

	if ( ! \wp_script_is( 'fundy-tracking-script', 'registered' ) ) {
		\wp_register_script( 'fundy-tracking-script', $src, [], null, true );
	}

	\wp_enqueue_script( 'fundy-tracking-script' );
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
		'disableDataLayerEvent' => \apply_filters( 'fundy/config/disable_data_layer_event', get_disable_data_layer_event() ),
		'debug'                 => \apply_filters( 'fundy/config/debug', get_debug_enabled() ),
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
