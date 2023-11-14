/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import {
	useBlockProps,
} from '@wordpress/block-editor';
import { useReducer, useEffect } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';
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
		forms: false,
		formId: false,
	});

	const {
		forms,
		formId,
	} = state;

	useEffect(() => {
		fetch('http://localhost/api/v1/forms/?organization_id=2', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
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
	}, [''])

	return (
		<div {...useBlockProps()}>
			<div className={className}>
				<SelectControl
					label="Select a form"
					value={formId}
					options={forms}
					onChange={(value) => setState({ formId: value })}
				/>
			</div>
		</div>
	);
}
