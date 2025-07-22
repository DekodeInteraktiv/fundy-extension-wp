/**
 * External dependencies
 */
import os from 'os';
import { fileURLToPath } from 'url';
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '..', '..', '..', '.env') });

/**
 * WordPress dependencies
 */
import baseConfig from '@wordpress/scripts/config/playwright.config.js';

const config = defineConfig({
	...baseConfig,
	reporter: process.env.CI ? 'html' : 'line',
	workers: 1,
	testDir: '..',
	testMatch: ['test-*.ts'],
	timeout: 10000,
	globalSetup: fileURLToPath(
		new URL('./global-setup.js', 'file:' + __filename).href,
	),
	use: {
		...baseConfig.use,
		FUNDY_API_KEY: process.env.FUNDY_API_KEY,
		FUNDY_TEST_FORM_TITLE: process.env.FUNDY_TEST_FORM_TITLE,
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
			grepInvert: /-chromium/,
		},
		{
			name: 'webkit',
			use: {
				...devices['Desktop Safari'],
				/**
				 * Headless webkit won't receive dataTransfer with custom types in the
				 * drop event on Linux. The solution is to use `xvfb-run` to run the tests.
				 * ```sh
				 * xvfb-run npm run test:e2e
				 * ```
				 * See `.github/workflows/end2end-test-playwright.yml` for advanced usages.
				 */
				headless: os.type() !== 'Linux',
			},
			grep: /@webkit/,
			grepInvert: /-webkit/,
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] },
			grep: /@firefox/,
			grepInvert: /-firefox/,
		},
	],
	webServer: {
		...baseConfig.webServer,
		command: 'npm run env:start',
	},
});

export default config;
