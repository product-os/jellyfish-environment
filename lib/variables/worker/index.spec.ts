import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

const variables = {
	WORKER_CACHE_REFRESH_INTERVAL: '30000',
};

describe('Worker', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.worker).toEqual({
			cacheRefreshInterval: parseInt(
				variables.WORKER_CACHE_REFRESH_INTERVAL,
				10,
			),
		});
	});

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.worker.cacheRefreshInterval).toEqual(
			defaults.WORKER_CACHE_REFRESH_INTERVAL,
		);
	});
});
