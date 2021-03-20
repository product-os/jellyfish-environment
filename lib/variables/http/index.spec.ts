/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { getEnvironment } from '../../../lib';

const variables = {
	SERVER_HOST: 'http://api',
	SERVER_PORT: '8000',
};

describe('HTTP', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.http).toEqual({
			host: variables.SERVER_HOST,
			port: variables.SERVER_PORT,
		});
	});
});
