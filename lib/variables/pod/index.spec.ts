import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

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

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.pod).toEqual({
			name: defaults.POD_NAME,
		});
	});
});
