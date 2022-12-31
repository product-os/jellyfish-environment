import type { EnvironmentBuilder } from '../types';

export interface HTTP {
	host: string;
	port: string;
	workerPort: number;
	timeout: number;
	headersTimeout: number;
	requestTimeout: number;
}

export const defaults = {
	SERVER_HOST: 'http://api.ly.fish.local',
	SERVER_PORT: '80',
	HTTP_WORKER_PORT: 8002,
	HTTP_TIMEOUT: 60,
	HTTP_HEADERS_TIMEOUT: 60,
	HTTP_REQUEST_TIMEOUT: 60,
};

export function GetHTTP(env: EnvironmentBuilder): HTTP {
	return {
		port: env.getString('SERVER_PORT', defaults.SERVER_PORT),
		host: env.getString('SERVER_HOST', defaults.SERVER_HOST),
		workerPort: env.getNumber('HTTP_WORKER_PORT', defaults.HTTP_WORKER_PORT),
		timeout: env.getNumber('HTTP_TIMEOUT', defaults.HTTP_TIMEOUT),
		headersTimeout: env.getNumber(
			'HTTP_HEADERS_TIMEOUT',
			defaults.HTTP_HEADERS_TIMEOUT,
		),
		requestTimeout: env.getNumber(
			'HTTP_REQUEST_TIMEOUT',
			defaults.HTTP_REQUEST_TIMEOUT,
		),
	};
}
