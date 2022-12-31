import type { EnvironmentBuilder } from '../types';

export interface Test {
	integration: {
		github: {
			repo: string;
		};
		front: {
			inboxes: string[];
		};
		discourse: {
			category: string;
			username: string;
			nonModeratorUsername: string;
		};
		skip: number;
	};
	user: {
		username: string;
		password: string;
		organization: string;
		role: string;
	};
	ci: string;
	browser: {
		logs: boolean;
	};
}

export const defaults = {
	TEST_USER_ORGANIZATION: 'balena',
	TEST_USER_PASSWORD: 'jellyfish',
	TEST_USER_ROLE: 'user-test',
	TEST_USER_USERNAME: 'jellyfish',
	TEST_INTEGRATION_GITHUB_REPO: 'product-os-test/jellyfish-test-github',
	TEST_INTEGRATION_FRONT_INBOX_1: 'inb_qf8q',
	TEST_INTEGRATION_FRONT_INBOX_2: 'inb_8t8y',
	TEST_INTEGRATION_DISCOURSE_CATEGORY: '44',
	TEST_INTEGRATION_DISCOURSE_USERNAME: 'jellyfish',
	TEST_INTEGRATION_DISCOURSE_NON_MODERATOR_USERNAME: 'jellyfish-test',
	TEST_INTEGRATION_SKIP: 1,
	CI: '',
	TEST_BROWSER_LOGS: false,
};

export function GetTest(env: EnvironmentBuilder): Test {
	return {
		integration: {
			github: {
				repo: env.getString(
					'TEST_INTEGRATION_GITHUB_REPO',
					defaults.TEST_INTEGRATION_GITHUB_REPO,
				),
			},
			front: {
				inboxes: [
					env.getString(
						'TEST_INTEGRATION_FRONT_INBOX_1',
						defaults.TEST_INTEGRATION_FRONT_INBOX_1,
					),
					env.getString(
						'TEST_INTEGRATION_FRONT_INBOX_2',
						defaults.TEST_INTEGRATION_FRONT_INBOX_2,
					),
				],
			},
			discourse: {
				category: env.getString(
					'TEST_INTEGRATION_DISCOURSE_CATEGORY',
					defaults.TEST_INTEGRATION_DISCOURSE_CATEGORY,
				),
				username: env.getString(
					'TEST_INTEGRATION_DISCOURSE_USERNAME',
					defaults.TEST_INTEGRATION_DISCOURSE_USERNAME,
				),
				nonModeratorUsername: env.getString(
					'TEST_INTEGRATION_DISCOURSE_NON_MODERATOR_USERNAME',
					defaults.TEST_INTEGRATION_DISCOURSE_NON_MODERATOR_USERNAME,
				),
			},
			skip: env.getNumber(
				'TEST_INTEGRATION_SKIP',
				defaults.TEST_INTEGRATION_SKIP,
			),
		},
		user: {
			username: env.getString(
				'TEST_USER_USERNAME',
				defaults.TEST_USER_USERNAME,
			),
			password: env.getString(
				'TEST_USER_PASSWORD',
				defaults.TEST_USER_PASSWORD,
			),
			organization: env.getString(
				'TEST_USER_ORGANIZATION',
				defaults.TEST_USER_ORGANIZATION,
			),
			role: env.getString('TEST_USER_ROLE', defaults.TEST_USER_ROLE),
		},
		ci: env.getString('CI', defaults.CI),
		browser: {
			logs: env.getBoolean('TEST_BROWSER_LOGS', defaults.TEST_BROWSER_LOGS),
		},
	};
}
