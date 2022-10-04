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
	};
}
