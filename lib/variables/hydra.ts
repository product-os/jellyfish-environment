import { EnvironmentBuilder } from '../types';

export interface Hydra {
	adminHost: string;
	publicHost: string;
}

export const defaults = {
	HYDRA_ADMIN_HOST: 'http://hydra:4445',
	HYDRA_PUBLIC_HOST: 'hydra.ly.fish.local',
};

export function GetHydra(env: EnvironmentBuilder): Hydra {
	return {
		adminHost: env.getString('HYDRA_ADMIN_HOST', defaults.HYDRA_ADMIN_HOST),
		publicHost: env.getString('HYDRA_PUBLIC_HOST', defaults.HYDRA_PUBLIC_HOST),
	};
}
