/**
 * External Imports.
 */
import React from 'react';

/**
 * Internal Imports.
 */
import {
	useDispatch,
	useSelect,
} from '@wordpress/data';

import { SnackbarList } from '@wordpress/components';

import { store as noticesStore } from '@wordpress/notices';

const Notices = () => {
	const notices = useSelect(
		( select ) =>
			select( noticesStore )
				.getNotices()
				.filter( ( notice ) => notice.type === 'snackbar' ),
		[]
	);

	const { removeNotice } = useDispatch( noticesStore );

	return (
		<SnackbarList
			className="edit-site-notices"
			notices={ notices }
			onRemove={ removeNotice }
		/>
	);
};

export default Notices;
