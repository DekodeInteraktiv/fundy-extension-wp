<?php
/**
 * Donation Form.
 *
 * @package donations
 */

declare( strict_types = 1 );

namespace Donations\BlockLibrary\ContentGenerationBlock;

/**
 * Hooks.
 */
\add_action( 'init', __NAMESPACE__ . '\\register_block' );

/**
 * Register block.
 *
 * @return void
 */
function register_block(): void {
	\register_block_type_from_metadata(
		__DIR__ . '/src',
		[
			'render_callback' => __NAMESPACE__ . '\\render_block',
		]
	);

	\wp_localize_script(
		'donations-donation-form-editor-script',
		'donationsSettings',
		[
			'baseURL' => get_fundy_url(),
		]
	);
}

/**
 * Render the block.
 */
function render_block(array $attributes): string {
	\wp_enqueue_script( 'fundy-form-script' );

	// If no form ID is set, return empty string.
	if ( empty( $attributes['formId'] ) ) {
		return '';
	}

	\ob_start();
	?>
	<div class="donations-form wp-block-donations-form">
		<?php if ( !empty($attributes['title'])) : ?>
			<h3 className="donations-form__title"><?php echo \esc_html( $attributes['title'] ); ?></h3>
		<?php endif; ?>

		<?php if ( !empty($attributes['title'])) : ?>
			<p className="donations-form__desc"><?php echo \esc_html( $attributes['description'] ); ?></p>
		<?php endif; ?>

		<div class="fundy-form" data-form-id="<?php echo esc_attr( $attributes['formId'] ); ?>" data-env="stage" data-lang="<?php echo \esc_attr( \get_locale() ); ?>"></div>
	</div>
	<?php
	return ob_get_clean();
}

/**
 * Return the Fundy URL based on environment.
 */
function get_fundy_url() {
	switch (\wp_get_environment_type()) {
		case 'production':
			return 'https://fundy-stage-be.do.dekodes.no';
		case 'staging':
		case 'stage':
		case 'development':
		case 'develop':
			return 'https://fundy-stage-be.do.dekodes.no';
		default:
			return 'http://localhost';
	}
}
