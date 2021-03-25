/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { getEnvironment } from '../../../lib';

const variables = {
	REDIS_HOST: 'foo',
	REDIS_PORT: '1234',
	REDIS_NAMESPACE: 'bar',
};

describe('Redis', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.redis).toEqual({
			mock: false,
			host: variables.REDIS_HOST,
			port: variables.REDIS_PORT,
			namespace: variables.REDIS_NAMESPACE,
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
			host: variables.REDIS_HOST,
			port: variables.REDIS_PORT,
			namespace: variables.REDIS_NAMESPACE,
			password,
		});
	});
});