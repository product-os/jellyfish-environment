/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { getEnvironment } from '../../../lib';

const variables = {
	FS_DRIVER: 'foobar',
};

describe('FileStorage', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.fileStorage).toEqual({
			driver: variables.FS_DRIVER,
		});
	});
});
