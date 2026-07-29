import { type Page } from '@playwright/test';

async function mockAjaxRequests(page: Page) {
	// Match both permalink styles for the plugin's forms REST proxy:
	// /wp-json/fundy/v1/forms and ?rest_route=/fundy/v1/forms.
	await page.route(
		(url) =>
			url.pathname.includes('/fundy/v1/forms') ||
			url.search.includes('fundy/v1/forms'),
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

export { mockAjaxRequests };
