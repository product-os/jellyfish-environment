/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')

const variables = {
	RESET_PASSWORD_SECRET_TOKEN: 'foobar'
}

ava('action variables get set', (test) => {
	const environment = require('./index')(variables)
	test.deepEqual(environment.actions, {
		resetPasswordSecretToken: variables.RESET_PASSWORD_SECRET_TOKEN
	})
})