import { EnvironmentBuilder } from '../types';

export interface Hubot {
	emailHashtags: {
		hashtags: string;
		domain: string;
		orderHashtagFooter: string;
		upperLimit: string;
		lowerLimit: string;
		smtp: {
			user: string;
			password: string;
			server: string;
		};
	};
	leave: {
		calamari: {
			instance: string;
			token: string;
		};
	};
	support: {
		org: string;
		channel: string;
		reset: string;
		jwt: string;
		calendar: string;
		lookahead: string;
		start?: {
			message?: string;
			instructions?: string;
		};
		end?: {
			message?: string;
			instructions?: string;
		};
	};
	calendar: {
		jwt: string;
		thread: string;
		org: string;
		id: string;
		ignore: string;
		lookahead: string;
		ping: string;
	};
}

export const defaults = {
	HUBOT__EMAIL_HASHTAGS__HASHTAGS: '{"access":"access", "order":"order"}',
	HUBOT__EMAIL_HASHTAGS__DOMAIN: 'foo.bar',
	HUBOT__ORDER_HASHTAG_FOOTER: '',
	HUBOT__EMAIL_HASHTAGS__UPPER_LIMIT: '64',
	HUBOT__EMAIL_HASHTAGS__LOWER_LIMIT: '4',
	HUBOT_SMTP_USER: 'hubot@foo.bar',
	HUBOT_SMTP_PASSWORD: 'buz',
	HUBOT_SMTP_SERVER: 'smtp.foo.bar',
	HUBOT__LEAVE__CALAMARI_INSTANCE: 'balena',
	HUBOT__LEAVE__CALAMARI_TOKEN: 'foobar',
	HUBOT__CALENDAR__JWT: '{}',
	HUBOT__CALENDAR__THREAD: '',
	HUBOT__CALENDAR__ORG: '',
	HUBOT__CALENDAR__ID: '',
	HUBOT__CALENDAR__PING: '@@balena',
	HUBOT__CALENDAR__IGNORE: '[]',
	HUBOT__CALENDAR__LOOKAHEAD: '1',
	HUBOT__SUPPORT__ORG: '',
	HUBOT__SUPPORT__CHANNEL: '',
	HUBOT__SUPPORT__RESET: '0 0 1 * * 1',
	HUBOT__SUPPORT__JWT: '{}',
	HUBOT__SUPPORT__CALENDAR: '',
	HUBOT__SUPPORT__LOOKAHEAD: '5',
	HUBOT__SUPPORT__START_MESSAGE: '',
	HUBOT__SUPPORT__START_INSTRUCTIONS: '',
	HUBOT__SUPPORT__END_MESSAGE: '',
	HUBOT__SUPPORT__END_INSTRUCTIONS: '',
};

export function GetHubot(env: EnvironmentBuilder): Hubot {
	return {
		emailHashtags: {
			hashtags: env.getString(
				'HUBOT__EMAIL_HASHTAGS__HASHTAGS',
				defaults.HUBOT__EMAIL_HASHTAGS__HASHTAGS,
			),
			domain: env.getString(
				'HUBOT__EMAIL_HASHTAGS__DOMAIN',
				defaults.HUBOT__EMAIL_HASHTAGS__DOMAIN,
			),
			orderHashtagFooter: env.getString(
				'HUBOT__ORDER_HASHTAG_FOOTER',
				defaults.HUBOT__ORDER_HASHTAG_FOOTER,
			),
			upperLimit: env.getString(
				'HUBOT__EMAIL_HASHTAGS__UPPER_LIMIT',
				defaults.HUBOT__EMAIL_HASHTAGS__UPPER_LIMIT,
			),
			lowerLimit: env.getString(
				'HUBOT__EMAIL_HASHTAGS__LOWER_LIMIT',
				defaults.HUBOT__EMAIL_HASHTAGS__LOWER_LIMIT,
			),
			smtp: {
				user: env.getString('HUBOT_SMTP_USER', defaults.HUBOT_SMTP_USER),
				password: env.getString(
					'HUBOT_SMTP_PASSWORD',
					defaults.HUBOT_SMTP_PASSWORD,
				),
				server: env.getString('HUBOT_SMTP_SERVER', defaults.HUBOT_SMTP_SERVER),
			},
		},
		leave: {
			calamari: {
				instance: env.getString(
					'HUBOT__LEAVE__CALAMARI_INSTANCE',
					defaults.HUBOT__LEAVE__CALAMARI_INSTANCE,
				),
				token: env.getString(
					'HUBOT__LEAVE__CALAMARI_TOKEN',
					defaults.HUBOT__LEAVE__CALAMARI_TOKEN,
				),
			},
		},
		support: {
			org: env.getString('HUBOT__SUPPORT__ORG'),
			channel: env.getString('HUBOT__SUPPORT__CHANNEL'),
			reset: env.getString(
				'HUBOT__SUPPORT__RESET',
				defaults.HUBOT__SUPPORT__RESET,
			),
			jwt: env.getString('HUBOT__SUPPORT__JWT', defaults.HUBOT__SUPPORT__JWT),
			calendar: env.getString(
				'HUBOT__SUPPORT__CALENDAR',
				defaults.HUBOT__SUPPORT__CALENDAR,
			),
			lookahead: env.getString(
				'HUBOT__SUPPORT__LOOKAHEAD',
				defaults.HUBOT__SUPPORT__LOOKAHEAD,
			),
			start: {
				message: env.getString('HUBOT__SUPPORT__START_MESSAGE'),
				instructions: env.getString('HUBOT__SUPPORT__START_INSTRUCTIONS'),
			},
			end: {
				message: env.getString('HUBOT__SUPPORT__END_MESSAGE'),
				instructions: env.getString('HUBOT__SUPPORT__END_INSTRUCTIONS'),
			},
		},

		calendar: {
			jwt: env.getString('HUBOT__CALENDAR__JWT', defaults.HUBOT__CALENDAR__JWT),
			thread: env.getString(
				'HUBOT__CALENDAR__THREAD',
				defaults.HUBOT__CALENDAR__THREAD,
			),
			org: env.getString('HUBOT__CALENDAR__ORG', defaults.HUBOT__CALENDAR__ORG),
			id: env.getString('HUBOT__CALENDAR__ID', defaults.HUBOT__CALENDAR__ID),
			ignore: env.getString(
				'HUBOT__CALENDAR__IGNORE',
				defaults.HUBOT__CALENDAR__IGNORE,
			),
			lookahead: env.getString(
				'HUBOT__CALENDAR__LOOKAHEAD',
				defaults.HUBOT__CALENDAR__LOOKAHEAD,
			),
			ping: env.getString(
				'HUBOT__CALENDAR__PING',
				defaults.HUBOT__CALENDAR__PING,
			),
		},
	};
}
