import { request } from '@playwright/test';
import { ExtendedRequestUtils } from '../utils/requestUtils';

// To interact with the WP Guest Bar plugin's settings page, we must be authenticated.
// Before any tests are run, we sign in, save the cookies set by WordPress, and then discard the session.
// Later, when we need to act as a logged-in user, we make those cookies available.
// https://playwright.dev/docs/test-global-setup-teardown#configure-globalsetup-and-globalteardown
async function globalSetup(config) {
	const { storageState, baseURL } = config.projects[0].use;
	const storageStatePath =
		typeof storageState === 'string' ? storageState : undefined;

	const requestContext = await request.newContext({
		baseURL: baseURL,
	});
	const requestUtils = new ExtendedRequestUtils(requestContext, {
		storageStatePath: storageStatePath,
		user: {
			username: 'admin',
			password: 'password',
		},
	});

	// Alternatively, we could take a more traditional route,
	// filling in the input fields for the username and password and submitting the form.
	// https://playwright.dev/docs/test-global-setup-teardown#example
	await requestUtils.setupRest();

	await requestUtils.activateTheme('twentytwentyone');

	// Deactivate all plugins except Stackable
	const plugins = await requestUtils.getActivePlugins();

	// Use for loop because forEach cannot handle async operations
	for (const slug of Object.keys(plugins)) {
		await requestUtils.deactivatePlugin(slug);
	}

	await requestUtils.activatePlugin('fundy-extension-wp/plugin');

	await requestContext.dispose();
}

export default globalSetup;
