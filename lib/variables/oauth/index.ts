/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */
import { EnvironmentBuilder } from '../../types';

export interface OAuth {
	redirectBaseUrl: string;
}

export function GetOAuth(env: EnvironmentBuilder): OAuth {
	return {
		redirectBaseUrl: env.getString('OAUTH_REDIRECT_BASE_URL'),
	};
}
