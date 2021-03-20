/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { getEnvironment } from '../../../lib';

const variables = {
	POD_NAME: 'foobar',
};

describe('Pod', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.pod).toEqual({
			name: variables.POD_NAME,
		});
	});
});
