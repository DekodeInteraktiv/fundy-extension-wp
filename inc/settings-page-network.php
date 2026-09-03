<?php
/**
 * Dekode Fundraising Network Settings.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\SettingsPageNetwork;

use function Dekode\Fundraising\Settings\normalize_script_env;
use function Dekode\Fundraising\Settings\sanitize_custom_css_url;
use function Dekode\Fundraising\Settings\sanitize_theme_name;
use function Dekode\Fundraising\SettingsPage\render_theme_select;
use function Dekode\Fundraising\SettingsPage\resolve_theme_css_url;

if ( ! \defined( 'ABSPATH' ) ) {
	exit;
}

if ( \is_multisite() ) {
	\add_action( 'network_admin_menu', __NAMESPACE__ . '\\register_page' );
	\add_action( 'network_admin_menu', __NAMESPACE__ . '\\register_settings' );
	\add_action( 'network_admin_edit_fundy_network_settings_group', __NAMESPACE__ . '\\save_network_settings' );
	\add_action( 'network_admin_notices', __NAMESPACE__ . '\\render_theme_notice' );
}

/**
 * Register the network settings page.
 */
function register_page(): void {
	\add_submenu_page(
		'settings.php',
		\__( 'Dekode Fundraising Settings', 'dekode-fundraising' ),
		\__( 'Dekode Fundraising', 'dekode-fundraising' ),
		'manage_network_options',
		'fundy_network_settings_page',
		__NAMESPACE__ . '\\render_page'
	);
}

/**
 * Register the network settings via the WP Settings API.
 */
function register_settings(): void {
	\register_setting(
		'fundy_network_settings_group',
		'fundy_network_options',
		[
			'type'              => 'array',
			'sanitize_callback' => __NAMESPACE__ . '\\sanitize_network_options',
			'default'           => [
				'api_key'                  => '',
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
		'fundy_network_settings_section',
		\__( 'General', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\settings_section_callback',
		'fundy_network_settings_page',
	);

	\add_settings_section(
		'fundy_network_settings_section_advanced',
		\__( 'Advanced', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\advanced_settings_section_callback',
		'fundy_network_settings_page',
	);

	\add_settings_field(
		'fundy_api_key',
		\__( 'API Key', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\api_key_callback',
		'fundy_network_settings_page',
		'fundy_network_settings_section',
	);

	\add_settings_field(
		'fundy_forms_script',
		\__( 'Forms Script', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\forms_script_callback',
		'fundy_network_settings_page',
		'fundy_network_settings_section',
	);

	\add_settings_field(
		'fundy_conversion_script',
		\__( 'Conversion Script', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\conversion_script_callback',
		'fundy_network_settings_page',
		'fundy_network_settings_section',
	);

	\add_settings_field(
		'fundy_disable_data_layer_event',
		\__( 'Data Layer Event', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\disable_data_layer_event_callback',
		'fundy_network_settings_page',
		'fundy_network_settings_section',
	);

	\add_settings_field(
		'fundy_tracking_script',
		\__( 'Tracking Script', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\tracking_script_callback',
		'fundy_network_settings_page',
		'fundy_network_settings_section',
	);

	\add_settings_field(
		'fundy_debug',
		\__( 'Debug Mode', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\debug_callback',
		'fundy_network_settings_page',
		'fundy_network_settings_section_advanced',
	);

	\add_settings_field(
		'fundy_theme',
		\__( 'Theme', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\theme_callback',
		'fundy_network_settings_page',
		'fundy_network_settings_section_advanced',
		[ 'label_for' => 'fundy_theme' ]
	);

	\add_settings_field(
		'fundy_custom_css_url',
		\__( 'Custom CSS URL', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\custom_css_url_callback',
		'fundy_network_settings_page',
		'fundy_network_settings_section_advanced',
	);

}

/**
 * Save network settings when form is submitted to edit.php?action=fundy_network_settings_group.
 */
function save_network_settings(): void {
	if ( ! \current_user_can( 'manage_network_options' ) ) {
		\wp_die( \esc_html__( 'Insufficient permissions.', 'dekode-fundraising' ) );
	}

	// Verify the nonce.
	\check_admin_referer( 'fundy_network_settings_group-options' );
	$sanitized = sanitize_network_options( (array) \wp_unslash( $_POST['fundy_network_options'] ?? [] ) );
	\update_site_option( 'fundy_network_options', $sanitized );

	\wp_safe_redirect(
		\add_query_arg(
			[ 'page' => 'fundy_network_settings_page', 'updated' => 'true' ],
			\network_admin_url( 'settings.php' )
		)
	);
	exit;
}

/**
 * Sanitization callback for 'fundy_network_options'.
 */
function sanitize_network_options( array $input ): array {
	$sanitized = [];

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

	$previous = \get_network_option( null, 'fundy_network_options', [] );
	$previous = \is_array( $previous ) ? $previous : [];

	// Resolved with the API key being saved in this same request, so a key
	// change and a theme choice in one save work together.
	$resolution = resolve_theme_css_url(
		$sanitized['theme'],
		$sanitized['api_key'],
		sanitize_theme_name( (string) ( $previous['theme'] ?? '' ) ),
		sanitize_custom_css_url( (string) ( $previous['theme_css_url'] ?? '' ) )
	);

	$sanitized['theme_css_url'] = $resolution['url'];

	if ( '' !== $resolution['error'] ) {
		// The network save path redirects, so there is no settings-error
		// channel; the message is parked for this user's next admin page load.
		\set_transient( theme_notice_key(), $resolution['error'], \MINUTE_IN_SECONDS );
	}

	return $sanitized;
}

/**
 * Transient key holding the pending theme-resolution notice for this user.
 */
function theme_notice_key(): string {
	return 'fundy_network_theme_notice_' . \get_current_user_id();
}

/**
 * Render the theme-resolution notice parked by the last network save.
 */
function render_theme_notice(): void {
	$notice = \get_transient( theme_notice_key() );

	if ( ! \is_string( $notice ) || '' === $notice ) {
		return;
	}

	\delete_transient( theme_notice_key() );

	echo '<div class="notice notice-error is-dismissible"><p>' . \esc_html( $notice ) . '</p></div>';
}

/**
 * Callback for our settings section description.
 */
function settings_section_callback(): void {
	echo '<p>' . \esc_html__( 'If you are unsure about the settings here please talk to your Dekode Fundraising contact.', 'dekode-fundraising' ) . '</p>';
}

/**
 * Advanced settings section callback.
 */
function advanced_settings_section_callback(): void {
	echo '<p>' . \esc_html__( 'Advanced settings for troubleshooting and diagnostics.', 'dekode-fundraising' ) . '</p>';
}

/**
 * Field callback for the API Key.
 */
function api_key_callback(): void {
	$options = \get_network_option( null, 'fundy_network_options', [] );
	$api_key = $options['api_key'] ?? '';
	?>
	<input
		type="text"
		name="fundy_network_options[api_key]"
		value="<?php echo \esc_attr( $api_key ); ?>"
		class="regular-text"
	/>
	<?php
}

/**
 * Field callback for the Fundy Forms script.
 */
function forms_script_callback(): void {
	$options = \get_network_option( null, 'fundy_network_options', [] );
	$env     = normalize_script_env( (string) ( $options['forms_script'] ?? '' ), 'prod' );
	?>
	<fieldset>
		<label>
			<input
				type="radio"
				name="fundy_network_options[forms_script]"
				value="dev"
				<?php \checked( $env, 'dev' ); ?>
			/>
			<?php \esc_html_e( 'Development', 'dekode-fundraising' ); ?>
		</label><br/>
		<label>
			<input
				type="radio"
				name="fundy_network_options[forms_script]"
				value="prod"
				<?php \checked( $env, 'prod' ); ?>
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
	$options = \get_network_option( null, 'fundy_network_options', [] );
	$env     = normalize_script_env( (string) ( $options['conversion_script'] ?? '' ), 'prod' );
	?>
	<fieldset>
		<label>
			<input
				type="radio"
				name="fundy_network_options[conversion_script]"
				value="dev"
				<?php \checked( $env, 'dev' ); ?>
			/>
			<?php \esc_html_e( 'Development', 'dekode-fundraising' ); ?>
		</label><br/>
		<label>
			<input
				type="radio"
				name="fundy_network_options[conversion_script]"
				value="prod"
				<?php \checked( $env, 'prod' ); ?>
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
	$options = \get_network_option( null, 'fundy_network_options', [] );
	$enabled = ! empty( $options['tracking_enabled'] );
	$env     = normalize_script_env( (string) ( $options['tracking_script'] ?? '' ), 'prod' );
	?>
	<p>
		<label>
			<input
				type="checkbox"
				name="fundy_network_options[tracking_enabled]"
				value="yes"
				<?php \checked( $enabled, true ); ?>
			/>
			<?php \esc_html_e( 'Enable', 'dekode-fundraising' ); ?>
		</label>
	</p>
	<fieldset>
		<label>
			<input
				type="radio"
				name="fundy_network_options[tracking_script]"
				value="dev"
				<?php \checked( $env, 'dev' ); ?>
			/>
			<?php \esc_html_e( 'Development', 'dekode-fundraising' ); ?>
		</label><br/>
		<label>
			<input
				type="radio"
				name="fundy_network_options[tracking_script]"
				value="prod"
				<?php \checked( $env, 'prod' ); ?>
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
	$options = \get_network_option( null, 'fundy_network_options', [] );
	$enabled = ! empty( $options['disable_data_layer_event'] );
	?>
	<label>
		<input
			type="checkbox"
			name="fundy_network_options[disable_data_layer_event]"
			value="yes"
			<?php \checked( $enabled, true ); ?>
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
	$options = \get_network_option( null, 'fundy_network_options', [] );
	$enabled = ! empty( $options['debug'] );
	?>
	<label>
		<input
			type="checkbox"
			name="fundy_network_options[debug]"
			value="yes"
			<?php \checked( $enabled, true ); ?>
		/>
		<?php \esc_html_e( 'Enable', 'dekode-fundraising' ); ?>
	</label>
	<?php
}

/**
 * Field callback for the Theme setting.
 */
function theme_callback(): void {
	$options = \get_network_option( null, 'fundy_network_options', [] );
	$options = \is_array( $options ) ? $options : [];

	render_theme_select(
		'fundy_network_options[theme]',
		sanitize_theme_name( (string) ( $options['theme'] ?? '' ) ),
		sanitize_custom_css_url( (string) ( $options['theme_css_url'] ?? '' ) ),
		(string) ( $options['api_key'] ?? '' ),
		false
	);
}

/**
 * Field callback for the Custom CSS URL setting.
 */
function custom_css_url_callback(): void {
	$options = \get_network_option( null, 'fundy_network_options', [] );
	$url     = sanitize_custom_css_url( (string) ( $options['custom_css_url'] ?? '' ) );
	?>
	<input
		type="url"
		name="fundy_network_options[custom_css_url]"
		placeholder="<?php echo \esc_attr( 'https://domain.com/file.css' ); ?>"
		value="<?php echo \esc_attr( $url ); ?>"
		class="regular-text code"
	/>
	<p class="description"><?php \esc_html_e( 'URL of a custom stylesheet injected into Fundy forms.', 'dekode-fundraising' ); ?></p>
	<?php
}

/**
 * Render the network settings page.
 */
function render_page(): void {
	if ( ! \current_user_can( 'manage_network_options' ) ) {
		return;
	}
	?>
	<div class="wrap">
		<h1><?php \esc_html_e( 'Dekode Fundraising Settings', 'dekode-fundraising' ); ?></h1>
		<form action="<?php echo \esc_attr( \add_query_arg( 'action', 'fundy_network_settings_group', 'edit.php' ) ); ?>" method="post">
			<?php
			\settings_fields( 'fundy_network_settings_group' );

			\do_settings_sections( 'fundy_network_settings_page' );

			\submit_button( \__( 'Save', 'dekode-fundraising' ) );
			?>
		</form>
	</div>
	<?php
}
