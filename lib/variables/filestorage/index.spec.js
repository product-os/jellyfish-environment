/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')

const variables = {
	FS_DRIVER: 'foobar'
}

ava('fileStorage variables get set', (test) => {
	const environment = require('../../index').getEnvironment(variables)
	test.deepEqual(environment.fileStorage, {
		driver: variables.FS_DRIVER
	})
})
