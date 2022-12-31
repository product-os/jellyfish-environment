import { randomUUID } from 'node:crypto';
import { getEnvironment } from '../../../lib';
import { defaults } from '../../../lib/variables/redis';

const variables = {
	REDIS_HOST: randomUUID(),
	REDIS_PORT: '1234',
	REDIS_NAMESPACE: randomUUID(),
	REDIS_USERNAME: randomUUID(),
	REDIS_TLS: 'true',
};

test('variables are parsed', () => {
	const environment = getEnvironment(variables);
	expect(environment.redis).toEqual({
		mock: false,
		socket: {
			host: variables.REDIS_HOST,
			port: 1234,
			tls: true,
		},
		namespace: variables.REDIS_NAMESPACE,
		url: `redis://${variables.REDIS_HOST}:${variables.REDIS_PORT}`,
	});
});

test('password variable gets set', () => {
	const password = 'buz';
	const environment = getEnvironment({
		...variables,
		REDIS_PASSWORD: password,
	});
	expect(environment.redis).toEqual({
		mock: false,
		socket: {
			host: variables.REDIS_HOST,
			port: 1234,
			tls: true,
		},
		namespace: variables.REDIS_NAMESPACE,
		url: `redis://${variables.REDIS_USERNAME}:${password}@${variables.REDIS_HOST}:${variables.REDIS_PORT}`,
	});
});

test('defaults are used', () => {
	const environment = getEnvironment();
	expect(environment.redis).toEqual({
		mock: false,
		namespace: defaults.REDIS_NAMESPACE,
		socket: {
			host: defaults.REDIS_HOST,
			port: defaults.REDIS_PORT,
			tls: false,
		},
		url: `redis://${defaults.REDIS_HOST}:${defaults.REDIS_PORT}`,
	});
});
