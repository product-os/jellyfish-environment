/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { getEnvironment } from '../../../lib';

const variables = {
	UI_HOST: 'http://livechat',
	UI_PORT: '8080',
};

describe('UI', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.ui).toEqual({
			host: variables.UI_HOST,
			port: variables.UI_PORT,
		});
	});
});
