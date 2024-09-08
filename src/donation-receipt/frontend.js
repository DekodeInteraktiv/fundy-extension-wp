/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
import { createRoot } from 'react-dom/client'; // eslint-disable-line import/no-extraneous-dependencies
import domReady from '@wordpress/dom-ready';

/**
 * Internal dependencies
 */
import Receipt from './components/Receipt';

/**
 * Render the donation receipt component.
 */
domReady(function () {
	const receiptBlocks = document.querySelectorAll('.fundy-receipt');

	receiptBlocks.forEach((block) => {
		createRoot(block).render(<Receipt />);
	});
});
