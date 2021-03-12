/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')

const variables = {
	OAUTH_REDIRECT_BASE_URL: 'http://localhost'
}

ava('queue variables get set', (test) => {
	const environment = require('./index')(variables)
	test.deepEqual(environment.queue, {
		concurrency: variables.OAUTH_REDIRECT_BASE_URL
	})
})