import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface OAuth {
	redirectBaseUrl: string;
}

export function GetOAuth(env: EnvironmentBuilder): OAuth {
	return {
		redirectBaseUrl: env.getString(
			'OAUTH_REDIRECT_BASE_URL',
			defaults.OAUTH_REDIRECT_BASE_URL,
		),
	};
}
