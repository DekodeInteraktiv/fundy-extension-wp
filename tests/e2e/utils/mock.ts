async function mockAjaxRequests(page: Page) {
	await page.route('**/*/api/v1/organization/forms', async (route) => {
		await route.fulfill({
			status: 200,
			contentType: 'application/json',
			json: [
				{
					id: 100,
					created_at: '2025-05-28T13:07:52.000000Z',
					updated_at: '2025-05-28T13:07:52.000000Z',
					name: 'Test - basic-all-positives',
					is_active: 1,
					disabled_at: null,
					campaign_id: 1,
					locked_by: null,
					locked_at: null,
					public_id: 'a42f53h-3bc9-11f0-b3f9-3eca9b8s4d74',
				},
				{
					id: 101,
					created_at: '2025-05-28T13:07:52.000000Z',
					updated_at: '2025-05-28T13:07:52.000000Z',
					name: 'Test - basic-all-negatives',
					is_active: 1,
					disabled_at: null,
					campaign_id: 1,
					locked_by: null,
					locked_at: null,
					public_id: 'a42f82h-3bc9-11f0-b3f9-a9s5df46s8',
				},
			],
		});
	});
}

export { mockAjaxRequests };
