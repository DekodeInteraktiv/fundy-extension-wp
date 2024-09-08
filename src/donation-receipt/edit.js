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
		template: 'default',
	});

	const { template } = state;

	return (
		<div {...useBlockProps()}>
			<Placeholder
				label={__('Fundy Receipt', 'fundy')}
				isColumnLayout
			>
				<table>
					<tbody>
						<tr>
							<td>Name</td>
							<td>John Smith</td>
						</tr>
						<tr>
							<td>Email</td>
							<td>name@email.no</td>
						</tr>
						<tr>
							<td>Phone</td>
							<td>12345678</td>
						</tr>
						<tr>
							<td>Address</td>
							<td>Karl Johans gate 16</td>
						</tr>
						<tr>
							<td>City</td>
							<td>Oslo</td>
						</tr>
						<tr>
							<td>Postcode</td>
							<td>0154</td>
						</tr>
					</tbody>
				</table>
			</Placeholder>
		</div>
	);
}
