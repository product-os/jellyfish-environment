import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

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

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.flags).toEqual({
			visual: defaults.VISUAL,
		});
	});
});
