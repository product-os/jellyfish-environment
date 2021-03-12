/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')

const variables = {
	LOGLEVEL: 'info'
}

ava('logentries variables get set', (test) => {
	const environment = require('./index')(variables)
	test.deepEqual(environment.logger, {
		loglevel: variables.LOGLEVEL
	})
})