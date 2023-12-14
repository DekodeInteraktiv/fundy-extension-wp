/**
 * WordPress dependencies
 */
import api from '@wordpress/api';
import apiFetch from '@wordpress/api-fetch';
import {
	useBlockProps,
} from '@wordpress/block-editor';
import { useReducer, useEffect } from '@wordpress/element';
import { TextControl, TextareaControl, ComboboxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Render the content generation block.
 */
export default function Edit({
	attributes,
	setAttributes,
	className,
	clientId,
}) {
	const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
		isLoaded: false,
		apiToken: false,
		baseURL: false,
		forms: false,
		formId: false,
	});

	const {
		isLoaded,
		apiToken,
		baseURL,
		forms,
		formId,
	} = state;

	const {
		title,
		description,
	} = attributes;

	useEffect(() => {
		api.loadPromise.then( () => {
			const settings = new api.models.Settings();

			if (false === isLoaded) {
				settings.fetch().then((response) => {
					setState({
						apiToken: response.donations_option_token ?? '',
						baseURL: window.donationsSettings.baseURL ?? '',
						isLoaded: true,
					});
				});
			}
		} );
	}, [isLoaded]);

	useEffect(() => {
		if (baseURL && apiToken) {
			fetch(baseURL + '/api/v1/organization/forms', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + apiToken,
				},
			}).then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Network response was not ok.');
			}).then((data) => {
				let options = [];
				data.data.forEach((form) => {
					options.push({
						label: form.name,
						value: form.id,
					});
				});
				setState({ forms: options });
			}).catch((error) => {
				console.error('There has been a problem with your fetch operation:', error);
			});
		}
	}, [baseURL, apiToken])

	if (!baseURL) {
		return (
			<div {...useBlockProps()}>
				<div className={className}>
					<h2>{__('Please set an API Token on the plugin settings page.', 'donations')}</h2>
				</div>
			</div>
		);
	}

	return (
		<div {...useBlockProps()}>
			<div className={className}>
				{ !isLoaded &&
					<>
						<p>{__('Loading forms...', 'donations')}</p>
					</>
				}

				{ forms &&
					<ComboboxControl
						label={__("Select a form", "donations")}
						value={formId}
						options={forms}
						onChange={(value) => setState({ formId: value })}
					/>
				}

				<TextControl
					label={__("Title", "donations")}
					value={title}
					onChange={(title) => setAttributes({ title })}
				/>

				<TextareaControl
					label={__("Description", "donations")}
					value={description}
					onChange={(description) => setAttributes({ description })}
				/>
			</div>
		</div>
	);
}
