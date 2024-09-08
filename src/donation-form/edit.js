/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { useReducer, useEffect } from '@wordpress/element';
import { SelectControl, Placeholder } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Render the content generation block.
 */
export default function Edit({ attributes: { formId }, setAttributes }) {
	const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
		isInitialized: false,
		isLoaded: false,
		apiToken: window.fundraisingSettings.apiToken ?? '',
		baseURL: window.fundraisingSettings.baseURL ?? '',
		forms: false,
		error: null,
	});

	const { isInitialized, isLoaded, apiToken, baseURL, forms, error } = state;

	useEffect(() => {
		if (false === isInitialized && apiToken && baseURL) {
			setState({
				isInitialized: true,
			});
		}
	}, [isInitialized, apiToken, baseURL]);

	useEffect(() => {
		if (baseURL && apiToken) {
			fetch(baseURL + '/api/v1/organization/forms', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + apiToken,
				},
			})
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
					throw new Error('Network response was not ok.');
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
					if (!formId) {
						setAttributes({ formId: parseInt(options[0].value) });
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
						'fundraising',
					)}
				></Placeholder>
			</div>
		);
	}

	return (
		<div {...useBlockProps()}>
			<Placeholder
				label={__('Fundy form', 'fundy')}
				isColumnLayout
			>
				<SelectControl
					label={__('Select a form', 'fundy')}
					value={formId}
					className="fundraising-form"
					options={forms ? forms : [{ label: '', value: '' }]}
					onChange={(value) =>
						setAttributes({ formId: parseInt(value) })
					}
					disabled={!isLoaded}
				/>

				{!isLoaded && <p>{__('Loading…', 'fundy')}</p>}

				{error && <p>{'Error: ' + error}</p>}
			</Placeholder>
		</div>
	);
	/* eslint-enable react-hooks/rules-of-hooks */
}
