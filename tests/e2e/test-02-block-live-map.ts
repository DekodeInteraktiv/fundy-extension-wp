import { test, expect } from '@wordpress/e2e-test-utils-playwright';

test.describe('Live map block', () => {
	test.beforeEach(async ({ admin }) => {
		await admin.createNewPost();
	});

	test('Is registered correctly', async ({ editor }) => {
		await editor.insertBlock({ name: 'fundy/live-map' });

		expect(await editor.getEditedPostContent()).toBe(
			'<!-- wp:fundy/live-map /-->',
		);
	});

	test('Can be added by using "/live map" shortcut', async ({
		editor,
		page,
	}) => {
		await editor.canvas
			.locator('role=button[name="Add default block"i]')
			.click();
		await page.keyboard.type('/live map');
		await page.getByRole('option', { name: 'Fundy Live Map' }).click();

		expect(await editor.getEditedPostContent()).toBe(
			'<!-- wp:fundy/live-map /-->',
		);
	});

	test('Explains that the API key connects the map', async ({ editor }) => {
		// The test site has no API key saved, so the block cannot know the
		// organization yet and must say so instead of framing nothing.
		await editor.insertBlock({ name: 'fundy/live-map' });

		await expect(
			editor.canvas.getByText(
				'Save your API key on the plugin settings page to connect the map to your organization.',
			),
		).toBeVisible();
	});

	test('Stores the chosen options as attributes', async ({
		editor,
		page,
	}) => {
		await editor.insertBlock({ name: 'fundy/live-map' });
		await editor.openDocumentSettingsSidebar();

		await page
			.getByRole('combobox', { name: 'View' })
			.selectOption('world');
		await page
			.getByRole('combobox', { name: 'Time window' })
			.selectOption('hour');
		await page.getByRole('checkbox', { name: 'Show counters' }).uncheck();

		expect(await editor.getEditedPostContent()).toBe(
			'<!-- wp:fundy/live-map {"view":"world","showCounters":false,"window":"hour"} /-->',
		);
	});
});
