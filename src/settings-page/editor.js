/**
 * External dependencies
 */
import React, { useEffect, useReducer } from 'react'; // eslint-disable-line import/no-extraneous-dependencies

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import {
	Button,
	Icon,
	TextControl,
	ToggleControl,
	PanelBody,
} from '@wordpress/components';

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
		developmentScript: 'false',
	});

	const { isLoaded, apiToken, developmentScript } = state;

	useEffect(() => {
		api.loadPromise.then(() => {
			const settings = new api.models.Settings();

			if (false === isLoaded) {
				settings.fetch().then((response) => {
					setState({
						apiToken: response.fundraising_option_token ?? '',
						developmentScript:
							response.fundraising_option_development_script ??
							'false',
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
							'fundy',
						)}
						label={__('Fundy API Token', 'fundy')}
						onChange={(value) => setState({ apiToken: value })}
						value={apiToken}
					/>
					<ToggleControl
						help={__(
							'Whether to use the development version of the form renderer script.',
							'fundy',
						)}
						label={__('Use Development Script?', 'fundy')}
						onChange={(value) =>
							setState({ developmentScript: value ? 'true' : 'false' })
						}
						checked={'true' === developmentScript ? true : false}
					/>
				</PanelBody>
			</div>
			<div className="fundy__save">
				<Button
					variant="primary"
					onClick={() => {
						const settings = new api.models.Settings({
							fundraising_option_token: apiToken,
							fundraising_option_development_script:
								developmentScript,
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
