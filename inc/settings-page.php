<?php
/**
 * Settings Page.
 *
 * @package fundy
 */

declare( strict_types = 1 );

namespace Dekode\Fundy\SettingsPage;

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
		\__( 'Fundy Settings', 'fundy' ),
		\__( 'Fundy', 'fundy' ),
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
				'api_key'    => '',
				'script_env' => 'prod',
			],
		]
	);

	\add_settings_section(
		'fundy_settings_section',
		\__( 'General Configuration', 'fundy' ),
		__NAMESPACE__ . '\\section_callback',
		'fundy_settings_page',
	);

	if ( \is_multisite() ) {
		\add_settings_field(
			'fundy_override_network',
			\__( 'Override Network Settings', 'fundy' ),
			__NAMESPACE__ . '\\override_network_callback',
			'fundy_settings_page',
			'fundy_settings_section'
		);
	}

	\add_settings_field(
		'fundy_api_key',
		\__( 'API Key', 'fundy' ),
		__NAMESPACE__ . '\\api_key_callback',
		'fundy_settings_page',
		'fundy_settings_section'
	);

	\add_settings_field(
		'fundy_script_env',
		\__( 'Script Environment', 'fundy' ),
		__NAMESPACE__ . '\\script_env_callback',
		'fundy_settings_page',
		'fundy_settings_section'
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
		$sanitized['script_env'] = '';

		return $sanitized;
	}

	$sanitized['api_key'] = isset( $input['api_key'] )
		? \sanitize_text_field( $input['api_key'] )
		: '';

	$sanitized['script_env'] = ( isset( $input['script_env'] ) && 'dev' === $input['script_env'] )
		? 'dev'
		: 'prod';

	return $sanitized;
}

/**
 * The settings section callback function.
 */
function section_callback(): void {
	echo '<p>' . \esc_html__( 'If you are unsure about the settings here please talk to your Fundy contact.', 'fundy' ) . '</p>';
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
		<?php \esc_html_e( 'Override network settings?', 'fundy' ); ?>
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
		placeholder="<?php \esc_attr_e( 'Enter your API key', 'fundy' ); ?>"
		value="<?php echo \esc_attr( $api_key ); ?>"
		class="regular-text"
		<?php \disabled( ( \is_multisite() && empty( $options['override_network'] ) ) ); ?>
	/>
	<?php
}

/**
 * Field callback for the Script Environment.
 */
function script_env_callback(): void {
	$options    = \get_option( 'fundy_options' );
	$script_env = isset( $options['script_env'] ) ? $options['script_env'] : 'prod';
	?>
	<fieldset>
		<label>
			<input
				type="radio"
				name="fundy_options[script_env]"
				value="dev"
				<?php \checked( $script_env, 'dev' ); ?>
				<?php \disabled( ( \is_multisite() && empty( $options['override_network'] ) ) ); ?>
			/>
			<?php \esc_html_e( 'Development', 'fundy' ); ?>
		</label>
		<br>
		<label>
			<input
				type="radio"
				name="fundy_options[script_env]"
				value="prod"
				<?php \checked( $script_env, 'prod' ); ?>
				<?php \disabled( ( \is_multisite() && empty( $options['override_network'] ) ) ); ?>
			/>
			<?php \esc_html_e( 'Production', 'fundy' ); ?>
		</label>
	</fieldset>
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
		<h1><?php \esc_html_e( 'Fundy Settings', 'fundy' ); ?></h1>
		<form action="options.php" method="post">
			<?php
			\settings_fields( 'fundy_settings_group' );

			\do_settings_sections( 'fundy_settings_page' );

			\submit_button( \__( 'Save', 'fundy' ) );
			?>
		</form>
	</div>
	<?php
}
