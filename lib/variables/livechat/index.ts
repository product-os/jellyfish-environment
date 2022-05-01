import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface Livechat {
	baseUrl: string;
}

export function GetLivechat(env: EnvironmentBuilder): Livechat {
	return {
		baseUrl: env.getString('LIVECHAT_BASE_URL', defaults.LIVECHAT_BASE_URL),
	};
}
