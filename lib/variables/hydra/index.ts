import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface Hydra {
	adminBaseUrl: string;
	publicBaseUrl: string;
}

export function GetHydra(env: EnvironmentBuilder): Hydra {
	return {
		adminBaseUrl: env.getString(
			'HYDRA_ADMIN_BASE_URL',
			defaults.HYDRA_ADMIN_BASE_URL,
		),
		publicBaseUrl: env.getString(
			'HYDRA_PUBLIC_BASE_URL',
			defaults.HYDRA_PUBLIC_BASE_URL,
		),
	};
}
