import { test, expect } from '@wordpress/e2e-test-utils-playwright';

test.describe('Settings page', () => {
	test('Settings page loads correctly', async ({ admin, page }) => {
		await admin.visitAdminPage(
			'options-general.php?page=fundy_settings_page',
		);

		await expect(
			page.getByRole('heading', { name: 'Fundy Settings' }),
		).toBeVisible();
	});

	test('Can edit and save API key', async ({ admin, page }) => {
		await admin.visitAdminPage(
			'options-general.php?page=fundy_settings_page',
		);

		const apiKeyInput = page.getByRole('textbox', {
			name: 'Enter your API key',
		});

		await expect(apiKeyInput).toBeVisible();

		await apiKeyInput.fill(
			'1|WFPx4T2FyzCowdjwIJNmHsk3DoffzwjRp4SWUWGZc5c0f850',
		);

		const saveButton = page.getByRole('button', { name: 'Save' });
		await expect(saveButton).toBeVisible();

		await saveButton.click();

		await expect(page.getByText('Settings saved.')).toBeVisible();

		await expect(apiKeyInput).toHaveValue(
			'1|WFPx4T2FyzCowdjwIJNmHsk3DoffzwjRp4SWUWGZc5c0f850',
		);
	});

	test('Can edit and save script environment', async ({ admin, page }) => {
		await admin.visitAdminPage(
			'options-general.php?page=fundy_settings_page',
		);

		const devRadio = page.getByText('Development');
		const prodRadio = page.getByText('Production');

		await expect(devRadio).toBeVisible();
		await expect(prodRadio).toBeVisible();

		await devRadio.click();
		await expect(devRadio).toBeChecked();
		await expect(prodRadio).not.toBeChecked();

		const saveButton = page.getByRole('button', { name: 'Save' });
		await saveButton.click();
		await expect(page.getByText('Settings saved.')).toBeVisible();

		await expect(devRadio).toBeChecked();
		await expect(prodRadio).not.toBeChecked();
	});
});
