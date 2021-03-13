/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')

const variables = {
	UI_HOST: 'http://ui',
	UI_PORT: '80'
}

ava('ui variables get set', (test) => {
	const environment = require('../../index').getEnvironment(variables)
	test.deepEqual(environment.ui, {
		host: variables.UI_HOST,
		port: variables.UI_PORT
	})
})
