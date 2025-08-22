<?php
/**
 * Fundy Network Settings.
 *
 * @package fundy
 */

declare( strict_types = 1 );

namespace Dekode\Fundy\SettingsPageNetwork;

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
		\__( 'Fundy Settings', 'fundy' ),
		\__( 'Fundy', 'fundy' ),
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
				'api_key'    => '',
				'script_env' => 'prod',
			],
		]
	);

	\add_settings_section(
		'fundy_network_settings_section',
		\__( 'General Configuration', 'fundy' ),
		__NAMESPACE__ . '\\settings_section_callback',
		'fundy_network_settings_page',
	);

	\add_settings_field(
		'fundy_api_key',
		\__( 'API Key', 'fundy' ),
		__NAMESPACE__ . '\\api_key_callback',
		'fundy_network_settings_page',
		'fundy_network_settings_section',
	);

	\add_settings_field(
		'fundy_script_env',
		\__( 'Script Environment', 'fundy' ),
		__NAMESPACE__ . '\\script_env_callback',
		'fundy_network_settings_page',
		'fundy_network_settings_section',
	);
}

/**
 * Save network settings when form is submitted to edit.php?action=fundy_network_settings_group.
 */
function save_network_settings(): void {
	if ( ! \current_user_can( 'manage_network_options' ) ) {
		\wp_die( \esc_html__( 'Insufficient permissions.', 'fundy' ) );
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

	$sanitized['script_env'] = ( isset( $input['script_env'] ) && 'dev' === $input['script_env'] )
		? 'dev'
		: 'prod';

	return $sanitized;
}

/**
 * Callback for our settings section description.
 */
function settings_section_callback(): void {
	echo '<p>' . \esc_html__( 'If you are unsure about the settings here please talk to your Fundy contact.', 'fundy' ) . '</p>';
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
 * Field callback for the Script Environment.
 */
function script_env_callback(): void {
	$options    = \get_network_option( null, 'fundy_network_options', [] );
	$script_env = $options['script_env'] ?? 'prod';
	?>
	<fieldset>
		<label>
			<input
				type="radio"
				name="fundy_network_options[script_env]"
				value="dev"
				<?php \checked( $script_env, 'dev' ); ?>
			/>
			<?php \esc_html_e( 'Development', 'fundy' ); ?>
		</label><br/>
		<label>
			<input
				type="radio"
				name="fundy_network_options[script_env]"
				value="prod"
				<?php \checked( $script_env, 'prod' ); ?>
			/>
			<?php \esc_html_e( 'Production', 'fundy' ); ?>
		</label>
	</fieldset>
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
		<h1><?php \esc_html_e( 'Fundy Settings', 'fundy' ); ?></h1>
		<form action="<?php echo \esc_attr( \add_query_arg( 'action', 'fundy_network_settings_group', 'edit.php' ) ); ?>" method="post">
			<?php
			\settings_fields( 'fundy_network_settings_group' );

			\do_settings_sections( 'fundy_network_settings_page' );

			\submit_button( \__( 'Save', 'fundy' ) );
			?>
		</form>
	</div>
	<?php
}
