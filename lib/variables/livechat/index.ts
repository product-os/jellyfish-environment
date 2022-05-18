import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface Livechat {
	host: string;
}

export function GetLivechat(env: EnvironmentBuilder): Livechat {
	return {
		host: env.getString('LIVECHAT_HOST', defaults.LIVECHAT_HOST),
	};
}
