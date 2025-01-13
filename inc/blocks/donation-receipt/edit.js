/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Render the content generation block.
 */
export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<table>
				<tbody>
					<tr>
						<td>{__('Name', 'fundy')}</td>
						<td>John Smith</td>
					</tr>
					<tr>
						<td>{__('Date', 'fundy')}</td>
						<td>name@email.no</td>
					</tr>
					<tr>
						<td>{__('Total amount', 'fundy')}</td>
						<td>400 kr</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
