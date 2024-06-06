/**
 * External Imports.
 */
/**
 * External dependencies
 */
import React, { useEffect, useReducer } from 'react'; // eslint-disable-line import/no-extraneous-dependencies

/**
 * Internal Imports.
 */
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import { Button, Icon, TextControl, PanelBody } from '@wordpress/components';

import { Fragment, createRoot } from '@wordpress/element';

import { dispatch } from '@wordpress/data';
import domReady from '@wordpress/dom-ready';
import api from '@wordpress/api';

/**
 * Internal dependencies
 */
import Notices from './components/Notices';

function Settings() {
	const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
		isLoaded: false,
		apiToken: '',
	});

	const { isLoaded, apiToken } = state;

	useEffect(() => {
		api.loadPromise.then(() => {
			const settings = new api.models.Settings();

			if (false === isLoaded) {
				settings.fetch().then((response) => {
					setState({
						apiToken: response.fundraising_option_token ?? '',
						isLoaded: true,
					});
				});
			}
		});
	}, [isLoaded]);

	return (
		<Fragment>
			<div className="fundraising__header">
				<div className="fundraising__container">
					<div className="fundraising__title">
						<h1>
							{__('Fundraising Settings', 'fundraising')}{' '}
							<Icon icon="admin-plugins" />
						</h1>
					</div>
				</div>
			</div>
			<div className="components-panel">
				<PanelBody title="General">
					<p>
						The plugin must authenticate with the Fundy server to
						work, please provide the details below.
					</p>
					<TextControl
						help={__(
							'The API token for your Fundy organization.',
							'fundraising',
						)}
						label={__('Fundy API Token', 'fundraising')}
						onChange={(value) => setState({ apiToken: value })}
						value={apiToken}
					/>
				</PanelBody>
			</div>
			<div className="fundraising__save">
				<Button
					isPrimary
					onClick={() => {
						const settings = new api.models.Settings({
							fundraising_option_token: apiToken,
						});

						settings.save();

						dispatch('core/notices').createNotice(
							'success',
							__('Settings Saved', 'fundraising'),
							{
								type: 'snackbar',
								isDismissible: true,
							},
						);
					}}
				>
					{__('Save', 'fundraising')}
				</Button>
			</div>
			<div className="fundraising__notices">
				<Notices />
			</div>
		</Fragment>
	);
}

domReady(function () {
	const elem = document.getElementById('fundraising-plugin-settings');

	if (elem) {
		const root = createRoot(elem);
		root.render(<Settings />);
	}
});
