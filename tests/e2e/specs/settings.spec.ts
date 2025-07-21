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
});
