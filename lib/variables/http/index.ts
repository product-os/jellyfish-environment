import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface HTTP {
	host: string;
	port: string;
	workerPort: number;
	timeout: number;
	headersTimeout: number;
	requestTimeout: number;
}

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
