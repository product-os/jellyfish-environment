/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { getEnvironment } from '../../../lib';

const variables = {
	RESET_PASSWORD_SECRET_TOKEN: 'foobar',
};

describe('Actions', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.actions).toEqual({
			resetPasswordSecretToken: variables.RESET_PASSWORD_SECRET_TOKEN,
		});
	});
});
