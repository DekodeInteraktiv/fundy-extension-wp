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
} from '@wordpress/components';

import {
	Fragment,
	render,
} from '@wordpress/element';

import { dispatch } from '@wordpress/data';

import api from '@wordpress/api';

import Notices from './components/Notices';

import './style.css';

function Settings() {
	const [ state, setState ] = useReducer(
		( s, a ) => ({ ...s, ...a }),
		{
			url: '',
			key: '',
		}
	);

	const {
		url,
		key,
	} = state;

	useEffect( () => {
		api.loadPromise.then( () => {
			const settings = new api.models.Settings();

			if ( isLoaded === false ) {
				settings.fetch().then( ( response ) => {
					setState( {
						key: response[ 'donations_option_key' ] ?? '',
						url: response[ 'donations_option_url' ] ?? '',
						isLoaded: true,
					} );
				} );
			}
		} );
	}, [] );

	return (
		<Fragment>
			<div className="donations__header">
				<div className="donations__container">
					<div className="donations__title">
						<h1>{ __( 'Donations Settings', 'donations' ) } <Icon icon="admin-plugins" /></h1>
					</div>
				</div>
			</div>
			<div className="donations__main">
				<div className="components-panel">
					<div className="components-panel__body is-opened">
						<h2 className="components-panel__body-title">{ __( 'General', 'donations' ) }</h2>
						<p>The plugin requires an external Fundy server to work, please provide the details below.</p>
						<TextControl
							help={ __( 'The URL to your Fundy server.', 'donations' ) }
							label={ __( 'Fundy Backend URL', 'donations' ) }
							onChange={ ( value ) => setState( { url: value } ) }
							value={ url }
						/>
						<TextControl
							help={ __( 'The API key for your Fundy server.', 'donations' ) }
							label={ __( 'Fundy API Key', 'donations' ) }
							onChange={ ( value ) => setState( { key: value } ) }
							value={ key }
						/>
					</div>
				</div>
			</div>
			<div className="donations__save">
				<Button
					isPrimary
					onClick={ () => {
						const settings = new api.models.Settings( {
							[ 'donations_option_key' ]: key,
							[ 'donations_option_url' ]: url,
						} );

						settings.save();

						dispatch( 'core/notices' ).createNotice(
							'success',
							__( 'Settings Saved', 'donations' ),
							{
								type: 'snackbar',
								isDismissible: true,
							}
						);
					} }
				>{ __( 'Save', 'donations' ) }</Button>
			</div>
			<div className="donations__notices">
				<Notices />
			</div>
		</Fragment>
	);
}

document.addEventListener( 'DOMContentLoaded', () => {
	console.log('WAZOO');
	const elem = document.getElementById( 'donations-plugin-settings' );

	if ( elem ) {
		render(
			<Settings />,
			elem
		);
	}
} );
