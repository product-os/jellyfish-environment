import { getEnvironment } from '../../../lib';
import * as defaults from '../../../lib/variables/actions/defaults';
import { v4 as uuid } from 'uuid';

const variables = {
	RESET_PASSWORD_SECRET_TOKEN: uuid(),
};

test('variables are parsed', () => {
	const environment = getEnvironment(variables);
	expect(environment.actions).toEqual({
		resetPasswordSecretToken: variables.RESET_PASSWORD_SECRET_TOKEN,
	});
});

test('defaults are used', () => {
	const environment = getEnvironment();
	expect(environment.actions).toEqual({
		resetPasswordSecretToken: defaults.RESET_PASSWORD_SECRET_TOKEN,
	});
});
