/**
 * External Imports.
 */
import React, { useEffect, useReducer } from 'react';

/**
 * Internal Imports.
 */
import { __ } from '@wordpress/i18n';

import {
	Button,
	Icon,
	TextControl,
	PanelBody,
} from '@wordpress/components';

import {
	Fragment,
	createRoot,
} from '@wordpress/element';

import { dispatch } from '@wordpress/data';
import domReady from '@wordpress/dom-ready';
import api from '@wordpress/api';

import Notices from './components/Notices';

import './style.css';

function Settings() {
	const [ state, setState ] = useReducer(
		( s, a ) => ({ ...s, ...a }),
		{
			isLoaded: false,
			apiToken: '',
		}
	);

	const {
		isLoaded,
		apiToken,
	} = state;

	useEffect(() => {
		api.loadPromise.then(() => {
			const settings = new api.models.Settings();

			if (false === isLoaded) {
				settings.fetch().then((response) => {
					setState({
						apiToken: response.donations_option_token ?? '',
						isLoaded: true,
					});
				});
			}
		} );
	}, []);

	return (
		<Fragment>
			<div className="donations__header">
				<div className="donations__container">
					<div className="donations__title">
						<h1>{__('Donations Settings', 'donations')} <Icon icon="admin-plugins" /></h1>
					</div>
				</div>
			</div>
			<div className="components-panel">
				<PanelBody title="General">
					<p>The plugin must authenticate with the Fundy server to work, please provide the details below.</p>
					<TextControl
						help={__('The API token for your Fundy organization.', 'donations')}
						label={__('Fundy API Token', 'donations')}
						onChange={(value) => setState({ apiToken: value })}
						value={apiToken}
					/>
				</PanelBody>
			</div>
			<div className="donations__save">
				<Button
					isPrimary
					onClick={ () => {
						const settings = new api.models.Settings({
							donations_option_token: apiToken,
						});

						settings.save();

						dispatch('core/notices').createNotice(
							'success',
							__('Settings Saved', 'donations'),
							{
								type: 'snackbar',
								isDismissible: true,
							}
						);
					} }
				>{__('Save', 'donations')}</Button>
			</div>
			<div className="donations__notices">
				<Notices />
			</div>
		</Fragment>
	);
}

domReady(function () {
	const elem = document.getElementById('donations-plugin-settings');

	if (elem) {
		const root = createRoot(elem);
		root.render(<Settings />);
	}
});
