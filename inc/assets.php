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
use function Dekode\Fundraising\Settings\get_form_css_url;
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
\add_filter( 'style_loader_tag', __NAMESPACE__ . '\\add_form_style_attrs', 10, 2 );
\add_filter( 'script_loader_tag', __NAMESPACE__ . '\\add_script_fetchpriority', 10, 2 );

/**
 * Register all assets.
 *
 * @return void
 */
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
		'window.FundyConfig = ' . \wp_json_encode( $config, \JSON_HEX_TAG | \JSON_HEX_AMP | \JSON_UNESCAPED_SLASHES ) . ';'
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

	$custom_css_url = \apply_filters( 'fundy/config/custom_css_url', get_form_css_url() );

	if ( ! empty( $custom_css_url ) ) {
		$config['customCssUrl'] = $custom_css_url;
	}

	/**
	 * Filter the entire FundyConfig array.
	 *
	 * @param array $config The configuration array.
	 */
	return \apply_filters( 'fundy/config', $config );
}

/**
 * The client stylesheet URL(s) the forms bundle injects into its shadow roots.
 *
 * Runs the same filter as build_fundy_config() - the filter can turn the URL
 * into an array, and a preload for a URL the bundle never fetches would just
 * waste bandwidth - but normalizes to a flat list for the head preload.
 *
 * @return string[] Absolute stylesheet URLs, possibly empty.
 */
function get_client_css_urls(): array {
	$value = \apply_filters( 'fundy/config/custom_css_url', get_form_css_url() );
	$urls  = [];

	foreach ( \is_array( $value ) ? $value : [ $value ] as $url ) {
		if ( \is_string( $url ) && '' !== $url ) {
			$urls[] = $url;
		}
	}

	return $urls;
}

/**
 * Register form scripts and styles.
 *
 * When the form is detected on the current page, the script is registered with
 * `in_footer => false` and enqueued immediately so it is printed in <head>.
 * The shortcode and block `viewScript` auto-enqueue act as safety nets for
 * cases detection can't reach (widgets, template parts, etc.) — those paths
 * fall through to the footer as before.
 *
 * @return void
 */
function register_form_assets(): void {
	$env          = get_forms_script_env();
	$suffix       = ( 'prod' === $env ) ? 'latest' : 'development';
	$load_in_head = should_load_form_assets_in_head();

	if ( ! \wp_script_is( 'fundy-form-script', 'registered' ) ) {
		\wp_register_script(
			'fundy-form-script',
			"https://assets.fundy.cloud/fundy-forms.{$suffix}.js",
			[ 'fundy-config' ],
			null,
			[
				'in_footer' => ! $load_in_head,
				'strategy'  => 'defer',
			]
		);
	}

	$enqueue_styles = \apply_filters( 'fundy/enqueue/form_styles', true );

	if ( $enqueue_styles && ! \wp_style_is( 'fundy-form-style', 'registered' ) ) {
		\wp_register_style( 'fundy-form-style', "https://assets.fundy.cloud/fundy-forms.{$suffix}.css", [], null, 'all' );
	}

	if ( $load_in_head ) {
		\wp_enqueue_script( 'fundy-form-script' );

		if ( $enqueue_styles ) {
			\wp_enqueue_style( 'fundy-form-style' );
		}
	}
}

/**
 * Add fetchpriority="high" to the form stylesheet tag so it matches the
 * preload hint and isn't deprioritised behind other render-blocking CSS.
 */
function add_form_style_attrs( string $tag, string $handle ): string {
	if ( 'fundy-form-style' !== $handle ) {
		return $tag;
	}

	if ( false !== \strpos( $tag, 'fetchpriority=' ) ) {
		return $tag;
	}

	// Target the <link ...> that carries href=... — avoids matching other
	// <link markup a previous filter may have prepended.
	return (string) \preg_replace(
		'/<link\b([^>]*\bhref=)/',
		'<link fetchpriority="high"$1',
		$tag,
		1
	);
}

/**
 * Add fetchpriority to the rendered remote script tags.
 *
 * wp_register_script()'s $args only supports `in_footer` and `strategy` —
 * a `fetchpriority` key there is silently discarded — so the attribute has
 * to be filtered onto the tag, mirroring add_form_style_attrs(). The form
 * bundle's `high` matches its preload hint in inc/head.php.
 */
function add_script_fetchpriority( string $tag, string $handle ): string {
	$priorities = [
		'fundy-form-script'       => 'high',
		'fundy-conversion-script' => 'low',
		'fundy-tracking-script'   => 'low',
	];

	if ( ! isset( $priorities[ $handle ] ) ) {
		return $tag;
	}

	if ( false !== \strpos( $tag, 'fetchpriority=' ) ) {
		return $tag;
	}

	// Target the <script ...> that carries src=... — inline before/after
	// fragments for the same handle have no src attribute.
	return (string) \preg_replace(
		'/<script\b([^>]*\bsrc=)/',
		'<script fetchpriority="' . $priorities[ $handle ] . '"$1',
		$tag,
		1
	);
}

/**
 * Determine whether the form assets are needed on the current page.
 *
 * Detection checks the queried singular post for the [fundy_form] shortcode
 * and the fundy/donation-form block. Sites that render the form via widgets,
 * template parts, or custom templates can force on via the
 * `fundy/load_form_assets_in_head` filter.
 *
 * Detection is memoised for the lifetime of the current main query because
 * this runs on both `wp_enqueue_scripts` and `wp_preload_resources`. The
 * cache is keyed on the WP_Query instance so it invalidates automatically
 * when the query changes (including `go_to()` in the test suite). The filter
 * is re-applied on every call so late-registered filters still take effect.
 */
function should_load_form_assets_in_head(): bool {
	static $detected   = null;
	static $last_query = null;

	$query = $GLOBALS['wp_query'] ?? null;

	if ( null === $detected || $query !== $last_query ) {
		$last_query = $query;
		$detected   = false;

		if ( \is_singular() ) {
			$post = \get_post();

			if ( $post ) {
				$content = (string) $post->post_content;

				if ( \has_shortcode( $content, 'fundy_form' ) || \has_block( 'fundy/donation-form', $content ) ) {
					$detected = true;
				}
			}
		}
	}

	return (bool) \apply_filters( 'fundy/load_form_assets_in_head', $detected );
}

/**
 * Register the conversion script.
 *
 * @return void
 */
function register_conversion_script(): void {
	if ( ! \apply_filters( 'fundy/enable/conversion_script', true ) ) {
		return;
	}

	$env    = get_conversion_script_env();
	$suffix = ( 'prod' === $env ) ? 'latest' : 'development';
	$src    = \apply_filters( 'fundy/conversion_script_src', "https://assets.fundy.cloud/fundy-conversion.{$suffix}.js", $env );

	if ( ! \wp_script_is( 'fundy-conversion-script', 'registered' ) ) {
		\wp_register_script(
			'fundy-conversion-script',
			$src,
			[ 'fundy-config' ],
			null,
			[
				'in_footer' => true,
				'strategy'  => 'defer',
			]
		);
	}

	\wp_enqueue_script( 'fundy-conversion-script' );
}

/**
 * Register the tracking script.
 *
 * @return void
 */
function register_tracking_script(): void {
	if ( ! get_tracking_script_enabled() ) {
		return;
	}

	$env    = get_tracking_script_env();
	$suffix = ( 'prod' === $env ) ? 'latest' : 'development';
	$src    = \apply_filters( 'fundy/tracking_script_src', "https://assets.fundy.cloud/fundy-wake.{$suffix}.js", $env );

	if ( ! \wp_script_is( 'fundy-tracking-script', 'registered' ) ) {
		\wp_register_script(
			'fundy-tracking-script',
			$src,
			[ 'fundy-config' ],
			null,
			[
				'in_footer' => true,
				'strategy'  => 'defer',
			]
		);
	}

	\wp_enqueue_script( 'fundy-tracking-script' );
}
