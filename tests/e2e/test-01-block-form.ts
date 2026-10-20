import { test, expect } from '@wordpress/e2e-test-utils-playwright';
import { mockAjaxRequests, mockFormsRuntime } from './utils/mock';

test.describe('Donation form block', () => {
	test.beforeEach(async ({ admin, editor, page }) => {
		await mockAjaxRequests(page);
		await mockFormsRuntime(page);
		await admin.createNewPost();
	});

	test('Is registered correctly', async ({ editor, page }) => {
		await editor.insertBlock({ name: 'fundy/donation-form' });

		// No auto-select: inserting the block must not commit a form choice.
		expect(await editor.getEditedPostContent()).toBe(
			'<!-- wp:fundy/donation-form /-->',
		);
	});

	test('Can be added by using "/donation" shortcut', async ({
		editor,
		page,
	}) => {
		await editor.canvas
			.locator('role=button[name="Add default block"i]')
			.click();
		await page.keyboard.type('/donation');
		// Select the block by name — the autocompleter's result order is not
		// part of the contract.
		await page.getByRole('option', { name: 'Fundy Form' }).click();
		expect(await editor.getEditedPostContent()).toBe(
			'<!-- wp:fundy/donation-form /-->',
		);
	});

	test('Allows selecting a specific form', async ({ editor, page }) => {
		await editor.insertBlock({ name: 'fundy/donation-form' });

		const formSelector = editor.canvas.getByLabel('Select a Form');
		await expect(formSelector).toBeVisible();
		await formSelector.selectOption('Test - basic-all-positives');

		expect(await editor.getEditedPostContent()).toBe(
			'<!-- wp:fundy/donation-form {"formId":100} /-->',
		);
	});

	test('Allows setting extra parameters', async ({ editor, page }) => {
		await editor.insertBlock({ name: 'fundy/donation-form' });

		const formSelector = editor.canvas.getByLabel('Select a Form');
		await formSelector.selectOption('Test - basic-all-positives');

		await editor.openDocumentSettingsSidebar();
		const sidebar = page.getByRole('region', { name: 'Editor settings' });

		const button = sidebar.getByRole('button', {
			name: 'Add Parameter',
		});
		await expect(button).toBeVisible();
		await button.click();

		const keyField = sidebar.getByRole('textbox', { name: 'Key' });
		const valueField = sidebar.getByRole('textbox', {
			name: 'Value',
		});
		await expect(keyField).toBeVisible();
		await expect(valueField).toBeVisible();

		await keyField.fill('parameter_key');
		await valueField.fill('parameter_value');

		expect(await editor.getEditedPostContent()).toBe(
			'<!-- wp:fundy/donation-form {"formId":100,"urlParams":[{"key":"parameter_key","value":"parameter_value"}]} /-->',
		);
	});

	test('Moves the settings to the sidebar', async ({ editor, page }) => {
		await editor.insertBlock({ name: 'fundy/donation-form' });
		await editor.canvas
			.getByLabel('Select a Form')
			.selectOption('Test - basic-all-positives');

		// Once a form is chosen the canvas shows the preview, not the
		// settings.
		await expect(editor.canvas.getByLabel('Select a Form')).toHaveCount(0);

		await editor.openDocumentSettingsSidebar();
		const sidebar = page.getByRole('region', { name: 'Editor settings' });
		const sidebarSelector = sidebar.getByLabel('Select a Form');

		await expect(sidebarSelector).toHaveValue('100');
		await sidebarSelector.selectOption('Test - basic-all-negatives');

		expect(await editor.getEditedPostContent()).toBe(
			'<!-- wp:fundy/donation-form {"formId":101} /-->',
		);
	});

	test('Previews the selected form in the editor', async ({ editor }) => {
		await editor.insertBlock({ name: 'fundy/donation-form' });
		await editor.canvas
			.getByLabel('Select a Form')
			.selectOption('Test - basic-all-positives');

		const container = editor.canvas.locator(
			'.fundy-form-preview .fundraising-form',
		);

		await expect(container).toHaveText('Stub form 100');
		await expect(container).toHaveAttribute('data-disable-events', 'true');

		const [formId, coreUrl, index, params] = JSON.parse(
			(await container.getAttribute('data-init-args')) ?? '[]',
		);

		expect(formId).toBe(100);
		expect(coreUrl).toMatch(/^https?:\/\//);
		expect(index).toBe(0);
		expect(params).toBe('{}');
	});

	test('Renders the form markup on the frontend', async ({
		editor,
		page,
	}) => {
		await editor.insertBlock({ name: 'fundy/donation-form' });

		const formSelector = editor.canvas.getByLabel('Select a Form');
		await formSelector.selectOption('Test - basic-all-positives');
		await editor.publishPost();

		const postId = page.url().match(/post=(\d+)/)[1];
		const frontendUrl = `http://localhost:8889/?p=${postId}`;

		await test.step(`Navigating to frontend URL: ${frontendUrl}`, async () => {
			await page.goto(frontendUrl, { timeout: 5000 });
		});

		const form = page.locator('.fundraising-form[data-form-id="100"]');
		await expect(form).toBeVisible();
	});
});
