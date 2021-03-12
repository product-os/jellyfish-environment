/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')

const variables = {
	SENTRY_DSN_SERVER: 'foobar'
}

ava('sentry variables are set if production', (test) => {
	const environment = require('./index')({
		...variables,
		NODE_ENV: 'production',
	})
	test.deepEqual(environment.sentry, {
		server: {
			dsn: variables.SENTRY_DSN_SERVER
		}
	})
})

ava('sentry variables are not set if not production', (test) => {
	const environment = require('./index')({
		...variables,
		NODE_ENV: 'development',
	})
	test.deepEqual(environment.sentry, {
		server: {}
	})
})