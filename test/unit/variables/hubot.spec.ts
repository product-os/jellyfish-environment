import { v4 as uuid } from 'uuid';
import { getEnvironment } from '../../../lib';
import * as defaults from '../../../lib/variables/hubot/defaults';

const variables = {
	HUBOT__EMAIL_HASHTAGS__HASHTAGS: `{foo: "${uuid()}"}`,
	HUBOT__EMAIL_HASHTAGS__DOMAIN: uuid(),
	HUBOT__ORDER_HASHTAG_FOOTER: uuid(),
	HUBOT__EMAIL_HASHTAGS__UPPER_LIMIT: '10',
	HUBOT__EMAIL_HASHTAGS__LOWER_LIMIT: '1',
	HUBOT_SMTP_USER: uuid(),
	HUBOT_SMTP_PASSWORD: uuid(),
	HUBOT_SMTP_SERVER: uuid(),
	HUBOT__LEAVE__CALAMARI_INSTANCE: uuid(),
	HUBOT__LEAVE__CALAMARI_TOKEN: uuid(),
};

test('variables are parsed', () => {
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
		leave: {
			calamari: {
				instance: variables.HUBOT__LEAVE__CALAMARI_INSTANCE,
				token: variables.HUBOT__LEAVE__CALAMARI_TOKEN,
			},
		},
	});
});

test('defaults are used', () => {
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
		leave: {
			calamari: {
				instance: defaults.HUBOT__LEAVE__CALAMARI_INSTANCE,
				token: defaults.HUBOT__LEAVE__CALAMARI_TOKEN,
			},
		},
	});
});
