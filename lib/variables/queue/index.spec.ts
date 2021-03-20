/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

const variables = {
	QUEUE_CONCURRENCY: '5',
};

describe('Queue', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.queue).toEqual({
			concurrency: parseInt(variables.QUEUE_CONCURRENCY, 10),
		});
	});

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.queue.concurrency).toEqual(defaults.QUEUE_CONCURRENCY);
	});
});
