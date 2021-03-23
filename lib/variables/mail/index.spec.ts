/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

const variables = {
	MAIL_TYPE: 'mailgun',
	MAILGUN_TOKEN: 'foobar',
	MAILGUN_DOMAIN: 'foo.bar',
	MAILGUN_BASE_URL: 'base.url',
};

describe('Mail', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.mail).toEqual({
			type: variables.MAIL_TYPE,
			options: {
				token: variables.MAILGUN_TOKEN,
				domain: variables.MAILGUN_DOMAIN,
				baseUrl: variables.MAILGUN_BASE_URL,
			},
		});
	});

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.mail.type).toEqual(defaults.MAIL_TYPE);
	});
});
