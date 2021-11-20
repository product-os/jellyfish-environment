import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

const variables = {
	LOGLEVEL: 'crit',
};

describe('Logger', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.logger).toEqual({
			loglevel: variables.LOGLEVEL,
		});
	});

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.logger).toEqual({
			loglevel: defaults.LOGLEVEL,
		});
	});
});
