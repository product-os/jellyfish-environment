import type { EnvironmentBuilder } from '../types';

export interface MailOptions {
	token: string;
	domain: string;
	baseUrl: string;
}

export interface Mail {
	type: string;
	options?: MailOptions;
}

export const defaults = {
	MAIL_TYPE: 'mailgun',
};
const allowedTypes = [defaults.MAIL_TYPE, 'mailgun'];

export function GetMail(env: EnvironmentBuilder): Mail {
	const type = env.getString('MAIL_TYPE', defaults.MAIL_TYPE);
	if (!allowedTypes.includes(type)) {
		throw Error(`Invalid mail type environment value: ${type}`);
	}
	return {
		type,
	};
}
