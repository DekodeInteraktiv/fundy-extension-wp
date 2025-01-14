<?php
/**
 * Settings Page.
 *
 * @package fundy
 */

declare( strict_types = 1 );

namespace Dekode\Fundy\SettingsPage;

/**
 * Admin Hooks
 */
if (\is_blog_admin()) {
	\add_action( 'admin_menu', __NAMESPACE__ . '\\register_page' );
	\add_action( 'plugin_action_links_' . \plugin_basename( __FILE__ ), __NAMESPACE__ . '\\settings_link' );
}

/**
 * Registers Page
 */
function register_page(): void {
	\add_options_page(
		\__( 'Fundy Settings', 'fundy' ),
		\__( 'Fundy', 'fundy' ),
		'manage_options',
		'options_fundy',
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
		\update_option( 'fundy_api_key', $api_key );

		$script_env = ( $_POST['fundy_script_env'] === 'dev' ) ? 'dev' : 'prod';
		\update_option( 'fundy_script_env', $script_env );

		// Admin notice.
		echo '<div class="updated"><p>' . \__( 'Settings updated.', 'fundy' ) . '</p></div>';
	}

	$api_key    = \get_option( 'fundy_api_key', '' );
	$script_env = \get_option( 'fundy_script_env', 'prod' );
	?>
	<div class="wrap">
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

/**
 * Add Settings Link to Plugin Screen.
 *
 * @param
 */
function settings_link( array $links ) : array {
	$label = \esc_html__( 'Settings', 'fundy' );
	$slug  = 'options_fundy';

	\array_unshift( $links, "<a href='options-general.php?page=$slug'>$label</a>" );

	return $links;
}