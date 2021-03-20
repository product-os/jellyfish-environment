/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { getEnvironment } from '../../../lib';

const variables = {
	OAUTH_REDIRECT_BASE_URL: 'http://localhost',
};

describe('OAuth', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.oauth).toEqual({
			redirectBaseUrl: variables.OAUTH_REDIRECT_BASE_URL,
		});
	});
});
