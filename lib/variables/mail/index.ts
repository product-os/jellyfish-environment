import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

const allowedTypes = [defaults.MAIL_TYPE, 'mailgun'];

export interface MailOptions {
	token: string;
	domain: string;
	baseUrl: string;
}

export interface Mail {
	type: string;
	options?: MailOptions;
}

export function GetMail(env: EnvironmentBuilder): Mail {
	const type = env.getString('MAIL_TYPE', defaults.MAIL_TYPE);
	if (!allowedTypes.includes(type)) {
		throw Error(`Invalid mail type environment value: ${type}`);
	}
	return {
		type,
	};
}
