import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface Livechat {
	host: string;
	port: string;
}

export function GetLivechat(env: EnvironmentBuilder): Livechat {
	return {
		port: env.getString('LIVECHAT_PORT', defaults.LIVECHAT_PORT),
		host: env.getString('LIVECHAT_HOST', defaults.LIVECHAT_HOST),
	};
}
