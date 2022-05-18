import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface Hydra {
	adminHost: string;
	publicHost: string;
}

export function GetHydra(env: EnvironmentBuilder): Hydra {
	return {
		adminHost: env.getString('HYDRA_ADMIN_HOST', defaults.HYDRA_ADMIN_HOST),
		publicHost: env.getString('HYDRA_PUBLIC_HOST', defaults.HYDRA_PUBLIC_HOST),
	};
}
