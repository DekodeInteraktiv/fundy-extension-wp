/**
 * WordPress dependencies
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	Placeholder,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const MIN_HEIGHT = 240;
const MAX_HEIGHT = 1200;

/**
 * The editor preview is the front-end iframe with the chosen options and
 * interaction forced off, so scrolling the editor never scrolls the map.
 *
 * @param {Object} attributes Block attributes.
 * @return {string} The preview iframe src, or '' without an organization.
 */
function previewUrl(attributes) {
	const base = window.fundyLiveMapSettings?.previewUrl;
	if (!base) {
		return '';
	}

	const url = new URL(base);
	url.searchParams.set('mode', attributes.mode);
	url.searchParams.set('view', attributes.view);
	url.searchParams.set('theme', attributes.theme);
	url.searchParams.set('counters', attributes.showCounters ? '1' : '0');
	url.searchParams.set('labels', attributes.showLabels ? '1' : '0');
	url.searchParams.set('window', attributes.window);
	url.searchParams.delete('interactive');
	if (attributes.ctaUrl) {
		url.searchParams.set('cta', attributes.ctaUrl);
	} else {
		url.searchParams.delete('cta');
	}

	return url.toString();
}

/**
 * Render the Live Map block editor UI.
 *
 * @param {Object}   props               Block props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Attribute setter.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const hasOrganizationId = !!window.fundyLiveMapSettings?.hasOrganizationId;
	const settingsUrl = window.fundyLiveMapSettings?.settingsUrl ?? '';
	const src = previewUrl(attributes);

	const controls = (
		<InspectorControls>
			<PanelBody title={__('Map', 'dekode-fundraising')}>
				<SelectControl
					label={__('Show', 'dekode-fundraising')}
					value={attributes.mode}
					options={[
						{
							label: __('Gifts', 'dekode-fundraising'),
							value: 'gifts',
						},
						{
							label: __(
								'Gifts and activity',
								'dekode-fundraising',
							),
							value: 'activity',
						},
					]}
					onChange={(mode) => setAttributes({ mode })}
					__nextHasNoMarginBottom
					__next40pxDefaultSize
				/>
				<SelectControl
					label={__('View', 'dekode-fundraising')}
					value={attributes.view}
					options={[
						{
							label: __('Your country', 'dekode-fundraising'),
							value: 'org',
						},
						{
							label: __('Nordics', 'dekode-fundraising'),
							value: 'nordics',
						},
						{
							label: __('Europe', 'dekode-fundraising'),
							value: 'europe',
						},
						{
							label: __('World', 'dekode-fundraising'),
							value: 'world',
						},
					]}
					onChange={(view) => setAttributes({ view })}
					__nextHasNoMarginBottom
					__next40pxDefaultSize
				/>
				<SelectControl
					label={__('Time window', 'dekode-fundraising')}
					help={__(
						'How long activity stays on the map. Today keeps the map from looking empty on quiet days.',
						'dekode-fundraising',
					)}
					value={attributes.window}
					options={[
						{
							label: __('Today', 'dekode-fundraising'),
							value: 'today',
						},
						{
							label: __('Last hour', 'dekode-fundraising'),
							value: 'hour',
						},
						{
							label: __('Live (2 minutes)', 'dekode-fundraising'),
							value: 'live',
						},
					]}
					onChange={(window) => setAttributes({ window })}
					__nextHasNoMarginBottom
					__next40pxDefaultSize
				/>
				<SelectControl
					label={__('Theme', 'dekode-fundraising')}
					value={attributes.theme}
					options={[
						{
							label: __('Light', 'dekode-fundraising'),
							value: 'light',
						},
						{
							label: __('Dark', 'dekode-fundraising'),
							value: 'dark',
						},
					]}
					onChange={(theme) => setAttributes({ theme })}
					__nextHasNoMarginBottom
					__next40pxDefaultSize
				/>
				<ToggleControl
					label={__('Show counters', 'dekode-fundraising')}
					help={__(
						'Gifts today and, if your organization allows it, the amount raised.',
						'dekode-fundraising',
					)}
					checked={attributes.showCounters}
					onChange={(showCounters) => setAttributes({ showCounters })}
					__nextHasNoMarginBottom
				/>
				<ToggleControl
					label={__('Show place names', 'dekode-fundraising')}
					checked={attributes.showLabels}
					onChange={(showLabels) => setAttributes({ showLabels })}
					__nextHasNoMarginBottom
				/>
				<ToggleControl
					label={__(
						'Let visitors move the map',
						'dekode-fundraising',
					)}
					checked={attributes.interactive}
					onChange={(interactive) => setAttributes({ interactive })}
					__nextHasNoMarginBottom
				/>
				<RangeControl
					label={__('Height (px)', 'dekode-fundraising')}
					value={attributes.height}
					min={MIN_HEIGHT}
					max={MAX_HEIGHT}
					step={10}
					onChange={(height) =>
						setAttributes({
							height: Math.max(MIN_HEIGHT, height ?? MIN_HEIGHT),
						})
					}
					__nextHasNoMarginBottom
					__next40pxDefaultSize
				/>
				<TextControl
					label={__(
						'Donation page link (optional)',
						'dekode-fundraising',
					)}
					help={__(
						'Shown as a QR code on kiosk screens opened from this page.',
						'dekode-fundraising',
					)}
					type="url"
					value={attributes.ctaUrl}
					onChange={(ctaUrl) => setAttributes({ ctaUrl })}
					__nextHasNoMarginBottom
					__next40pxDefaultSize
				/>
			</PanelBody>
		</InspectorControls>
	);

	if (!hasOrganizationId) {
		return (
			<div {...blockProps}>
				{controls}
				<Placeholder
					icon="location-alt"
					label={__('Fundy Live Map', 'dekode-fundraising')}
					instructions={
						settingsUrl
							? __(
									'Save your API key on the plugin settings page to connect the map to your organization. Keys saved before this version need to be saved again.',
									'dekode-fundraising',
								)
							: __(
									'The plugin is not connected to a Fundy organization yet. Ask a site administrator to save the API key in the Dekode Fundraising settings.',
									'dekode-fundraising',
								)
					}
				>
					{settingsUrl && (
						<Button variant="primary" href={settingsUrl}>
							{__('Open settings', 'dekode-fundraising')}
						</Button>
					)}
				</Placeholder>
			</div>
		);
	}

	return (
		<div {...blockProps}>
			{controls}
			<div style={{ position: 'relative' }}>
				<iframe
					className="fundy-live-map"
					src={src}
					title={__('Live map preview', 'dekode-fundraising')}
					loading="lazy"
					style={{
						width: '100%',
						height: `${attributes.height}px`,
						border: 0,
						display: 'block',
						pointerEvents: 'none',
					}}
				/>
			</div>
		</div>
	);
}
