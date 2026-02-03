<?php
/**
 * Dekode Fundraising Network Settings.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\SettingsPageNetwork;

if ( ! \defined( 'ABSPATH' ) ) {
	exit;
}

if ( \is_multisite() ) {
	\add_action( 'network_admin_menu', __NAMESPACE__ . '\\register_page' );
	\add_action( 'network_admin_menu', __NAMESPACE__ . '\\register_settings' );
	\add_action( 'network_admin_edit_fundy_network_settings_group', __NAMESPACE__ . '\\save_network_settings' );
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
				'conversion_enabled'       => 'yes',
				'conversion_script'        => 'prod',
				'tracking_enabled'         => '',
				'tracking_script'          => 'prod',
				'debug'                    => '',
				'disable_data_layer_event' => '',
			],
		]
	);

	\add_settings_section(
		'fundy_network_settings_section',
		\__( 'General Configuration', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\settings_section_callback',
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
		'fundy_network_settings_section',
	);

	\add_settings_field(
		'fundy_disable_data_layer_event',
		\__( 'Disable Data Layer Event', 'dekode-fundraising' ),
		__NAMESPACE__ . '\\disable_data_layer_event_callback',
		'fundy_network_settings_page',
		'fundy_network_settings_section',
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

	$sanitized['forms_script'] = \Dekode\Fundraising\Settings\normalize_script_env( (string) ( $input['forms_script'] ?? '' ), 'prod' );
	$sanitized['conversion_enabled'] = ! empty( $input['conversion_enabled'] ) ? 'yes' : '';
	$sanitized['conversion_script'] = \Dekode\Fundraising\Settings\normalize_script_env( (string) ( $input['conversion_script'] ?? '' ), 'prod' );
	$sanitized['tracking_enabled'] = ! empty( $input['tracking_enabled'] ) ? 'yes' : '';
	$sanitized['tracking_script'] = \Dekode\Fundraising\Settings\normalize_script_env( (string) ( $input['tracking_script'] ?? '' ), 'prod' );
	$sanitized['debug'] = ! empty( $input['debug'] ) ? 'yes' : '';
	$sanitized['disable_data_layer_event'] = ! empty( $input['disable_data_layer_event'] ) ? 'yes' : '';

	return $sanitized;
}

/**
 * Callback for our settings section description.
 */
function settings_section_callback(): void {
	echo '<p>' . \esc_html__( 'If you are unsure about the settings here please talk to your Dekode Fundraising contact.', 'dekode-fundraising' ) . '</p>';
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
	$env     = \Dekode\Fundraising\Settings\normalize_script_env( (string) ( $options['forms_script'] ?? '' ), 'prod' );
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
	$enabled = \array_key_exists( 'conversion_enabled', $options ) ? ! empty( $options['conversion_enabled'] ) : true;
	$env     = \Dekode\Fundraising\Settings\normalize_script_env( (string) ( $options['conversion_script'] ?? '' ), 'prod' );
	?>
	<p>
		<label>
			<input
				type="checkbox"
				name="fundy_network_options[conversion_enabled]"
				value="yes"
				<?php \checked( $enabled, true ); ?>
			/>
			<?php \esc_html_e( 'Enable Conversion Script', 'dekode-fundraising' ); ?>
		</label>
	</p>
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
	$env     = \Dekode\Fundraising\Settings\normalize_script_env( (string) ( $options['tracking_script'] ?? '' ), 'prod' );
	?>
	<p>
		<label>
			<input
				type="checkbox"
				name="fundy_network_options[tracking_enabled]"
				value="yes"
				<?php \checked( $enabled, true ); ?>
			/>
			<?php \esc_html_e( 'Enable Tracking Script', 'dekode-fundraising' ); ?>
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
		<?php \esc_html_e( 'Enable debug mode', 'dekode-fundraising' ); ?>
	</label>
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
		<?php \esc_html_e( 'Disable Data Layer event', 'dekode-fundraising' ); ?>
	</label>
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
