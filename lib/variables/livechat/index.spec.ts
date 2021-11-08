/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

const variables = {
	LIVECHAT_HOST: 'http://livechat',
	LIVECHAT_PORT: '8080',
};

describe('Livechat', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.livechat).toEqual({
			host: variables.LIVECHAT_HOST,
			port: variables.LIVECHAT_PORT,
		});
	});

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.livechat).toEqual({
			host: defaults.LIVECHAT_HOST,
			port: defaults.LIVECHAT_PORT,
		});
	});
});
