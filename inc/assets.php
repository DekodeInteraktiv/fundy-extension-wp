<?php
/**
 * Assets.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\Assets;

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

function register_assets(): void {
	register_fundy_config();
	register_form_assets();
	register_conversion_script();
	register_tracking_script();
}

/**
 * Register the FundyConfig script.
 *
 * This registers a virtual script handle and attaches the configuration
 * as an inline script. This approach is CSP-compatible as WordPress can
 * add the proper nonce when a CSP plugin is active.
 *
 * @return void
 */
function register_fundy_config(): void {
	// Register a virtual script handle (no actual file, loads in head).
	\wp_register_script( 'fundy-config', false, [], \FUNDY_VERSION, false );

	// Build and attach the config as inline script.
	$config = build_fundy_config();

	\wp_add_inline_script(
		'fundy-config',
		'window.FundyConfig = ' . \wp_json_encode( $config, \JSON_HEX_TAG | \JSON_HEX_AMP ) . ';'
	);

	// Always enqueue the config script.
	\wp_enqueue_script( 'fundy-config' );
}

/**
 * Build the FundyConfig array.
 *
 * All values can be filtered using the 'fundy/config' and 'fundy/config/{key}' filters.
 *
 * @return array<string, mixed> The configuration array.
 */
function build_fundy_config(): array {
	$enable_debug_mode = \apply_filters( 'fundy/config/debug', get_debug_enabled() );
	$enable_debug_mode = \apply_filters( 'fundy/config/enable_debug_mode', $enable_debug_mode );

	$config = [
		'coreBaseUrl'           => \apply_filters( 'fundy/config/core_base_url', \FUNDY_CORE_URL ),
		'surgeBaseUrl'          => \apply_filters( 'fundy/config/surge_base_url', \FUNDY_SURGE_URL ),
		'disableDataLayerEvent' => \apply_filters( 'fundy/config/disable_data_layer_event', get_disable_data_layer_event() ),
		'enableDebugMode'       => $enable_debug_mode,
	];

	/**
	 * Filter the entire FundyConfig array.
	 *
	 * @param array $config The configuration array.
	 */
	return \apply_filters( 'fundy/config', $config );
}

function register_form_assets(): void {
	$env    = get_forms_script_env();
	$suffix = ( 'prod' === $env ) ? 'latest' : 'development';

	if ( ! \wp_script_is( 'fundy-form-script', 'registered' ) ) {
		\wp_register_script( 'fundy-form-script', "https://assets.fundy.cloud/fundy-forms.{$suffix}.js", [ 'fundy-config' ], null, true );
	}

	if ( \apply_filters( 'fundy/enqueue/form_styles', true ) && ! \wp_style_is( 'fundy-form-style', 'registered' ) ) {
		\wp_register_style( 'fundy-form-style', "https://assets.fundy.cloud/fundy-forms.{$suffix}.css", [], null, 'all' );
	}
}

function register_conversion_script(): void {
	if ( ! \apply_filters( 'fundy/enable/conversion_script', true ) ) {
		return;
	}

	$env    = get_conversion_script_env();
	$suffix = ( 'prod' === $env ) ? 'latest' : 'development';
	$src    = \apply_filters( 'fundy/conversion_script_src', "https://assets.fundy.cloud/fundy-conversion.{$suffix}.js", $env );

	if ( ! \wp_script_is( 'fundy-conversion-script', 'registered' ) ) {
		\wp_register_script( 'fundy-conversion-script', $src, [ 'fundy-config' ], null, true );
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
		\wp_register_script( 'fundy-tracking-script', $src, [ 'fundy-config' ], null, true );
	}

	\wp_enqueue_script( 'fundy-tracking-script' );
}

