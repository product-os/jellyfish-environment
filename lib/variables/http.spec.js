/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')

const variables = {
	SERVER_HOST: 'http://api',
	SERVER_PORT: '8000'
}

ava('http variables get set', (test) => {
	const environment = require('./index')(variables)
	test.deepEqual(environment.http, {
		host: variables.SERVER_HOST,
		port: variables.SERVER_PORT
	})
})