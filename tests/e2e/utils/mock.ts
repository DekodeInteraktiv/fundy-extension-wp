import { type Page } from '@playwright/test';

async function mockAjaxRequests(page: Page) {
	// Match both permalink styles for the plugin's forms REST proxy:
	// /wp-json/fundy/v1/forms and ?rest_route=/fundy/v1/forms.
	await page.route(
		(url) =>
			url.pathname.includes('/fundy/v1/forms') ||
			// apiFetch URL-encodes rest_route (%2Ffundy%2Fv1%2Fforms).
			decodeURIComponent(url.search).includes('fundy/v1/forms'),
		async (route) => {
			await route.fulfill({
				status: 200,
				contentType: 'application/json',
				json: [
					{
						id: 100,
						name: 'Test - basic-all-positives',
					},
					{
						id: 101,
						name: 'Test - basic-all-negatives',
					},
				],
			});
		},
	);
}

/**
 * Replace the CDN forms bundle with a stub that records the initForm()
 * arguments on the container, so editor-preview tests don't depend on the
 * real runtime or the Fundy API.
 */
async function mockFormsRuntime(page: Page) {
	await page.route(/assets\.fundy\.cloud\/fundy-forms\.[a-z]+\.js/, (route) =>
		route.fulfill({
			status: 200,
			contentType: 'application/javascript',
			body: `
				window.Fundy = {
					initForm(el, formId, coreUrl, index, params) {
						el.setAttribute('data-init-args', JSON.stringify([formId, coreUrl, index, params]));
						el.textContent = 'Stub form ' + formId;
					},
					destroyForm(el) {
						el.removeAttribute('data-init-args');
						el.textContent = '';
					},
				};
				document.addEventListener('DOMContentLoaded', () =>
					document.dispatchEvent(new CustomEvent('fundy.loaded'))
				);
			`,
		}),
	);
}

export { mockAjaxRequests, mockFormsRuntime };
