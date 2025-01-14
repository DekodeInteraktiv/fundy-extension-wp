<?php
/**
 * Settings Page Network.
 *
 * @package fundy
 */

declare( strict_types = 1 );

namespace Dekode\Fundy\SettingsPageNetwork;

/**
 * Admin Hooks
 */
if ( \is_multisite() ) {
	\add_action( 'network_admin_menu', __NAMESPACE__ . '\\register_page' );
}

/**
 * Registers Page
 */
function register_page(): void {
	\add_submenu_page(
		'settings.php',
		\__( 'Fundy Settings', 'fundy' ),
		\__( 'Fundy', 'fundy' ),
		'manage_network_options',
		'fundy_settings',
		__NAMESPACE__ . '\\render_page',
	);
}

/**
 * Renders Page
 */
function render_page() {
	if (
		isset( $_POST['fundy_settings_nonce'] )
		&& \wp_verify_nonce( \sanitize_key( $_POST['fundy_settings_nonce'] ), 'fundy_save' )
	) {
		$api_key = \sanitize_text_field( $_POST['fundy_api_key'] ?? '' );
		\update_network_option( null, 'fundy_api_key', $api_key );

		$script_env = ( \sanitize_text_field( $_POST['fundy_script_env'] ) === 'dev' ) ? 'dev' : 'prod';
		\update_network_option( null, 'fundy_script_env', $script_env );

		// Admin notice.
		echo '<div class="updated"><p>' . \__( 'Settings updated.', 'fundy' ) . '</p></div>';
	}

	$api_key    = \get_network_option( null, 'fundy_api_key', '' );
	$script_env = \get_network_option( null, 'fundy_script_env', 'prod' );
	?>
	<div class="wrap">Networky
		<h1><?php \_e( 'Fundy Settings', 'fundy' ); ?></h1>
		<form method="post" action="">
			<?php \wp_nonce_field( 'fundy_save', 'fundy_settings_nonce' ); ?>

			<table class="form-table">
				<tr>
					<th scope="row">
						<label for="fundy_api_key">
							<?php \_e( 'API Key', 'fundy' ); ?>
						</label>
					</th>
					<td>
						<input type="text"
							id="fundy_api_key"
							name="fundy_api_key"
							value="<?php echo \esc_attr( $api_key ); ?>"
							class="regular-text"
						/>
					</td>
				</tr>

				<tr>
					<th scope="row">
						<?php \_e( 'Script Environment', 'fundy' ); ?>
					</th>
					<td>
						<fieldset>
							<label>
								<input
									type="radio"
									name="fundy_script_env"
									value="dev"
									<?php \checked( $script_env, 'dev' ); ?>
								/>
								<?php \_e( 'Development', 'fundy' ); ?>
							</label>
							<br/>
							<label>
								<input
									type="radio"
									name="fundy_script_env"
									value="prod"
									<?php \checked( $script_env, 'prod' ); ?>
								/>
								<?php \_e( 'Production', 'fundy' ); ?>
							</label>
						</fieldset>
					</td>
				</tr>
			</table>

			<?php \submit_button( \__('Save', 'fundy') ); ?>
		</form>
	</div>
	<?php
}
