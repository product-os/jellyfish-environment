import type { EnvironmentBuilder } from '../types';

export interface Pod {
	name: string;
}

export const defaults = {
	POD_NAME: 'localhost',
};

export function GetPod(env: EnvironmentBuilder): Pod {
	return {
		name: env.getString('POD_NAME', defaults.POD_NAME),
	};
}
