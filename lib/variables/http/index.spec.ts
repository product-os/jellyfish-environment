/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { getEnvironment } from '../../../lib';

const variables = {
	SERVER_HOST: 'http://api',
	SERVER_PORT: '8000',
	HTTP_TICK_PORT: '8001',
	HTTP_WORKER_PORT: '8002',
};

describe('HTTP', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.http).toEqual({
			host: variables.SERVER_HOST,
			port: variables.SERVER_PORT,
			tickPort: parseInt(variables.HTTP_TICK_PORT, 10),
			workerPort: parseInt(variables.HTTP_WORKER_PORT, 10),
		});
	});
});
