/**
 * WordPress dependencies
 */
import api from '@wordpress/api';
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
		apiToken: false,
		baseURL: false,
		forms: false,
		error: null,
	});

	const { isInitialized, isLoaded, apiToken, baseURL, forms, error } = state;

	useEffect(() => {
		api.loadPromise.then(() => {
			const settings = new api.models.Settings();

			if (false === isInitialized) {
				settings
					.fetch()
					.then((response) => {
						setState({
							apiToken: response.fundraising_option_token ?? '',
							baseURL: window.fundraisingSettings.baseURL ?? '',
							isInitialized: true,
						});
					})
					.catch(() => {
						setState({
							error: 'Sorry, there has been a problem fetching credentials.',
						});
					});
			}
		});
	}, [isInitialized]);

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
				})
				.catch((err) => {
					setState({
						error:
							'There has been a problem with your fetch operation: ' +
							err,
					});
				});
		}
	}, [baseURL, apiToken]);

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
				label={__('Fundraising form', 'fundraising')}
				isColumnLayout
			>
				<SelectControl
					label={__('Select a form', 'fundraising')}
					value={formId}
					className="fundraising-form"
					options={forms ? forms : [{ label: '', value: '' }]}
					onChange={(value) =>
						setAttributes({ formId: parseInt(value) })
					}
					disabled={!isLoaded}
				/>

				{!isLoaded && <p>{__('Loading…', 'fundraising')}</p>}

				{error && <p>{'Error: ' + error}</p>}
			</Placeholder>
		</div>
	);
	/* eslint-enable react-hooks/rules-of-hooks */
}
