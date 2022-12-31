import { randomUUID } from 'node:crypto';
import { getEnvironment } from '../../../lib';
import { defaults } from '../../../lib/variables/hubot';

const variables = {
	HUBOT__EMAIL_HASHTAGS__HASHTAGS: `{foo: "${randomUUID()}"}`,
	HUBOT__EMAIL_HASHTAGS__DOMAIN: randomUUID(),
	HUBOT__ORDER_HASHTAG_FOOTER: randomUUID(),
	HUBOT__EMAIL_HASHTAGS__UPPER_LIMIT: '10',
	HUBOT__EMAIL_HASHTAGS__LOWER_LIMIT: '1',
	HUBOT_SMTP_USER: randomUUID(),
	HUBOT_SMTP_PASSWORD: randomUUID(),
	HUBOT_SMTP_SERVER: randomUUID(),
	HUBOT__LEAVE__CALAMARI_INSTANCE: randomUUID(),
	HUBOT__LEAVE__CALAMARI_TOKEN: randomUUID(),
	HUBOT__CALENDAR__JWT: `{secret: "${randomUUID()}"}`,
	HUBOT__CALENDAR__ID: randomUUID(),
	HUBOT__CALENDAR__PING: randomUUID(),
	HUBOT__CALENDAR__IGNORE: `["${randomUUID()}"]`,
	HUBOT__CALENDAR__LOOKAHEAD: '2',
	HUBOT__SUPPORT__JWT: `{foo: "${randomUUID()}"}`,
	HUBOT__SUPPORT__CALENDAR: randomUUID(),
	HUBOT__SUPPORT__LOOKAHEAD: '10',
	HUBOT__SUPPORT__START_MESSAGE: randomUUID(),
	HUBOT__SUPPORT__START_INSTRUCTIONS: randomUUID(),
	HUBOT__SUPPORT__END_MESSAGE: randomUUID(),
	HUBOT__SUPPORT__END_INSTRUCTIONS: randomUUID(),
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
		support: {
			jwt: variables.HUBOT__SUPPORT__JWT,
			calendar: variables.HUBOT__SUPPORT__CALENDAR,
			lookahead: parseInt(variables.HUBOT__SUPPORT__LOOKAHEAD, 10),
			start: {
				message: variables.HUBOT__SUPPORT__START_MESSAGE,
				instructions: variables.HUBOT__SUPPORT__START_INSTRUCTIONS,
			},
			end: {
				message: variables.HUBOT__SUPPORT__END_MESSAGE,
				instructions: variables.HUBOT__SUPPORT__END_INSTRUCTIONS,
			},
		},
		calendar: {
			jwt: variables.HUBOT__CALENDAR__JWT,
			id: variables.HUBOT__CALENDAR__ID,
			ping: variables.HUBOT__CALENDAR__PING,
			ignore: variables.HUBOT__CALENDAR__IGNORE,
			lookahead: parseInt(variables.HUBOT__CALENDAR__LOOKAHEAD, 10),
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
		support: {
			jwt: defaults.HUBOT__SUPPORT__JWT,
			calendar: defaults.HUBOT__SUPPORT__CALENDAR,
			lookahead: defaults.HUBOT__SUPPORT__LOOKAHEAD,
			start: {
				message: defaults.HUBOT__SUPPORT__START_MESSAGE,
				instructions: defaults.HUBOT__SUPPORT__START_INSTRUCTIONS,
			},
			end: {
				message: defaults.HUBOT__SUPPORT__END_MESSAGE,
				instructions: defaults.HUBOT__SUPPORT__END_INSTRUCTIONS,
			},
		},
		calendar: {
			jwt: defaults.HUBOT__CALENDAR__JWT,
			id: defaults.HUBOT__CALENDAR__ID,
			ping: defaults.HUBOT__CALENDAR__PING,
			ignore: defaults.HUBOT__CALENDAR__IGNORE,
			lookahead: defaults.HUBOT__CALENDAR__LOOKAHEAD,
		},
	});
});
