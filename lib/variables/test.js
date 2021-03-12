/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

module.exports = (env) => {
	return {
		integration: {
			github: {
				repo: env.getString('TEST_INTEGRATION_GITHUB_REPO')
			},
			front: {
				inboxes: [
					env.getString('TEST_INTEGRATION_FRONT_INBOX_1'),
					env.getString('TEST_INTEGRATION_FRONT_INBOX_2')
				]
			},
			discourse: {
				category: env.getString('TEST_INTEGRATION_DISCOURSE_CATEGORY'),
				username: env.getString('TEST_INTEGRATION_DISCOURSE_USERNAME'),
				nonModeratorUsername: env.getString('TEST_INTEGRATION_DISCOURSE_NON_MODERATOR_USERNAME')
			},
			skip: env.getNumber('TEST_INTEGRATION_SKIP')
		},
		jellyfish: {
			user: env.getString('JF_TEST_USER'),
			password: env.getString('JF_TEST_PASSWORD'),
			url: env.getString('JF_URL')
		},
		user: {
			username: env.getString('TEST_USER_USERNAME'),
			password: env.getString('TEST_USER_PASSWORD'),
			organization: env.getString('TEST_USER_ORGANIZATION'),
			role: env.getString('TEST_USER_ROLE')
		},
		ci: env.getString('CI')
	}
}