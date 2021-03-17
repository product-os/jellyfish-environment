/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const _ = require('lodash')
const ava = require('ava')

const variables = {
	TEST_INTEGRATION_GITHUB_REPO: 'repo-1',
	TEST_INTEGRATION_FRONT_INBOX_1: 'inbox-1',
	TEST_INTEGRATION_FRONT_INBOX_2: 'inbox-2',
	TEST_INTEGRATION_DISCOURSE_CATEGORY: 'foo-1',
	TEST_INTEGRATION_DISCOURSE_USERNAME: 'foo-2',
	TEST_INTEGRATION_DISCOURSE_NON_MODERATOR_USERNAME: 'foo-3',
	TEST_INTEGRATION_SKIP: '1',
	JF_TEST_USER: 'user-1',
	JF_TEST_PASSWORD: 'pass-1',
	JF_URL: 'url-1',
	TEST_USER_USERNAME: 'user-2',
	TEST_USER_PASSWORD: 'pass-2',
	TEST_USER_ORGANIZATION: 'org-1',
	TEST_USER_ROLE: 'role-1',
	CI: 1
}

ava('test variables are set', (test) => {
	const environment = require('../../index').getEnvironment(variables)
	test.deepEqual(environment.test, {
		integration: {
			github: {
				repo: variables.TEST_INTEGRATION_GITHUB_REPO
			},
			front: {
				inboxes: [
					variables.TEST_INTEGRATION_FRONT_INBOX_1,
					variables.TEST_INTEGRATION_FRONT_INBOX_2
				]
			},
			discourse: {
				category: variables.TEST_INTEGRATION_DISCOURSE_CATEGORY,
				username: variables.TEST_INTEGRATION_DISCOURSE_USERNAME,
				nonModeratorUsername: variables.TEST_INTEGRATION_DISCOURSE_NON_MODERATOR_USERNAME
			},
			skip: _.toInteger(variables.TEST_INTEGRATION_SKIP)
		},
		jellyfish: {
			user: variables.JF_TEST_USER,
			password: variables.JF_TEST_PASSWORD,
			url: variables.JF_URL
		},
		user: {
			username: variables.TEST_USER_USERNAME,
			password: variables.TEST_USER_PASSWORD,
			organization: variables.TEST_USER_ORGANIZATION,
			role: variables.TEST_USER_ROLE
		},
		ci: variables.CI
	})
})
