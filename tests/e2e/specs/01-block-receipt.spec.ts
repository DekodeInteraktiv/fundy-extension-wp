import { test, expect } from '@wordpress/e2e-test-utils-playwright';

test.describe('Donation receipt block', () => {
	test.beforeEach(async ({ admin, editor, page }) => {
		await admin.createNewPost();
	});

	test('Is registered correctly', async ({ editor, page }) => {
		await editor.insertBlock({ name: 'fundy/donation-receipt' });

		expect(await editor.getEditedPostContent()).toBe(
			'<!-- wp:fundy/donation-receipt /-->',
		);
	});

	test('Can be added by using "/donation receipt"', async ({
		editor,
		page,
	}) => {
		await editor.canvas
			.locator('role=button[name="Add default block"i]')
			.click();
		await page.keyboard.type('/donation receipt');
		await page.keyboard.press('Enter');
		expect(await editor.getEditedPostContent()).toBe(
			'<!-- wp:fundy/donation-receipt /-->',
		);
	});

	test('Renders the receipt markup on the frontend', async ({
		editor,
		page,
	}) => {
		await editor.insertBlock({ name: 'fundy/donation-receipt' });
		await editor.publishPost();

		const postId = page.url().match(/post=(\d+)/)[1];
		const frontendUrl = `http://localhost:8889/?p=${postId}`;

		await test.step(`Navigating to frontend URL: ${frontendUrl}`, async () => {
			await page.goto(frontendUrl, { timeout: 5000 });
		});

		const form = page.locator('.fundy-receipt-wrapper');
		await expect(form).toBeVisible();
	});
});
