import type { EnvironmentBuilder } from '../types';

export interface Metrics {
	token: string;
	ports: {
		app: number;
		socket: number;
	};
}

export const defaults = {
	METRICS_PORT: 9000,
	SOCKET_METRICS_PORT: 9001,
	MONITOR_SECRET_TOKEN: 'TEST',
};

export function GetMetrics(env: EnvironmentBuilder): Metrics {
	return {
		token: env.getString('MONITOR_SECRET_TOKEN', defaults.MONITOR_SECRET_TOKEN),
		ports: {
			app: env.getNumber('METRICS_PORT', defaults.METRICS_PORT),
			socket: env.getNumber(
				'SOCKET_METRICS_PORT',
				defaults.SOCKET_METRICS_PORT,
			),
		},
	};
}
