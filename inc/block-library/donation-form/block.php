<?php
/**
 * Donation Form.
 *
 * @package fundraising
 */

declare( strict_types = 1 );

namespace Dekokde\Fundraising\BlockLibrary\ContentGenerationBlock;

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
		'fundraising-donation-form-editor-script',
		'fundraisingSettings',
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
	<div class="fundraising-form wp-block-fundraising-form">
		<?php if ( !empty($attributes['title'])) : ?>
			<h3 class="fundraising-form__title"><?php echo \esc_html( $attributes['title'] ); ?></h3>
		<?php endif; ?>

		<?php if ( !empty($attributes['title'])) : ?>
			<p class="fundraising-form__desc"><?php echo \esc_html( $attributes['description'] ); ?></p>
		<?php endif; ?>

		<div
			class="fundy-form"
			data-form-id="<?php echo \esc_attr( $attributes['formId'] ); ?>"
			data-env="<?php echo \wp_get_environment_type(); ?>"
			data-lang="<?php echo \esc_attr( \get_locale() ); ?>"
		></div>
	</div>
	<?php
	return \ob_get_clean();
}

/**
 * Return the Fundy URL based on environment.
 */
function get_fundy_url() {
	switch (\wp_get_environment_type()) {
		case 'production':
			return 'https://fundy-prod.do.dekodes.no/core';
		case 'staging':
		case 'stage':
		case 'development':
		case 'develop':
			return 'https://fundy-stage-be.do.dekodes.no';
		default:
			return 'http://localhost';
	}
}
