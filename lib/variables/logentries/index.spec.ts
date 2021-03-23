/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { getEnvironment } from '../../../lib';

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
});
