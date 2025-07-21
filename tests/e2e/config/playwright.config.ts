/**
 * External dependencies
 */
import os from 'os';
import { fileURLToPath } from 'url';
import { defineConfig, devices } from '@playwright/test';

/**
 * WordPress dependencies
 */
import baseConfig from '@wordpress/scripts/config/playwright.config.js';

const config = defineConfig({
	...baseConfig,
	reporter: process.env.CI ? 'html' : 'line',
	workers: 1,
	testDir: '../specs',
	timeout: 10000,
	globalSetup: fileURLToPath(
		new URL('./global-setup.js', 'file:' + __filename).href,
	),
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
