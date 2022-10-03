import { EnvironmentBuilder } from '../types';

export interface Livechat {
	host: string;
}

export const defaults = {
	LIVECHAT_HOST: 'livechat.ly.fish.local',
};

export function GetLivechat(env: EnvironmentBuilder): Livechat {
	return {
		host: env.getString('LIVECHAT_HOST', defaults.LIVECHAT_HOST),
	};
}
