/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')

const variables = {
	LIVECHAT_HOST: 'http://livechat',
	LIVECHAT_PORT: '8080'
}

ava('livechat variables get set', (test) => {
	const environment = require('../../index').getEnvironment(variables)
	test.deepEqual(environment.livechat, {
		host: variables.LIVECHAT_HOST,
		port: variables.LIVECHAT_PORT
	})
})
