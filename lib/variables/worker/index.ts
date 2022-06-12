import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface Worker {
	cacheRefreshInterval: number;
}

export function GetWorker(env: EnvironmentBuilder): Worker {
	return {
		cacheRefreshInterval: env.getNumber(
			'WORKER_CACHE_REFRESH_INTERVAL',
			defaults.WORKER_CACHE_REFRESH_INTERVAL,
		),
	};
}
