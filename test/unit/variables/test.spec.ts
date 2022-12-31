import { randomUUID } from 'node:crypto';
import { getEnvironment } from '../../../lib';
import { defaults } from '../../../lib/variables/test';

const variables = {
	TEST_INTEGRATION_GITHUB_REPO: randomUUID(),
	TEST_INTEGRATION_FRONT_INBOX_1: randomUUID(),
	TEST_INTEGRATION_FRONT_INBOX_2: randomUUID(),
	TEST_INTEGRATION_DISCOURSE_CATEGORY: randomUUID(),
	TEST_INTEGRATION_DISCOURSE_USERNAME: randomUUID(),
	TEST_INTEGRATION_DISCOURSE_NON_MODERATOR_USERNAME: randomUUID(),
	TEST_INTEGRATION_SKIP: '1',
	TEST_USER_USERNAME: randomUUID(),
	TEST_USER_PASSWORD: randomUUID(),
	TEST_USER_ORGANIZATION: randomUUID(),
	TEST_USER_ROLE: randomUUID(),
	CI: '1',
	TEST_BROWSER_LOGS: 'true',
};

test('variables are parsed', () => {
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

test('defaults are used', () => {
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
