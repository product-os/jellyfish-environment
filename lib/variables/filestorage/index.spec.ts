import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

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

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.fileStorage).toEqual({
			driver: defaults.FS_DRIVER,
		});
	});
});