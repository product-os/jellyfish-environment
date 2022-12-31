import type { EnvironmentBuilder } from '../types';

export interface UI {
	host: string;
	port: string;
}

export const defaults = {
	UI_HOST: 'http://ui',
	UI_PORT: '80',
};

export function GetUI(env: EnvironmentBuilder): UI {
	return {
		port: env.getString('UI_PORT', defaults.UI_PORT),
		host: env.getString('UI_HOST', defaults.UI_HOST),
	};
}
