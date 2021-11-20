import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

const variables = {
	RESET_PASSWORD_SECRET_TOKEN: 'foobar',
};

describe('Actions', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.actions).toEqual({
			resetPasswordSecretToken: variables.RESET_PASSWORD_SECRET_TOKEN,
		});
	});

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.actions).toEqual({
			resetPasswordSecretToken: defaults.RESET_PASSWORD_SECRET_TOKEN,
		});
	});
});
