import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

const variables = {
	TEST_INTEGRATION_GITHUB_REPO: 'repo-1',
	TEST_INTEGRATION_FRONT_INBOX_1: 'inbox-1',
	TEST_INTEGRATION_FRONT_INBOX_2: 'inbox-2',
	TEST_INTEGRATION_DISCOURSE_CATEGORY: 'foo-1',
	TEST_INTEGRATION_DISCOURSE_USERNAME: 'foo-2',
	TEST_INTEGRATION_DISCOURSE_NON_MODERATOR_USERNAME: 'foo-3',
	TEST_INTEGRATION_SKIP: '1',
	TEST_USER_USERNAME: 'user-2',
	TEST_USER_PASSWORD: 'pass-2',
	TEST_USER_ORGANIZATION: 'org-1',
	TEST_USER_ROLE: 'role-1',
	CI: '1',
	TEST_BROWSER_LOGS: 'true',
};

describe('Test', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.test).toEqual({
			integration: {
				github: {
					repo: variables.TEST_INTEGRATION_GITHUB_REPO,
				},
				front: {
					inboxes: [
						variables.TEST_INTEGRATION_FRONT_INBOX_1,
						variables.TEST_INTEGRATION_FRONT_INBOX_2,
					],
				},
				discourse: {
					category: variables.TEST_INTEGRATION_DISCOURSE_CATEGORY,
					username: variables.TEST_INTEGRATION_DISCOURSE_USERNAME,
					nonModeratorUsername:
						variables.TEST_INTEGRATION_DISCOURSE_NON_MODERATOR_USERNAME,
				},
				skip: parseInt(variables.TEST_INTEGRATION_SKIP, 10),
			},
			user: {
				username: variables.TEST_USER_USERNAME,
				password: variables.TEST_USER_PASSWORD,
				organization: variables.TEST_USER_ORGANIZATION,
				role: variables.TEST_USER_ROLE,
			},
			ci: variables.CI,
			browser: {
				logs: true,
			},
		});
	});

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.test.integration).toEqual({
			github: {
				repo: defaults.TEST_INTEGRATION_GITHUB_REPO,
			},
			front: {
				inboxes: [
					defaults.TEST_INTEGRATION_FRONT_INBOX_1,
					defaults.TEST_INTEGRATION_FRONT_INBOX_2,
				],
			},
			discourse: {
				category: defaults.TEST_INTEGRATION_DISCOURSE_CATEGORY,
				username: defaults.TEST_INTEGRATION_DISCOURSE_USERNAME,
				nonModeratorUsername:
					defaults.TEST_INTEGRATION_DISCOURSE_NON_MODERATOR_USERNAME,
			},
			skip: defaults.TEST_INTEGRATION_SKIP,
		});
		expect(environment.test.user).toEqual({
			username: defaults.TEST_USER_USERNAME,
			password: defaults.TEST_USER_PASSWORD,
			organization: defaults.TEST_USER_ORGANIZATION,
			role: defaults.TEST_USER_ROLE,
		});
		expect(environment.test.browser).toEqual({
			logs: defaults.TEST_BROWSER_LOGS,
		});
	});
});
