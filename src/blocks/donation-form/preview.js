/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';

/**
 * Mirror of sanitize_form_url_params(): keys must match
 * [A-Za-z0-9_-]{1,64}, values are capped at 500 characters.
 *
 * @param {Array<{key: string, value: string}>} urlParams Block urlParams attribute.
 * @return {Object<string, string>} The sanitized parameters.
 */
export function sanitizeUrlParams(urlParams = []) {
	const sanitized = {};

	urlParams.forEach((param) => {
		const key = typeof param?.key === 'string' ? param.key : '';
		const value = param?.value ?? '';

		if (!/^[A-Za-z0-9_-]{1,64}$/.test(key) || typeof value === 'object') {
			return;
		}

		sanitized[key] = Array.from(String(value)).slice(0, 500).join('');
	});

	return sanitized;
}

/**
 * Mirror of extract_variations() in block.php: `is-style-<name>` classes
 * become `<name>`, background colours become `background-color-<name>`.
 *
 * @param {Object} attributes Block attributes.
 * @return {string[]} Variation names.
 */
export function extractVariations(attributes) {
	const className = String(attributes.className ?? '');
	const variations = [];

	const patterns = [
		[/(?:^|\s)is-style-([A-Za-z0-9_-]+)(?=\s|$)/g, ''],
		[
			/(?:^|\s)has-([A-Za-z0-9_-]+)-background-color(?=\s|$)/g,
			'background-color-',
		],
	];

	patterns.forEach(([pattern, prefix]) => {
		for (const match of className.matchAll(pattern)) {
			variations.push(prefix + match[1]);
		}
	});

	if (attributes.backgroundColor) {
		variations.push('background-color-' + attributes.backgroundColor);
	}

	/**
	 * Filter the variation names emitted as data-variation on the previewed
	 * form container. JS counterpart of `fundy/donation_form/variations`.
	 *
	 * @param {string[]} variations Variation names resolved from className.
	 * @param {Object}   attributes Block attributes.
	 */
	const filtered = applyFilters(
		'fundy.donationForm.variations',
		[...new Set(variations)],
		attributes,
	);

	return Array.isArray(filtered)
		? filtered.filter((variation) => typeof variation === 'string')
		: [];
}

/**
 * Mirror of resolve_container_theme(): the site setting, then the filter,
 * re-sanitized to the theme slug shape.
 *
 * @param {Object} attributes Block attributes.
 * @return {string} Theme name, '' when none.
 */
export function resolveTheme(attributes) {
	/**
	 * Filter the theme name emitted as data-theme on the previewed form
	 * container. JS counterpart of `fundy/donation_form/theme`.
	 *
	 * @param {string} theme      Theme name from the site setting ('' when none).
	 * @param {Object} attributes Block attributes.
	 */
	const theme = applyFilters(
		'fundy.donationForm.theme',
		window.fundySettings?.theme ?? '',
		attributes,
	);

	if (typeof theme !== 'string') {
		return '';
	}

	const trimmed = theme.trim();

	return /^[a-zA-Z0-9-]{1,50}$/.test(trimmed) ? trimmed : '';
}

/**
 * The forms runtime of the document `element` lives in.
 *
 * The editor canvas is an iframe and the bundle is enqueued inside it (see
 * enqueue_editor_preview_assets()), so the parent window's Fundy - if any -
 * would render with the wrong document. Readiness also waits for the DOM to
 * finish loading, after which the runtime's own `.fundraising-form` sweep
 * has already run and won't double-mount the preview container.
 *
 * @param {?HTMLElement} element Element inside the canvas.
 * @return {?Object} The Fundy object, or null until it is ready.
 */
function useFundyRuntime(element) {
	const [runtime, setRuntime] = useState(null);

	useEffect(() => {
		const doc = element?.ownerDocument;
		const view = doc?.defaultView;

		if (!view) {
			return undefined;
		}

		const check = () => {
			if (
				typeof view.Fundy?.initForm === 'function' &&
				doc.readyState !== 'loading'
			) {
				setRuntime(view.Fundy);
				return true;
			}

			return false;
		};

		if (check()) {
			return undefined;
		}

		doc.addEventListener('fundy.loaded', check);
		view.addEventListener('load', check);

		return () => {
			doc.removeEventListener('fundy.loaded', check);
			view.removeEventListener('load', check);
		};
	}, [element]);

	return runtime;
}

/**
 * Static preview of a Fundy form in the editor canvas.
 *
 * initForm() takes ownership of the DOM inside its target, so React only
 * manages the wrapper: each run hands Fundy a fresh, plain container and the
 * cleanup destroys that form before the next run. The wrapper must not be the
 * block element itself - the runtime reuses a `wp-block-fundy-donation-form`
 * parent as its shadow host, which would put React's node under its control.
 *
 * @param {Object}   props            Component props.
 * @param {number}   props.formId     Form ID.
 * @param {string}   props.coreUrl    Fundy core base URL.
 * @param {string}   props.theme      Resolved theme name.
 * @param {string[]} props.variations Resolved variation names.
 * @param {string}   props.paramsJson JSON-encoded URL parameters.
 */
export default function FormPreview({
	formId,
	coreUrl,
	theme,
	variations,
	paramsJson,
}) {
	// A callback ref (via useState) so the effect re-runs once the wrapper
	// is attached.
	const [wrapper, setWrapper] = useState(null);
	const runtime = useFundyRuntime(wrapper);
	const variationsKey = variations.join(',');

	useEffect(() => {
		if (!runtime || !wrapper || !formId) {
			return undefined;
		}

		const container = wrapper.ownerDocument.createElement('div');
		container.className = 'fundy-form fundraising-form';
		container.setAttribute('data-disable-events', 'true');

		if (theme) {
			container.setAttribute('data-theme', theme);
		}

		if (variationsKey) {
			container.setAttribute('data-variation', variationsKey);
		}

		// Static preview: keep keyboard focus out of the form's fields.
		wrapper.setAttribute('inert', '');
		wrapper.appendChild(container);

		runtime.initForm(container, formId, coreUrl, 0, paramsJson);

		return () => {
			if (typeof runtime.destroyForm === 'function') {
				runtime.destroyForm(container);
			}

			wrapper.replaceChildren();
		};
	}, [runtime, wrapper, formId, coreUrl, theme, variationsKey, paramsJson]);

	return (
		<div
			ref={setWrapper}
			className="fundy-form-preview"
			style={{ pointerEvents: 'none', minHeight: '3em' }}
		/>
	);
}
