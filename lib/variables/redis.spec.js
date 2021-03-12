/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')

const variables = {
	REDIS_HOST: 'foo',
	REDIS_PORT: '1234',
	REDIS_NAMESPACE: 'bar'
}

ava('redis variables get set', (test) => {
	const environment = require('./index')(variables)
	test.deepEqual(environment.redis, {
		mock: false,
		host: variables.REDIS_HOST,
		port: variables.REDIS_PORT,
		namespace: variables.REDIS_NAMESPACE
	})
})

ava('redis password environment variable gets set', (test) => {
	const password = 'buz'
	const environment = require('./index')({
		...variables,
		REDIS_PASSWORD: password
	})
	test.deepEqual(environment.redis, {
		mock: false,
		host: variables.REDIS_HOST,
		port: variables.REDIS_PORT,
		namespace: variables.REDIS_NAMESPACE,
		password
	})
})