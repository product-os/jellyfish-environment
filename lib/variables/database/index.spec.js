/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')

const variables = {
	DATABASE: 'postgres',
	POSTGRES_USER: 'foo',
	POSTGRES_PASSWORD: 'bar',
	POSTGRES_DATABASE: 'buz',
	POSTGRES_PORT: '1234',
	POSTGRES_HOST: 'baz'
}

ava('database variables get set', (test) => {
	const environment = require('../../index').getEnvironment(variables)
	test.deepEqual(environment.database, {
		type: variables.DATABASE,
		options: {
			user: variables.POSTGRES_USER,
			password: variables.POSTGRES_PASSWORD,
			database: variables.POSTGRES_DATABASE,
			port: variables.POSTGRES_PORT,
			host: variables.POSTGRES_HOST
		}
	})
})
