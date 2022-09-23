import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

const variables = {
	HUBOT__EMAIL_HASHTAGS__HASHTAGS: '{foo: "bar"}',
	HUBOT__EMAIL_HASHTAGS__DOMAIN: 'foo.bar',
	HUBOT__ORDER_HASHTAG_FOOTER: 'test',
	HUBOT__EMAIL_HASHTAGS__UPPER_LIMIT: '10',
	HUBOT__EMAIL_HASHTAGS__LOWER_LIMIT: '1',
	HUBOT_SMTP_USER: 'hubot@foo.bar',
	HUBOT_SMTP_PASSWORD: 'baz',
	HUBOT_SMTP_SERVER: 'smtp.foo.bar',
};

describe('Hubot', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.hubot).toEqual({
			emailHashtags: {
				hashtags: variables.HUBOT__EMAIL_HASHTAGS__HASHTAGS,
				domain: variables.HUBOT__EMAIL_HASHTAGS__DOMAIN,
				orderHashtagFooter: variables.HUBOT__ORDER_HASHTAG_FOOTER,
				upperLimit: variables.HUBOT__EMAIL_HASHTAGS__UPPER_LIMIT,
				lowerLimit: variables.HUBOT__EMAIL_HASHTAGS__LOWER_LIMIT,
				smtp: {
					user: variables.HUBOT_SMTP_USER,
					password: variables.HUBOT_SMTP_PASSWORD,
					server: variables.HUBOT_SMTP_SERVER,
				},
			},
		});
	});

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.hubot).toEqual({
			emailHashtags: {
				hashtags: defaults.HUBOT__EMAIL_HASHTAGS__HASHTAGS,
				domain: defaults.HUBOT__EMAIL_HASHTAGS__DOMAIN,
				orderHashtagFooter: defaults.HUBOT__ORDER_HASHTAG_FOOTER,
				upperLimit: defaults.HUBOT__EMAIL_HASHTAGS__UPPER_LIMIT,
				lowerLimit: defaults.HUBOT__EMAIL_HASHTAGS__LOWER_LIMIT,
				smtp: {
					user: defaults.HUBOT_SMTP_USER,
					password: defaults.HUBOT_SMTP_PASSWORD,
					server: defaults.HUBOT_SMTP_SERVER,
				},
			},
		});
	});
});
