import { getEnvironment } from '../../../lib';
import * as defaults from '../../../lib/variables/redis/defaults';
import { v4 as uuid } from 'uuid';

const variables = {
	REDIS_HOST: uuid(),
	REDIS_PORT: '1234',
	REDIS_NAMESPACE: uuid(),
	REDIS_USERNAME: uuid(),
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
