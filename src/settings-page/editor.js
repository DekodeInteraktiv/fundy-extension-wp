/**
 * External dependencies
 */
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { createRoot } from 'react-dom/client';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, Icon, TextControl, PanelBody } from '@wordpress/components';
import { Fragment, useEffect, useReducer } from '@wordpress/element';
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
			<div className="fundy__header">
				<div className="fundy__container">
					<div className="fundy__title">
						<h1>
							{__('Fundy Settings', 'fundy')}{' '}
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
						label={__('Fundy API Token', 'fundy')}
						onChange={(value) => setState({ apiToken: value })}
						value={apiToken}
					/>
				</PanelBody>
			</div>
			<div className="fundy__save">
				<Button
					variant="primary"
					onClick={() => {
						const settings = new api.models.Settings({
							fundraising_option_token: apiToken,
						});

						settings.save();

						dispatch('core/notices').createNotice(
							'success',
							__('Settings Saved', 'fundy'),
							{
								type: 'snackbar',
								isDismissible: true,
							},
						);
					}}
				>
					{__('Save', 'fundy')}
				</Button>
			</div>
			<div className="fundy__notices">
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
