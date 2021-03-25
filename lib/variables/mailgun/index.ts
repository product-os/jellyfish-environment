/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { EnvironmentBuilder } from '../../types';
import { MailOptions } from '../mail';

export function GetMailGun(env: EnvironmentBuilder): MailOptions {
	return {
		token: env.getString('MAILGUN_TOKEN'),
		domain: env.getString('MAILGUN_DOMAIN'),
		baseUrl: env.getString('MAILGUN_BASE_URL'),
	};
}