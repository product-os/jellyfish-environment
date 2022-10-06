import { v4 as uuid } from 'uuid';
import { getEnvironment } from '../../../lib';
import { defaults } from '../../../lib/variables/hubot';

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
	HUBOT__CALENDAR__JWT: `{secret: "${uuid()}"}`,
	HUBOT__CALENDAR__THREAD: uuid(),
	HUBOT__CALENDAR__ORG: uuid(),
	HUBOT__CALENDAR__ID: uuid(),
	HUBOT__CALENDAR__PING: uuid(),
	HUBOT__CALENDAR__IGNORE: `["${uuid()}"]`,
	HUBOT__CALENDAR__LOOKAHEAD: '2',
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
		calendar: {
			jwt: variables.HUBOT__CALENDAR__JWT,
			thread: variables.HUBOT__CALENDAR__THREAD,
			org: variables.HUBOT__CALENDAR__ORG,
			id: variables.HUBOT__CALENDAR__ID,
			ping: variables.HUBOT__CALENDAR__PING,
			ignore: variables.HUBOT__CALENDAR__IGNORE,
			lookahead: variables.HUBOT__CALENDAR__LOOKAHEAD,
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
		calendar: {
			jwt: defaults.HUBOT__CALENDAR__JWT,
			thread: defaults.HUBOT__CALENDAR__THREAD,
			org: defaults.HUBOT__CALENDAR__ORG,
			id: defaults.HUBOT__CALENDAR__ID,
			ping: defaults.HUBOT__CALENDAR__PING,
			ignore: defaults.HUBOT__CALENDAR__IGNORE,
			lookahead: defaults.HUBOT__CALENDAR__LOOKAHEAD,
		},
	});
});
