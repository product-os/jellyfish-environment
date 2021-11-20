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
		expect(environment.mail.options).toEqual({
			token: defaults.MAILGUN_TOKEN,
			domain: defaults.MAILGUN_DOMAIN,
			baseUrl: defaults.MAILGUN_BASE_URL,
		});
	});
});
