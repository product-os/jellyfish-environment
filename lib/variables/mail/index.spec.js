/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')

const variables = {
	MAIL_TYPE: 'mailgun',
	MAILGUN_TOKEN: 'foobar',
	MAILGUN_DOMAIN: 'foo.bar',
	MAILGUN_BASE_URL: 'base.url'
}

ava('mail variables get set', (test) => {
	const environment = require('../../index').getEnvironment(variables)
	test.deepEqual(environment.mail, {
		type: variables.MAIL_TYPE,
		options: {
			token: variables.MAILGUN_TOKEN,
			domain: variables.MAILGUN_DOMAIN,
			baseUrl: variables.MAILGUN_BASE_URL
		}
	})
})
