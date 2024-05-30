/**
 * WordPress dependencies
 */
import api from '@wordpress/api';
import {
	RichText,
	useBlockProps,
	BlockControls,
	HeadingLevelDropdown,
	useBlockEditingMode,
} from '@wordpress/block-editor';
import { useReducer, useEffect } from '@wordpress/element';
import { ComboboxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Render the content generation block.
 */
export default function Edit( { attributes, setAttributes, className } ) {
	const [ state, setState ] = useReducer( ( s, a ) => ( { ...s, ...a } ), {
		isInitialized: false,
		isLoaded: false,
		apiToken: false,
		baseURL: false,
		forms: false,
		error: null,
	} );

	const { isInitialized, isLoaded, apiToken, baseURL, forms, error } = state;

	const { formId, title, headingLevel, description } = attributes;

	const tagName = 'h' + headingLevel;

	const blockEditingMode = useBlockEditingMode();

	useEffect( () => {
		api.loadPromise.then( () => {
			const settings = new api.models.Settings();

			if ( false === isInitialized ) {
				settings
					.fetch()
					.then( ( response ) => {
						setState( {
							apiToken: response.fundraising_option_token ?? '',
							baseURL: window.fundraisingSettings.baseURL ?? '',
							isInitialized: true,
						} );
					} )
					.catch( () => {
						setState( {
							error: 'Sorry, there has been a problem fetching credentials.',
						} );
					} );
			}
		} );
	}, [ isInitialized ] );

	useEffect( () => {
		if ( baseURL && apiToken ) {
			fetch( baseURL + '/api/v1/organization/forms', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + apiToken,
				},
			} )
				.then( ( response ) => {
					if ( response.ok ) {
						return response.json();
					}
					throw new Error( 'Network response was not ok.' );
				} )
				.then( ( data ) => {
					const options = [];
					data.forEach( ( form ) => {
						options.push( {
							label: form.name,
							value: form.id,
						} );
					} );
					setState( {
						isLoaded: true,
						forms: options,
						error: null,
					} );
				} )
				.catch( ( err ) => {
					setState( {
						error:
							'There has been a problem with your fetch operation: ' +
							err,
					} );
				} );
		}
	}, [ baseURL, apiToken ] );

	/* eslint-disable react-hooks/rules-of-hooks */
	if ( ! apiToken ) {
		return (
			<div { ...useBlockProps() }>
				<p>
					{ __(
						'Please set an API Token on the plugin settings page.',
						'fundraising',
					) }
				</p>
			</div>
		);
	}

	return (
		<div { ...useBlockProps() }>
			{ blockEditingMode === 'default' && (
				<BlockControls group="block">
					<HeadingLevelDropdown
						value={ headingLevel }
						onChange={ ( value ) =>
							setAttributes( { headingLevel: value } )
						}
					/>
				</BlockControls>
			) }

			<>
				<RichText
					label={ __( 'Title', 'fundraising' ) }
					value={ title }
					className="fundraising-form-wrapper__title"
					onChange={ ( value ) => setAttributes( { title: value } ) }
					placeholder={ __( 'Title…', 'fundraising' ) }
					tagName={ tagName }
					disabled={ ! isLoaded }
					allowedFormats={ [ 'core/italic', 'core/bold' ] }
				/>

				<RichText
					label={ __( 'Description', 'fundraising' ) }
					value={ description }
					className="fundraising-form-wrapper__desc"
					onChange={ ( value ) =>
						setAttributes( { description: value } )
					}
					placeholder={ __( 'Description…', 'fundraising' ) }
					tagName="p"
					disabled={ ! isLoaded }
					allowedFormats={ [
						'core/italic',
						'core/bold',
						'core/strikethrough',
						'core/link',
					] }
				/>

				<ComboboxControl
					label={ __( 'Select a form', 'fundraising' ) }
					value={ formId }
					className="fundraising-form"
					options={ forms ? forms : [ { label: '', value: '' } ] }
					onChange={ ( value ) => setAttributes( { formId: value } ) }
					disabled={ ! isLoaded }
				/>

				{ ! isLoaded && <p>{ __( 'Loading…', 'fundraising' ) }</p> }

				{ error && <p>{ 'Error: ' + error }</p> }
			</>
		</div>
	);
	/* eslint-enable react-hooks/rules-of-hooks */
}
