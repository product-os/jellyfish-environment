/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')

const variables = {
	VISUAL: '1'
}

ava('flag variables get set', (test) => {
	const environment = require('./index')(variables)
	test.deepEqual(environment.flags, {
		visual: variables.VISUAL
	})
})