import { EnvironmentBuilder } from '../types';

export interface Queue {
	concurrency: number;
}

export const defaults = {
	QUEUE_CONCURRENCY: 4,
};

export function GetQueue(env: EnvironmentBuilder): Queue {
	return {
		concurrency: env.getNumber('QUEUE_CONCURRENCY', defaults.QUEUE_CONCURRENCY),
	};
}
