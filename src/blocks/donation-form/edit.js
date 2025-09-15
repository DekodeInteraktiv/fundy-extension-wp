/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { useReducer, useEffect } from '@wordpress/element';
import {
	Button,
	Flex,
	FlexBlock,
	FlexItem,
	Placeholder,
	SelectControl,
	TextControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Render the content generation block.
 */
export default function Edit({
	attributes: { formId, urlParams = [] },
	setAttributes,
}) {
	const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
		isInitialized: false,
		isLoaded: false,
		apiToken: window.fundySettings.apiToken ?? '',
		baseURL: window.fundySettings.baseURL ?? '',
		forms: false,
		error: null,
	});

	const { isInitialized, isLoaded, apiToken, baseURL, forms, error } = state;

	// Initialize
	useEffect(() => {
		if (false === isInitialized && apiToken && baseURL) {
			setState({ isInitialized: true });
		}
	}, [isInitialized, apiToken, baseURL]);

	// Fetch forms
	useEffect(() => {
		if (baseURL && apiToken) {
			fetch(`${baseURL}/api/v1/organization/forms`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + apiToken,
				},
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error('Network response was not ok.');
					}
					return response.json();
				})
				.then((data) => {
					const options = data.map((form) => ({
						value: form.id,
						label: form.name,
					}));

					setState({
						isLoaded: true,
						forms: options,
						error: null,
					});

					// If no form is saved, set first form as selected.
					if (!formId && options.length) {
						setAttributes({
							formId: parseInt(options[0].value, 10),
						});
					}
				})
				.catch((err) => {
					setState({
						error:
							'There has been a problem with your fetch operation: ' +
							err,
					});
				});
		}
	}, [baseURL, apiToken, formId, setAttributes]);

	/* eslint-disable react-hooks/rules-of-hooks */
	if (!apiToken) {
		return (
			<div {...useBlockProps()}>
				<Placeholder
					instructions={__(
						'Please set an API Token on the plugin settings page.',
						'dekode-fundraising',
					)}
				/>
			</div>
		);
	}

	const hasForms = forms && forms.length > 0;

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
		const updated = urlParams.filter((_, i) => i !== index);
		setAttributes({ urlParams: updated });
	};

	return (
		<div {...useBlockProps()}>
			<Placeholder label={__('Dekode Fundraising Form', 'dekode-fundraising')} isColumnLayout>
				<SelectControl
					label={__('Select a Form', 'dekode-fundraising')}
					value={formId}
					className="fundy-form"
					options={forms || [{ label: '', value: '' }]}
					onChange={(value) =>
						setAttributes({ formId: parseInt(value, 10) })
					}
					disabled={!isLoaded}
				/>

				{!hasForms && (
					<p>
						{__(
							'No forms found. Please create a Form on your Dekode Fundraising account first.',
							'dekode-fundraising',
						)}
					</p>
				)}

				{!isLoaded && <p>{__('Loading…', 'dekode-fundraising')}</p>}
				{error && <p>{'Error: ' + error}</p>}

				<div className="fundy-form-params">
					<h4>{__('Default URL Parameters (Optional)', 'dekode-fundraising')}</h4>

					<div style={{ marginTop: '1em' }}>
						{urlParams.map((param, index) => (
							<Flex key={`param-${index}`}>
								<FlexBlock>
									<TextControl
										label={__('Key', 'dekode-fundraising')}
										value={param.key}
										onChange={(val) =>
											updateParam(index, 'key', val)
										}
									/>
								</FlexBlock>
								<FlexBlock>
									<TextControl
										label={__('Value', 'dekode-fundraising')}
										value={param.value}
										onChange={(val) =>
											updateParam(index, 'value', val)
										}
									/>
								</FlexBlock>
								<FlexItem>
									<Button
										isDestructive
										onClick={() => removeParam(index)}
										style={{ marginTop: '14px' }}
									>
										{__('Remove', 'dekode-fundraising')}
									</Button>
								</FlexItem>
							</Flex>
						))}
						<Button variant="link" onClick={addParam}>
							{__('Add Parameter', 'dekode-fundraising')}
						</Button>
					</div>
				</div>
			</Placeholder>
		</div>
	);
	/* eslint-enable react-hooks/rules-of-hooks */
}
