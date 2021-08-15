/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */
import { EnvironmentBuilder } from '../../types';

export interface HTTP {
	host: string;
	port: string;
	tickPort: number;
	workerPort: number;
	timeout: number;
	headersTimeout: number;
	requestTimeout: number;
}

export function GetHTTP(env: EnvironmentBuilder): HTTP {
	return {
		port: env.getString('SERVER_PORT'),
		host: env.getString('SERVER_HOST'),
		tickPort: env.getNumber('HTTP_TICK_PORT'),
		workerPort: env.getNumber('HTTP_WORKER_PORT'),
		timeout: env.getNumber('HTTP_TIMEOUT', 60),
		headersTimeout: env.getNumber('HTTP_HEADERS_TIMEOUT', 60),
		requestTimeout: env.getNumber('HTTP_REQUEST_TIMEOUT', 60),
	};
}
