import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

const variables = {
	REDIS_HOST: 'foo',
	REDIS_PORT: '1234',
	REDIS_NAMESPACE: 'bar',
	REDIS_USERNAME: 'baz',
	REDIS_TLS: 'true',
};

describe('Redis', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.redis).toEqual({
			mock: false,
			socket: {
				host: variables.REDIS_HOST,
				port: 1234,
				tls: true,
			},
			namespace: variables.REDIS_NAMESPACE,
			url: 'redis://foo:1234',
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
			url: 'redis://baz:buz@foo:1234',
		});
	});

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.redis).toEqual({
			mock: false,
			namespace: defaults.REDIS_NAMESPACE,
			socket: {
				host: defaults.REDIS_HOST,
				port: defaults.REDIS_PORT,
				tls: false,
			},
			url: 'redis://redis:6379',
		});
	});
});
