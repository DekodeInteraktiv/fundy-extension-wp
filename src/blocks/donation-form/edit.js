/**
 * WordPress dependencies
 */
import { speak } from '@wordpress/a11y';
import apiFetch from '@wordpress/api-fetch';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { useDebounce } from '@wordpress/compose';
import { useEffect, useRef, useState } from '@wordpress/element';
import {
	Button,
	Flex,
	FlexBlock,
	FlexItem,
	Notice,
	PanelBody,
	Placeholder,
	SelectControl,
	Spinner,
	TextControl,
} from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import FormPreview, {
	extractVariations,
	resolveTheme,
	sanitizeUrlParams,
} from './preview';

/**
 * Module-level cache so every block instance in an editor session shares a
 * single forms request. Reset on failure so a later mount can retry.
 */
let formsRequest = null;

function fetchForms() {
	if (!formsRequest) {
		formsRequest = apiFetch({ path: '/fundy/v1/forms' }).catch((error) => {
			formsRequest = null;
			throw error;
		});
	}

	return formsRequest;
}

/**
 * Render the donation form block editor UI: settings in the sidebar, a
 * static preview of the selected form in the canvas.
 *
 * @param {Object}   props               Block props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Attribute setter.
 */
export default function Edit({ attributes, setAttributes }) {
	const { formId, urlParams = [] } = attributes;
	const blockProps = useBlockProps();
	const hasApiToken = !!window.fundySettings?.hasApiToken;
	const settingsUrl = window.fundySettings?.settingsUrl ?? '';
	const coreUrl = window.fundySettings?.coreUrl ?? '';

	// Debounced so typing in the parameter repeater doesn't refetch the
	// form schema on every keystroke.
	const paramsJson = JSON.stringify(sanitizeUrlParams(urlParams));
	const [previewParamsJson, setPreviewParamsJson] = useState(paramsJson);
	const updatePreviewParams = useDebounce(setPreviewParamsJson, 500);

	useEffect(() => {
		updatePreviewParams(paramsJson);
	}, [paramsJson, updatePreviewParams]);

	// null = still loading; [] = loaded, none found.
	const [forms, setForms] = useState(null);
	const [error, setError] = useState(null);

	// Stable per-row keys for the urlParams repeater, so removing a middle
	// row doesn't re-associate DOM/focus with the wrong row. Attributes only
	// store {key, value}; identity lives here for the session.
	const rowIds = useRef([]);
	const nextRowId = useRef(0);

	while (rowIds.current.length < urlParams.length) {
		rowIds.current.push(`param-${nextRowId.current++}`);
	}

	if (rowIds.current.length > urlParams.length) {
		rowIds.current = rowIds.current.slice(0, urlParams.length);
	}

	useEffect(() => {
		if (!hasApiToken) {
			return undefined;
		}

		let cancelled = false;

		fetchForms()
			.then((data) => {
				if (cancelled) {
					return;
				}

				setForms(
					data.map((form) => ({
						value: String(form.id),
						label: form.name,
					})),
				);
				setError(null);
			})
			.catch((err) => {
				if (cancelled) {
					return;
				}

				const message =
					err?.message ||
					__('Unable to load forms.', 'dekode-fundraising');

				setError(message);
				speak(message, 'assertive');
			});

		return () => {
			cancelled = true;
		};
	}, [hasApiToken]);

	if (!hasApiToken) {
		return (
			<div {...blockProps}>
				<Placeholder
					label={__('Fundy Form', 'dekode-fundraising')}
					instructions={
						settingsUrl
							? __(
									'Set an API token on the plugin settings page to select a form.',
									'dekode-fundraising',
								)
							: __(
									'An API token is required. Ask a site administrator to configure the Dekode Fundraising plugin.',
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

	const isLoaded = null !== forms;
	const hasForms = isLoaded && forms.length > 0;
	const isStale =
		isLoaded &&
		formId > 0 &&
		!forms.some((form) => Number(form.value) === formId);

	const formOptions = [
		{
			label: __('— Select a form —', 'dekode-fundraising'),
			value: '0',
			disabled: true,
		},
		...(forms ?? []),
	];

	if (isStale) {
		formOptions.push({
			label: sprintf(
				/* translators: %d: saved form ID. */
				__('Form ID %d (missing)', 'dekode-fundraising'),
				formId,
			),
			value: String(formId),
		});
	}

	/**
	 * Repeater handlers
	 */
	const addParam = () => {
		setAttributes({
			urlParams: [...urlParams, { key: '', value: '' }],
		});
	};

	const updateParam = (index, field, newValue) => {
		const updated = urlParams.map((item, i) =>
			i === index ? { ...item, [field]: newValue } : item,
		);
		setAttributes({ urlParams: updated });
	};

	const removeParam = (index) => {
		rowIds.current = rowIds.current.filter((_, i) => i !== index);
		const updated = urlParams.filter((_, i) => i !== index);
		setAttributes({ urlParams: updated });
	};

	const formSelect = (
		<>
			<SelectControl
				label={__('Select a Form', 'dekode-fundraising')}
				value={String(formId)}
				options={formOptions}
				onChange={(value) =>
					setAttributes({ formId: parseInt(value, 10) })
				}
				__nextHasNoMarginBottom
				__next40pxDefaultSize
			/>

			{!isLoaded && !error && (
				<Flex justify="flex-start">
					<Spinner />
					<span>{__('Loading forms…', 'dekode-fundraising')}</span>
				</Flex>
			)}

			{isLoaded && !hasForms && (
				<Notice status="warning" isDismissible={false}>
					{__(
						'No forms found. Please create a Form on your Dekode Fundraising account first.',
						'dekode-fundraising',
					)}
				</Notice>
			)}

			{isStale && (
				<Notice status="warning" isDismissible={false}>
					{sprintf(
						/* translators: %d: saved form ID. */
						__(
							'The selected form (ID %d) no longer exists in your Fundy account. Please choose another form.',
							'dekode-fundraising',
						),
						formId,
					)}
				</Notice>
			)}

			{error && (
				<Notice status="error" isDismissible={false}>
					{sprintf(
						/* translators: %s: error message. */
						__('Could not load forms: %s', 'dekode-fundraising'),
						error,
					)}
				</Notice>
			)}
		</>
	);

	const controls = (
		<InspectorControls>
			<PanelBody title={__('Form settings', 'dekode-fundraising')}>
				{formSelect}
				<fieldset className="fundy-form-params">
					<legend>
						{__(
							'Default URL Parameters (Optional)',
							'dekode-fundraising',
						)}
					</legend>

					<div style={{ marginTop: '1em' }}>
						{urlParams.map((param, index) => (
							<Flex key={rowIds.current[index]} align="flex-end">
								<FlexBlock>
									<TextControl
										label={__('Key', 'dekode-fundraising')}
										value={param.key}
										onChange={(val) =>
											updateParam(index, 'key', val)
										}
										__nextHasNoMarginBottom
										__next40pxDefaultSize
									/>
								</FlexBlock>
								<FlexBlock>
									<TextControl
										label={__(
											'Value',
											'dekode-fundraising',
										)}
										value={param.value}
										onChange={(val) =>
											updateParam(index, 'value', val)
										}
										__nextHasNoMarginBottom
										__next40pxDefaultSize
									/>
								</FlexBlock>
								<FlexItem>
									<Button
										isDestructive
										icon="trash"
										size="compact"
										onClick={() => removeParam(index)}
										label={
											param.key
												? sprintf(
														/* translators: %s: parameter key. */
														__(
															'Remove parameter "%s"',
															'dekode-fundraising',
														),
														param.key,
													)
												: sprintf(
														/* translators: %d: row number. */
														__(
															'Remove parameter %d',
															'dekode-fundraising',
														),
														index + 1,
													)
										}
									/>
								</FlexItem>
							</Flex>
						))}
						<Button variant="link" onClick={addParam}>
							{__('Add Parameter', 'dekode-fundraising')}
						</Button>
					</div>
				</fieldset>
			</PanelBody>
		</InspectorControls>
	);

	if (!formId) {
		return (
			<>
				{controls}
				<div {...blockProps} aria-busy={!isLoaded && !error}>
					<Placeholder
						label={__('Fundy Form', 'dekode-fundraising')}
						instructions={__(
							'Select the form to display. More settings are available in the block sidebar.',
							'dekode-fundraising',
						)}
						isColumnLayout
					>
						{formSelect}
					</Placeholder>
				</div>
			</>
		);
	}

	return (
		<>
			{controls}
			<div {...blockProps}>
				{isStale ? (
					<Notice status="warning" isDismissible={false}>
						{sprintf(
							/* translators: %d: saved form ID. */
							__(
								'The selected form (ID %d) no longer exists in your Fundy account. Please choose another form.',
								'dekode-fundraising',
							),
							formId,
						)}
					</Notice>
				) : (
					<FormPreview
						formId={formId}
						coreUrl={coreUrl}
						theme={resolveTheme(attributes)}
						variations={extractVariations(attributes)}
						paramsJson={previewParamsJson}
					/>
				)}
			</div>
		</>
	);
}
