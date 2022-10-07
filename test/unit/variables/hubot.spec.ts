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
	HUBOT__SUPPORT__ORG: uuid(),
	HUBOT__SUPPORT__CHANNEL: uuid(),
	HUBOT__SUPPORT__RESET: uuid(),
	HUBOT__SUPPORT__JWT: `{foo: "${uuid()}"}`,
	HUBOT__SUPPORT__CALENDAR: uuid(),
	HUBOT__SUPPORT__LOOKAHEAD: '10',
	HUBOT__SUPPORT__START_MESSAGE: uuid(),
	HUBOT__SUPPORT__START_INSTRUCTIONS: uuid(),
	HUBOT__SUPPORT__END_MESSAGE: uuid(),
	HUBOT__SUPPORT__END_INSTRUCTIONS: uuid(),
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
			org: variables.HUBOT__SUPPORT__ORG,
			channel: variables.HUBOT__SUPPORT__CHANNEL,
			reset: variables.HUBOT__SUPPORT__RESET,
			jwt: variables.HUBOT__SUPPORT__JWT,
			calendar: variables.HUBOT__SUPPORT__CALENDAR,
			lookahead: variables.HUBOT__SUPPORT__LOOKAHEAD,
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
		support: {
			org: defaults.HUBOT__SUPPORT__ORG,
			channel: defaults.HUBOT__SUPPORT__CHANNEL,
			reset: defaults.HUBOT__SUPPORT__RESET,
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
			thread: defaults.HUBOT__CALENDAR__THREAD,
			org: defaults.HUBOT__CALENDAR__ORG,
			id: defaults.HUBOT__CALENDAR__ID,
			ping: defaults.HUBOT__CALENDAR__PING,
			ignore: defaults.HUBOT__CALENDAR__IGNORE,
			lookahead: defaults.HUBOT__CALENDAR__LOOKAHEAD,
		},
	});
});
