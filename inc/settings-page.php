<?php
/**
 * Settings Page.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\SettingsPage;

use function Dekode\Fundraising\Settings\get_conversion_script_env;
use function Dekode\Fundraising\Settings\get_custom_css_url;
use function Dekode\Fundraising\Settings\get_debug_enabled;
use function Dekode\Fundraising\Settings\get_disable_data_layer_event;
use function Dekode\Fundraising\Settings\get_forms_script_env;
use function Dekode\Fundraising\Settings\get_tracking_script_enabled;
use function Dekode\Fundraising\Settings\get_tracking_script_env;
use function Dekode\Fundraising\API\fetch_organization_public_id;
use function Dekode\Fundraising\API\get_organization_themes;
use function Dekode\Fundraising\Settings\normalize_script_env;
use function Dekode\Fundraising\Settings\sanitize_custom_css_url;
use function Dekode\Fundraising\Settings\sanitize_organization_public_id;
use function Dekode\Fundraising\Settings\sanitize_theme_name;

if ( ! \defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Admin Hooks
 */
if (\is_blog_admin()) {
	\add_action( 'admin_init', __NAMESPACE__ . '\\register_settings' );
	\add_action( 'admin_menu', __NAMESPACE__ . '\\register_page' );
}

/**
 * Registers Page
 */
function register_page(): void {
	\add_options_page(
		\__( 'Dekode Fundraising Settings', 'dekode-fundraising' ),
		\__( 'Dekode Fundraising', 'dekode-fundraising' ),
		'manage_options',
		'fundy_settings_page',
		__NAMESPACE__ . '\\render_page',
	);
}

/**
 * Register settings using the WordPress Settings API.
 */
function register_settings(): void {
	\register_setting(
		'fundy_settings_group',
		'fundy_options',
		[
			'type'              => 'array',
			'sanitize_callback' => __NAMESPACE__ . '\\sanitize_options',
			'default'           => [
				'api_key'                  => '',
				'organization_public_id'   => '',
				'forms_script'             => 'prod',
				'conversion_script'        => 'prod',
				'tracking_enabled'         => '',
				'tracking_script'          => 'prod',
				'disable_data_layer_event' => '',
				'debug'                    => '',
				'theme'                    => '',
				'theme_css_url'            => '',
				'custom_css_url'           => '',
			],
		]
	);

	\add_settings_section(
		'fundy_settings_section',
		\__( 'General', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\section_callback',
		'fundy_settings_page',
	);

	\add_settings_section(
		'fundy_settings_section_advanced',
		\__( 'Advanced', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\advanced_section_callback',
		'fundy_settings_page',
	);

	if ( \is_multisite() ) {
		\add_settings_field(
			'fundy_override_network',
			\__( 'Override Network Settings', 'dekode-fundraising' ),
			__NAMESPACE__ . '\\override_network_callback',
			'fundy_settings_page',
			'fundy_settings_section'
		);
	}

	\add_settings_field(
		'fundy_api_key',
		\__( 'API Key', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\api_key_callback',
		'fundy_settings_page',
		'fundy_settings_section'
	);

	\add_settings_field(
		'fundy_forms_script',
		\__( 'Forms Script', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\forms_script_callback',
		'fundy_settings_page',
		'fundy_settings_section'
	);

	\add_settings_field(
		'fundy_conversion_script',
		\__( 'Conversion Script', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\conversion_script_callback',
		'fundy_settings_page',
		'fundy_settings_section'
	);

	\add_settings_field(
		'fundy_disable_data_layer_event',
		\__( 'Data Layer Event', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\disable_data_layer_event_callback',
		'fundy_settings_page',
		'fundy_settings_section'
	);

	\add_settings_field(
		'fundy_tracking_script',
		\__( 'Tracking Script', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\tracking_script_callback',
		'fundy_settings_page',
		'fundy_settings_section'
	);

	\add_settings_field(
		'fundy_debug',
		\__( 'Debug Mode', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\debug_callback',
		'fundy_settings_page',
		'fundy_settings_section_advanced'
	);

	\add_settings_field(
		'fundy_theme',
		\__( 'Theme', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\theme_callback',
		'fundy_settings_page',
		'fundy_settings_section_advanced',
		[ 'label_for' => 'fundy_theme' ]
	);

	\add_settings_field(
		'fundy_custom_css_url',
		\__( 'Custom CSS URL', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\custom_css_url_callback',
		'fundy_settings_page',
		'fundy_settings_section_advanced'
	);

}

/**
 * Sanitization callback for fundy_options.
 */
function sanitize_options( array|null $input ): array {
	$sanitized = [];

	if (! $input) {
		return $sanitized;
	}

	$sanitized['override_network'] = ! empty( $input['override_network'] ) ? 'yes' : '';
	if (\is_multisite() && 'yes' !== $sanitized['override_network']) {
		$sanitized['api_key'] = '';
		$sanitized['forms_script'] = '';
		$sanitized['conversion_script'] = '';
		$sanitized['tracking_enabled'] = '';
		$sanitized['tracking_script'] = '';
		$sanitized['organization_public_id'] = '';
		$sanitized['disable_data_layer_event'] = '';
		$sanitized['debug'] = '';
		$sanitized['theme'] = '';
		$sanitized['theme_css_url'] = '';
		$sanitized['custom_css_url'] = '';

		return $sanitized;
	}

	$sanitized['api_key'] = isset( $input['api_key'] )
		? \sanitize_text_field( $input['api_key'] )
		: '';

	$sanitized['forms_script'] = normalize_script_env( (string) ( $input['forms_script'] ?? '' ), 'prod' );
	$sanitized['conversion_script'] = normalize_script_env( (string) ( $input['conversion_script'] ?? '' ), 'prod' );
	$sanitized['tracking_enabled'] = ! empty( $input['tracking_enabled'] ) ? 'yes' : '';
	$sanitized['tracking_script'] = normalize_script_env( (string) ( $input['tracking_script'] ?? '' ), 'prod' );
	$sanitized['disable_data_layer_event'] = ! empty( $input['disable_data_layer_event'] ) ? 'yes' : '';
	$sanitized['debug'] = ! empty( $input['debug'] ) ? 'yes' : '';
	$sanitized['theme'] = sanitize_theme_name( (string) ( $input['theme'] ?? '' ) );
	$sanitized['custom_css_url'] = sanitize_custom_css_url( (string) ( $input['custom_css_url'] ?? '' ) );

	$previous = \get_option( 'fundy_options', [] );
	$previous = \is_array( $previous ) ? $previous : [];

	$id_resolution = resolve_organization_public_id(
		$sanitized['api_key'],
		(string) ( $previous['api_key'] ?? '' ),
		sanitize_organization_public_id( (string) ( $previous['organization_public_id'] ?? '' ) )
	);

	$sanitized['organization_public_id'] = $id_resolution['id'];

	if ( '' !== $id_resolution['error'] ) {
		\add_settings_error( 'fundy_options', 'fundy_organization_public_id', $id_resolution['error'] );
	}

	// Resolved with the API key being saved in this same request, not
	// get_api_key(), so a key change and a theme choice in one save work.
	$resolution = resolve_theme_css_url(
		$sanitized['theme'],
		$sanitized['api_key'],
		sanitize_theme_name( (string) ( $previous['theme'] ?? '' ) ),
		sanitize_custom_css_url( (string) ( $previous['theme_css_url'] ?? '' ) )
	);

	$sanitized['theme_css_url'] = $resolution['url'];

	if ( '' !== $resolution['error'] ) {
		\add_settings_error( 'fundy_options', 'fundy_theme_css_url', $resolution['error'] );
	}

	return $sanitized;
}

/**
 * Resolve the organization public id for the API key being saved.
 *
 * @param string $api_key            API key being saved in the same request.
 * @param string $previous_api_key   Previously stored API key.
 * @param string $previous_public_id Previously stored organization public id.
 * @return array{id: string, error: string}
 */
function resolve_organization_public_id( string $api_key, string $previous_api_key, string $previous_public_id ): array {
	if ( '' === $api_key ) {
		return [
			'id'    => '',
			'error' => '',
		];
	}

	if ( $api_key === $previous_api_key && '' !== $previous_public_id ) {
		return [
			'id'    => $previous_public_id,
			'error' => '',
		];
	}

	$public_id = fetch_organization_public_id( $api_key );

	if ( ! \is_wp_error( $public_id ) ) {
		return [
			'id'    => $public_id,
			'error' => '',
		];
	}

	return [
		'id'    => '',
		'error' => $api_key === $previous_api_key ? '' : \sprintf(
			/* translators: %s: error message returned while fetching the organization. */
			\__( 'The organization ID could not be fetched (%s). Save the settings again to retry.', 'dekode-fundraising' ),
			$public_id->get_error_message()
		),
	];
}

/**
 * Resolve the stylesheet URL for a theme name at save time.
 *
 * The URL is resolved once here, never on the front end, so a page render
 * never makes a remote request. When resolution fails (list unavailable, or
 * the name is no longer in it) the previously resolved URL is kept for an
 * unchanged name - saving unrelated settings must not drop a working theme -
 * otherwise the URL is cleared and the caller surfaces the error.
 *
 * @param string $theme          Sanitized theme name being saved.
 * @param string $api_key        API key being saved in the same request.
 * @param string $previous_theme Previously stored theme name.
 * @param string $previous_url   Previously stored stylesheet URL.
 * @return array{url: string, error: string}
 */
function resolve_theme_css_url( string $theme, string $api_key, string $previous_theme, string $previous_url ): array {
	if ( '' === $theme ) {
		return [
			'url'   => '',
			'error' => '',
		];
	}

	$themes = get_organization_themes( $api_key );

	if ( ! \is_wp_error( $themes ) && isset( $themes[ $theme ] ) ) {
		return [
			'url'   => $themes[ $theme ]['url'],
			'error' => '',
		];
	}

	if ( $theme === $previous_theme && '' !== $previous_url ) {
		return [
			'url'   => $previous_url,
			'error' => '',
		];
	}

	if ( \is_wp_error( $themes ) ) {
		return [
			'url'   => '',
			'error' => \sprintf(
				/* translators: %s: error message returned while fetching the theme list. */
				\__( 'The stylesheet URL for the selected theme could not be resolved (%s). Save the settings again to retry.', 'dekode-fundraising' ),
				$themes->get_error_message()
			),
		];
	}

	return [
		'url'   => '',
		'error' => \sprintf(
			/* translators: %s: theme name. */
			\__( 'The theme "%s" is not deployed for your organization, so no stylesheet will be applied.', 'dekode-fundraising' ),
			$theme
		),
	];
}

/**
 * The settings section callback function.
 */
function section_callback(): void {
	echo '<p>' . \esc_html__( 'If you are unsure about the settings here please talk to your Dekode Fundraising contact.', 'dekode-fundraising' ) . '</p>';
}

/**
 * Advanced settings section callback.
 */
function advanced_section_callback(): void {
	echo '<p>' . \esc_html__( 'Advanced settings for troubleshooting and diagnostics.', 'dekode-fundraising' ) . '</p>';
}

/**
 * Field callback for the Override Network.
 */
function override_network_callback(): void {
	$options = \get_option( 'fundy_options', [] );
	$override = ! empty( $options['override_network'] ) ? 'yes' : 'no';
	?>
	<label>
		<input
			type="checkbox"
			name="fundy_options[override_network]"
			value="yes"
			<?php \checked( $override, 'yes' ); ?>
		/>
		<?php \esc_html_e( 'Override network settings?', 'dekode-fundraising' ); ?>
	</label>
	<?php
}

/**
 * Field callback for the API Key.
 */
function api_key_callback(): void {
	$options = \get_option( 'fundy_options' );
	$api_key = isset( $options['api_key'] ) ? $options['api_key'] : '';
	?>
	<input
		type="text"
		name="fundy_options[api_key]"
		placeholder="<?php \esc_attr_e( 'Enter your API key', 'dekode-fundraising' ); ?>"
		value="<?php echo \esc_attr( $api_key ); ?>"
		class="regular-text"
		<?php \disabled( ( \is_multisite() && empty( $options['override_network'] ) ) ); ?>
	/>
	<?php
}

/**
 * Field callback for the Fundy Forms script.
 */
function forms_script_callback(): void {
	$options = \get_option( 'fundy_options', [] );
	$env     = get_forms_script_env();
	?>
	<fieldset>
		<label>
			<input
				type="radio"
				name="fundy_options[forms_script]"
				value="dev"
				<?php \checked( $env, 'dev' ); ?>
				<?php \disabled( ( \is_multisite() && empty( $options['override_network'] ) ) ); ?>
			/>
			<?php \esc_html_e( 'Development', 'dekode-fundraising' ); ?>
		</label>
		<br>
		<label>
			<input
				type="radio"
				name="fundy_options[forms_script]"
				value="prod"
				<?php \checked( $env, 'prod' ); ?>
				<?php \disabled( ( \is_multisite() && empty( $options['override_network'] ) ) ); ?>
			/>
			<?php \esc_html_e( 'Production', 'dekode-fundraising' ); ?>
		</label>
	</fieldset>
	<?php
}

/**
 * Field callback for the Fundy Conversion script.
 */
function conversion_script_callback(): void {
	$options = \get_option( 'fundy_options', [] );
	$env     = get_conversion_script_env();
	?>
	<fieldset>
		<label>
			<input
				type="radio"
				name="fundy_options[conversion_script]"
				value="dev"
				<?php \checked( $env, 'dev' ); ?>
				<?php \disabled( ( \is_multisite() && empty( $options['override_network'] ) ) ); ?>
			/>
			<?php \esc_html_e( 'Development', 'dekode-fundraising' ); ?>
		</label>
		<br>
		<label>
			<input
				type="radio"
				name="fundy_options[conversion_script]"
				value="prod"
				<?php \checked( $env, 'prod' ); ?>
				<?php \disabled( ( \is_multisite() && empty( $options['override_network'] ) ) ); ?>
			/>
			<?php \esc_html_e( 'Production', 'dekode-fundraising' ); ?>
		</label>
	</fieldset>
	<?php
}

/**
 * Field callback for the Tracking script.
 */
function tracking_script_callback(): void {
	$options = \get_option( 'fundy_options', [] );
	$enabled = get_tracking_script_enabled();
	$env     = get_tracking_script_env();
	?>
	<p>
		<label>
			<input
				type="checkbox"
				name="fundy_options[tracking_enabled]"
				value="yes"
				<?php \checked( $enabled, true ); ?>
				<?php \disabled( ( \is_multisite() && empty( $options['override_network'] ) ) ); ?>
			/>
			<?php \esc_html_e( 'Enable', 'dekode-fundraising' ); ?>
		</label>
	</p>
	<fieldset>
		<label>
			<input
				type="radio"
				name="fundy_options[tracking_script]"
				value="dev"
				<?php \checked( $env, 'dev' ); ?>
				<?php \disabled( ( \is_multisite() && empty( $options['override_network'] ) ) ); ?>
			/>
			<?php \esc_html_e( 'Development', 'dekode-fundraising' ); ?>
		</label>
		<br>
		<label>
			<input
				type="radio"
				name="fundy_options[tracking_script]"
				value="prod"
				<?php \checked( $env, 'prod' ); ?>
				<?php \disabled( ( \is_multisite() && empty( $options['override_network'] ) ) ); ?>
			/>
			<?php \esc_html_e( 'Production', 'dekode-fundraising' ); ?>
		</label>
	</fieldset>
	<?php
}

/**
 * Field callback for the disableDataLayerEvent setting.
 */
function disable_data_layer_event_callback(): void {
	$options = \get_option( 'fundy_options', [] );
	$enabled = get_disable_data_layer_event();
	?>
	<label>
		<input
			type="checkbox"
			name="fundy_options[disable_data_layer_event]"
			value="yes"
			<?php \checked( $enabled, true ); ?>
			<?php \disabled( ( \is_multisite() && empty( $options['override_network'] ) ) ); ?>
		/>
		<?php \esc_html_e( 'Disable', 'dekode-fundraising' ); ?>
	</label>
	<p class="description"><?php \esc_html_e( 'Prevents pushing conversion events to the dataLayer.', 'dekode-fundraising' ); ?></p>
	<?php
}

/**
 * Field callback for the Debug setting.
 */
function debug_callback(): void {
	$options = \get_option( 'fundy_options', [] );
	$enabled = get_debug_enabled();
	?>
	<label>
		<input
			type="checkbox"
			name="fundy_options[debug]"
			value="yes"
			<?php \checked( $enabled, true ); ?>
			<?php \disabled( ( \is_multisite() && empty( $options['override_network'] ) ) ); ?>
		/>
		<?php \esc_html_e( 'Enable', 'dekode-fundraising' ); ?>
	</label>
	<?php
}

/**
 * Field callback for the Theme setting.
 */
function theme_callback(): void {
	$options = \get_option( 'fundy_options', [] );
	$options = \is_array( $options ) ? $options : [];

	$network_managed = \is_multisite() && empty( $options['override_network'] );

	render_theme_select(
		'fundy_options[theme]',
		sanitize_theme_name( (string) ( $options['theme'] ?? '' ) ),
		sanitize_custom_css_url( (string) ( $options['theme_css_url'] ?? '' ) ),
		(string) ( $options['api_key'] ?? '' ),
		$network_managed
	);
}

/**
 * Render the theme select, shared with the network settings page.
 *
 * Rendering fetches the theme list (filling the shared cache the sanitize
 * callback reads on the following POST). A saved name missing from the list
 * stays selectable so saving unrelated settings never silently drops it.
 *
 * @param string $field_name      Input name attribute.
 * @param string $saved_name      Stored theme name.
 * @param string $saved_url       Stored resolved stylesheet URL.
 * @param string $api_key         API key used to fetch the theme list.
 * @param bool   $network_managed Whether the field is controlled by the network settings.
 */
function render_theme_select( string $field_name, string $saved_name, string $saved_url, string $api_key, bool $network_managed ): void {
	$themes = [];
	$error  = '';
	$no_key = ! $network_managed && '' === $api_key;

	if ( ! $network_managed && ! $no_key ) {
		$result = get_organization_themes( $api_key );

		if ( \is_wp_error( $result ) ) {
			$error = $result->get_error_message();
		} else {
			$themes = $result;
		}
	}

	$stale_label = $saved_name;

	if ( '' !== $saved_name && ! isset( $themes[ $saved_name ] ) && '' === $error && ! $no_key && ! $network_managed ) {
		$stale_label = \sprintf(
			/* translators: %s: theme name. */
			\__( '%s (not found)', 'dekode-fundraising' ),
			$saved_name
		);
	}
	?>
	<select
		id="fundy_theme"
		name="<?php echo \esc_attr( $field_name ); ?>"
		<?php \disabled( $network_managed || $no_key ); ?>
	>
		<option value=""><?php \esc_html_e( 'None', 'dekode-fundraising' ); ?></option>
		<?php foreach ( $themes as $theme ) : ?>
			<option value="<?php echo \esc_attr( $theme['name'] ); ?>" <?php \selected( $saved_name, $theme['name'] ); ?>>
				<?php echo \esc_html( theme_option_label( $theme ) ); ?>
			</option>
		<?php endforeach; ?>
		<?php if ( '' !== $saved_name && ! isset( $themes[ $saved_name ] ) ) : ?>
			<option value="<?php echo \esc_attr( $saved_name ); ?>" selected>
				<?php echo \esc_html( $stale_label ); ?>
			</option>
		<?php endif; ?>
	</select>
	<?php if ( $no_key ) : ?>
		<p class="description"><?php \esc_html_e( 'Set an API key to list themes.', 'dekode-fundraising' ); ?></p>
	<?php elseif ( '' !== $error ) : ?>
		<p class="description"><?php echo \esc_html( $error ); ?></p>
	<?php endif; ?>
	<p class="description"><?php \esc_html_e( 'A theme deployed for your organization in Fundy. The custom CSS URL below overrides it when set.', 'dekode-fundraising' ); ?></p>
	<?php if ( '' !== $saved_url ) : ?>
		<p class="description"><code><?php echo \esc_html( $saved_url ); ?></code></p>
		<?php
	endif;
}

/**
 * Build the select option label for a theme entry.
 *
 * @param array{name: string, url: string, deployed_at: string} $theme Theme entry.
 */
function theme_option_label( array $theme ): string {
	$deployed = \strtotime( $theme['deployed_at'] );

	if ( false === $deployed ) {
		return $theme['name'];
	}

	return \sprintf(
		/* translators: 1: theme name, 2: date the theme was last deployed. */
		\__( '%1$s (deployed %2$s)', 'dekode-fundraising' ),
		$theme['name'],
		\wp_date( (string) \get_option( 'date_format' ), $deployed )
	);
}

/**
 * Field callback for the Custom CSS URL setting.
 */
function custom_css_url_callback(): void {
	$options = \get_option( 'fundy_options', [] );
	$url     = get_custom_css_url();
	?>
	<input
		type="url"
		name="fundy_options[custom_css_url]"
		placeholder="<?php echo \esc_attr( 'https://domain.com/file.css' ); ?>"
		value="<?php echo \esc_attr( $url ); ?>"
		class="regular-text code"
		<?php \disabled( ( \is_multisite() && empty( $options['override_network'] ) ) ); ?>
	/>
	<p class="description"><?php \esc_html_e( 'URL of a custom stylesheet injected into Fundy forms.', 'dekode-fundraising' ); ?></p>
	<?php
}

/**
 * Renders Page
 */
function render_page(): void {
	if ( ! \current_user_can( 'manage_options' ) ) {
		return;
	}

	?>
	<div class="wrap">
		<h1><?php \esc_html_e( 'Dekode Fundraising Settings', 'dekode-fundraising' ); ?></h1>
		<form action="options.php" method="post">
			<?php
			\settings_fields( 'fundy_settings_group' );

			\do_settings_sections( 'fundy_settings_page' );

			\submit_button( \__( 'Save', 'dekode-fundraising' ) );
			?>
		</form>
	</div>
	<?php
}
