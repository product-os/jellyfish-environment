import { randomUUID } from 'node:crypto';
import { getEnvironment } from '../../../lib';
import { defaults } from '../../../lib/variables/http';

const variables = {
	SERVER_HOST: randomUUID(),
	SERVER_PORT: '8000',
	HTTP_WORKER_PORT: '8002',
	HTTP_TIMEOUT: '61',
	HTTP_HEADERS_TIMEOUT: '62',
	HTTP_REQUEST_TIMEOUT: '63',
};

test('variables are parsed', () => {
	const environment = getEnvironment(variables);
	expect(environment.http).toEqual({
		host: variables.SERVER_HOST,
		port: variables.SERVER_PORT,
		workerPort: parseInt(variables.HTTP_WORKER_PORT, 10),
		timeout: parseInt(variables.HTTP_TIMEOUT, 10),
		headersTimeout: parseInt(variables.HTTP_HEADERS_TIMEOUT, 10),
		requestTimeout: parseInt(variables.HTTP_REQUEST_TIMEOUT, 10),
	});
});

test('defaults are used', () => {
	const environment = getEnvironment();
	expect(environment.http).toEqual({
		port: defaults.SERVER_PORT,
		host: defaults.SERVER_HOST,
		workerPort: defaults.HTTP_WORKER_PORT,
		timeout: defaults.HTTP_TIMEOUT,
		headersTimeout: defaults.HTTP_HEADERS_TIMEOUT,
		requestTimeout: defaults.HTTP_REQUEST_TIMEOUT,
	});
});
