import { test, expect } from '@wordpress/e2e-test-utils-playwright';

test.describe('Settings page', () => {
	test('Settings page loads correctly', async ({ admin, page }) => {
		await admin.visitAdminPage(
			'options-general.php?page=fundy_settings_page',
		);

		await expect(
			page.getByRole('heading', { name: 'Dekode Fundraising Settings' }),
		).toBeVisible();
	});

	test('Theme select is disabled without an API key', async ({
		admin,
		page,
	}) => {
		await admin.visitAdminPage(
			'options-general.php?page=fundy_settings_page',
		);

		// The theme list is fetched server-side with the saved API key, so
		// the no-key state is the only one Playwright can assert without a
		// reachable core; clear the key first to make reruns deterministic.
		const apiKeyInput = page.getByRole('textbox', {
			name: 'Enter your API key',
		});
		await apiKeyInput.fill('');
		await page.getByRole('button', { name: 'Save' }).click();
		await expect(page.getByText('Settings saved.')).toBeVisible();

		await expect(
			page.getByRole('combobox', { name: 'Theme' }),
		).toBeDisabled();
		await expect(
			page.getByText('Set an API key to list themes.'),
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

		await apiKeyInput.fill('api_key_abc_123#');

		const saveButton = page.getByRole('button', { name: 'Save' });
		await expect(saveButton).toBeVisible();

		await saveButton.click();

		await expect(page.getByText('Settings saved.')).toBeVisible();

		await expect(apiKeyInput).toHaveValue('api_key_abc_123#');
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
