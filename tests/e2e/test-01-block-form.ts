import { test, expect } from '@wordpress/e2e-test-utils-playwright';

test.describe('Donation form block', () => {
	test.beforeEach(async ({ admin, editor, page }) => {
		await admin.createNewPost();
	});

	test('Is registered correctly', async ({ editor, page }) => {
		await editor.insertBlock({ name: 'fundy/donation-form' });

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
		await page.waitForTimeout(250);
		await page.keyboard.press('Enter');
		expect(await editor.getEditedPostContent()).toBe(
			'<!-- wp:fundy/donation-form /-->',
		);
	});

	test('Allows selecting a specific form', async ({ editor, page }) => {
		await editor.insertBlock({ name: 'fundy/donation-form' });

		const formSelector = editor.canvas.getByLabel('Select a Form');
		await expect(formSelector).toBeVisible();
		await formSelector.selectOption('Test - symbolic-all-positives');

		expect(await editor.getEditedPostContent()).toBe(
			'<!-- wp:fundy/donation-form {"formId":110} /-->',
		);
	});

	test('Allows setting extra parameters', async ({ editor, page }) => {
		await editor.insertBlock({ name: 'fundy/donation-form' });

		const formSelector = editor.canvas.getByLabel('Select a Form');
		await formSelector.selectOption('Test - symbolic-all-positives');

		const button = editor.canvas.getByRole('button', {
			name: 'Add Parameter',
		});
		await expect(button).toBeVisible();
		await button.click();

		const keyField = editor.canvas.getByRole('textbox', { name: 'Key' });
		const valueField = editor.canvas.getByRole('textbox', {
			name: 'Value',
		});
		await expect(keyField).toBeVisible();
		await expect(valueField).toBeVisible();

		await keyField.fill('parameter_key');
		await valueField.fill('parameter_value');

		expect(await editor.getEditedPostContent()).toBe(
			'<!-- wp:fundy/donation-form {"formId":110,"urlParams":[{"key":"parameter_key","value":"parameter_value"}]} /-->',
		);
	});

	test('Renders the form markup on the frontend', async ({
		editor,
		page,
	}) => {
		await editor.insertBlock({ name: 'fundy/donation-form' });

		const formSelector = editor.canvas.getByLabel('Select a Form');
		await formSelector.selectOption('Test - symbolic-all-positives');
		await editor.publishPost();

		const postId = page.url().match(/post=(\d+)/)[1];
		const frontendUrl = `http://localhost:8889/?p=${postId}`;

		await test.step(`Navigating to frontend URL: ${frontendUrl}`, async () => {
			await page.goto(frontendUrl, { timeout: 5000 });
		});

		const form = page.locator('.fundraising-form[data-form-id="110"]');
		await expect(form).toBeVisible();
	});
});
