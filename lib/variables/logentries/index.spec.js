/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')

const variables = {
	LOGENTRIES_TOKEN: 'foobar',
	LOGENTRIES_REGION: 'eu'
}

ava('logentries variables get set', (test) => {
	const environment = require('../../index').getEnvironment(variables)
	test.deepEqual(environment.logentries, {
		token: variables.LOGENTRIES_TOKEN,
		region: variables.LOGENTRIES_REGION
	})
})
