/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')

const variables = {
	OAUTH_REDIRECT_BASE_URL: 'http://localhost'
}

ava('oauth variables get set', (test) => {
	const environment = require('../../index').getEnvironment(variables)
	test.deepEqual(environment.oauth, {
		redirectBaseUrl: variables.OAUTH_REDIRECT_BASE_URL
	})
})
