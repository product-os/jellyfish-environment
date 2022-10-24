import keypair from 'keypair';
import { EnvironmentBuilder } from '../types';

const keys = keypair();
const jwt = JSON.stringify({
	private_key_id: 'key123',
	private_key: keys.private,
	client_email: 'foo@bar.buz',
	client_id: 'client123',
	type: 'service_account',
});

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
		thread: string;
		jwt: string;
		calendar: string;
		lookahead: number;
		start: {
			message: string;
			instructions: string;
		};
		end: {
			message: string;
			instructions: string;
		};
	};
	calendar: {
		jwt: string;
		thread: string;
		org: string;
		id: string;
		ignore: string;
		lookahead: number;
		ping: string;
	};
}

export const defaults = {
	HUBOT__EMAIL_HASHTAGS__HASHTAGS: '{"access":"access", "order":"order"}',
	HUBOT__EMAIL_HASHTAGS__DOMAIN: 'foo.bar',
	HUBOT__ORDER_HASHTAG_FOOTER: '',
	HUBOT__EMAIL_HASHTAGS__UPPER_LIMIT: '128',
	HUBOT__EMAIL_HASHTAGS__LOWER_LIMIT: '4',
	HUBOT_SMTP_USER: 'hubot@foo.bar',
	HUBOT_SMTP_PASSWORD: 'buz',
	HUBOT_SMTP_SERVER: 'smtp.foo.bar',
	HUBOT__LEAVE__CALAMARI_INSTANCE: 'balena',
	HUBOT__LEAVE__CALAMARI_TOKEN: 'foobar',
	HUBOT__CALENDAR__JWT: jwt,
	HUBOT__CALENDAR__THREAD: '',
	HUBOT__CALENDAR__ORG: '',
	HUBOT__CALENDAR__ID: '',
	HUBOT__CALENDAR__PING: '@@balena',
	HUBOT__CALENDAR__IGNORE: '[]',
	HUBOT__CALENDAR__LOOKAHEAD: 60,
	HUBOT__SUPPORT__THREAD: '',
	HUBOT__SUPPORT__JWT: jwt,
	HUBOT__SUPPORT__CALENDAR: 'foobar',
	HUBOT__SUPPORT__LOOKAHEAD: 15,
	HUBOT__SUPPORT__START_MESSAGE:
		'<%= summary %>: your shift starts in <%= start %> for <%= duration %> - Please ack',
	HUBOT__SUPPORT__START_INSTRUCTIONS: 'Support PSAs:',
	HUBOT__SUPPORT__END_MESSAGE: 'Nearing the end for <%= summary %>',
	HUBOT__SUPPORT__END_INSTRUCTIONS: 'Outgoing agents:',
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
			thread: env.getString(
				'HUBOT__SUPPORT__THREAD',
				defaults.HUBOT__SUPPORT__THREAD,
			),
			jwt: env.getString('HUBOT__SUPPORT__JWT', defaults.HUBOT__SUPPORT__JWT),
			calendar: env.getString(
				'HUBOT__SUPPORT__CALENDAR',
				defaults.HUBOT__SUPPORT__CALENDAR,
			),
			lookahead: env.getNumber(
				'HUBOT__SUPPORT__LOOKAHEAD',
				defaults.HUBOT__SUPPORT__LOOKAHEAD,
			),
			start: {
				message: env.getString(
					'HUBOT__SUPPORT__START_MESSAGE',
					defaults.HUBOT__SUPPORT__START_MESSAGE,
				),
				instructions: env.getString(
					'HUBOT__SUPPORT__START_INSTRUCTIONS',
					defaults.HUBOT__SUPPORT__START_INSTRUCTIONS,
				),
			},
			end: {
				message: env.getString(
					'HUBOT__SUPPORT__END_MESSAGE',
					defaults.HUBOT__SUPPORT__END_MESSAGE,
				),
				instructions: env.getString(
					'HUBOT__SUPPORT__END_INSTRUCTIONS',
					defaults.HUBOT__SUPPORT__END_INSTRUCTIONS,
				),
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
			lookahead: env.getNumber(
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
