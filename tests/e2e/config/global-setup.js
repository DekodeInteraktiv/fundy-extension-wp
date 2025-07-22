import { request } from '@playwright/test';
import { ExtendedRequestUtils } from '../utils/requestUtils';

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

	await requestUtils.setupRest();

	await requestUtils.activateTheme('twentytwentyone');

	const plugins = await requestUtils.getActivePlugins();

	for (const slug of Object.keys(plugins)) {
		await requestUtils.deactivatePlugin(slug);
	}

	await requestUtils.activatePlugin('fundy-extension-wp/plugin');

	await requestContext.dispose();
}

export default globalSetup;
