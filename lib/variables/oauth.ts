import type { EnvironmentBuilder } from '../types';

export interface OAuth {
	redirectBaseUrl: string;
}

export const defaults = {
	OAUTH_REDIRECT_BASE_URL: 'https://jel.ly.fish',
};

export function GetOAuth(env: EnvironmentBuilder): OAuth {
	return {
		redirectBaseUrl: env.getString(
			'OAUTH_REDIRECT_BASE_URL',
			defaults.OAUTH_REDIRECT_BASE_URL,
		),
	};
}
