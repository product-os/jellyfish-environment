import { getEnvironment } from '../../../lib';
import { defaults } from '../../../lib/variables/mailgun';
import { v4 as uuid } from 'uuid';

const variables = {
	MAIL_TYPE: 'mailgun',
	MAILGUN_TOKEN: uuid(),
	MAILGUN_DOMAIN: uuid(),
	MAILGUN_BASE_URL: uuid(),
};

test('variables are parsed', () => {
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

test('defaults are used', () => {
	const environment = getEnvironment();
	expect(environment.mail.options).toEqual({
		token: defaults.MAILGUN_TOKEN,
		domain: defaults.MAILGUN_DOMAIN,
		baseUrl: defaults.MAILGUN_BASE_URL,
	});
});
