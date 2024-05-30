<?php
/**
 * Donation Form.
 *
 * @package fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\BlockLibrary\DonationForm;

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

	$allowed_html = [
		'strong' => [],
		'em' => [],
		's' => [],
		'a' => [
			'href' => [],
			'title' => [],
		],
	];

	$headingLevel = 'h' . $attributes['headingLevel'];

	$wrapper_attributes = \get_block_wrapper_attributes( [
		'class' => 'fundraising-form-wrapper',
	] );

	\ob_start();
	?>
	<div <?php echo $wrapper_attributes; ?>>
		<?php if ( !empty($attributes['title'])) : ?>
			<?php echo "<$headingLevel class='fundraising-form-wrapper__title'>"; ?>
				<?php echo \wp_kses( $attributes['title'], $allowed_html ); ?>
			<?php echo "</$headingLevel>"; ?>
		<?php endif; ?>

		<?php if ( !empty($attributes['description'])) : ?>
			<p class="fundraising-form-wrapper__desc"><?php echo \wp_kses( $attributes['description'], $allowed_html ); ?></p>
		<?php endif; ?>

		<div
			class="fundraising-form"
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
		case 'local':
			return 'http://localhost';
		case 'staging':
		case 'stage':
		case 'development':
		case 'develop':
			return 'https://fundy-stage-be.do.dekodes.no';
		case 'production':
		default:
			return 'https://fundy-prod.do.dekodes.no/core';
	}
}
