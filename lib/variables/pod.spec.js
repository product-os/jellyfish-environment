/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const _ = require('lodash')
const ava = require('ava')

const variables = {
	POD_NAME: 'foobar'
}

ava('pod variables get set', (test) => {
	const environment = require('./index')(variables)
	test.deepEqual(environment.pod, {
		name: variables.POD_NAME
	})
})