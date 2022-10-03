import { EnvironmentBuilder } from '../types';
import { MailOptions } from './mail';

export const defaults = {
	MAILGUN_TOKEN: 'key-9uz8dzwwwgwiw896uo6vjvxpwfqr5djt',
	MAILGUN_DOMAIN: 'mail.ly.fish',
	MAILGUN_BASE_URL: 'https://api.mailgun.net/v3',
};

export function GetMailGun(env: EnvironmentBuilder): MailOptions {
	return {
		token: env.getString('MAILGUN_TOKEN', defaults.MAILGUN_TOKEN),
		domain: env.getString('MAILGUN_DOMAIN', defaults.MAILGUN_DOMAIN),
		baseUrl: env.getString('MAILGUN_BASE_URL', defaults.MAILGUN_BASE_URL),
	};
}
