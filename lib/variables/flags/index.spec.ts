/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { getEnvironment } from '../../../lib';

const variables = {
	VISUAL: '1',
};

describe('Flags', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.flags).toEqual({
			visual: true,
		});
	});
});
