<?php
/**
 * Settings Page.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\SettingsPage;

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
				'forms_script'             => 'prod',
				'conversion_script'        => 'prod',
				'tracking_enabled'         => '',
				'tracking_script'          => 'prod',
				'disable_data_layer_event' => '',
				'debug'                    => '',
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
		$sanitized['disable_data_layer_event'] = '';
		$sanitized['debug'] = '';

		return $sanitized;
	}

	$sanitized['api_key'] = isset( $input['api_key'] )
		? \sanitize_text_field( $input['api_key'] )
		: '';

	$sanitized['forms_script'] = \Dekode\Fundraising\Settings\normalize_script_env( (string) ( $input['forms_script'] ?? '' ), 'prod' );
	$sanitized['conversion_script'] = \Dekode\Fundraising\Settings\normalize_script_env( (string) ( $input['conversion_script'] ?? '' ), 'prod' );
	$sanitized['tracking_enabled'] = ! empty( $input['tracking_enabled'] ) ? 'yes' : '';
	$sanitized['tracking_script'] = \Dekode\Fundraising\Settings\normalize_script_env( (string) ( $input['tracking_script'] ?? '' ), 'prod' );
	$sanitized['disable_data_layer_event'] = ! empty( $input['disable_data_layer_event'] ) ? 'yes' : '';
	$sanitized['debug'] = ! empty( $input['debug'] ) ? 'yes' : '';

	return $sanitized;
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
	$env     = \Dekode\Fundraising\Settings\get_forms_script_env();
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
	$env     = \Dekode\Fundraising\Settings\get_conversion_script_env();
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
	$enabled = \Dekode\Fundraising\Settings\get_tracking_script_enabled();
	$env     = \Dekode\Fundraising\Settings\get_tracking_script_env();
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
	$enabled = \Dekode\Fundraising\Settings\get_disable_data_layer_event();
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
	$enabled = \Dekode\Fundraising\Settings\get_debug_enabled();
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
