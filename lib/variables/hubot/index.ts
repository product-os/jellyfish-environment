import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

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
}

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
	};
}
