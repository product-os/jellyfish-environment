/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

const variables = {
	LOGENTRIES_TOKEN: 'foobar',
	LOGENTRIES_REGION: 'eu',
};

describe('LogEntries', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.logentries).toEqual({
			token: variables.LOGENTRIES_TOKEN,
			region: variables.LOGENTRIES_REGION,
		});
	});

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.logentries).toEqual({
			token: defaults.LOGENTRIES_TOKEN,
			region: defaults.LOGENTRIES_REGION,
		});
	});
});
