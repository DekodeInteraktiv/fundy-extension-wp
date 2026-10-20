import { test, expect } from '@wordpress/e2e-test-utils-playwright';
import { type Page } from '@playwright/test';

/**
 * Submit the settings form and wait for options.php to redirect back.
 *
 * Asserting on the "Settings saved." notice is unreliable: a save that
 * changes the API key also fetches the organization ID from core, and the
 * error notice it adds when core is unreachable (as in wp-env) replaces the
 * success notice even though the options were stored.
 */
async function saveSettings(page: Page) {
	await page.getByRole('button', { name: 'Save' }).click();
	await page.waitForURL(/settings-updated=true/);
}

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

		await saveSettings(page);

		await expect(apiKeyInput).toHaveValue('api_key_abc_123#');
	});

	test('Can edit and save script environment', async ({ admin, page }) => {
		await admin.visitAdminPage(
			'options-general.php?page=fundy_settings_page',
		);

		// Forms, conversion and tracking scripts each have their own
		// Development/Production pair, so target the forms script inputs.
		const devRadio = page.locator(
			'input[name="fundy_options[forms_script]"][value="dev"]',
		);
		const prodRadio = page.locator(
			'input[name="fundy_options[forms_script]"][value="prod"]',
		);

		await expect(devRadio).toBeVisible();
		await expect(prodRadio).toBeVisible();

		await devRadio.check();
		await expect(devRadio).toBeChecked();
		await expect(prodRadio).not.toBeChecked();

		await saveSettings(page);

		await expect(devRadio).toBeChecked();
		await expect(prodRadio).not.toBeChecked();
	});
});
