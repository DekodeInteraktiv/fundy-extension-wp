/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import {
	useBlockProps,
} from '@wordpress/block-editor';
import { useReducer } from '@wordpress/element';
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
	});

	const {
		forms,
	} = state;

	return (
		<div {...useBlockProps()}>
			<div className={className}>
				TODO: Show form dropdown.
			</div>
		</div>
	);
}
