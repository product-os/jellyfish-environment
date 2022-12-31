import { randomUUID } from 'node:crypto';
import { getEnvironment } from '../../../lib';
import { defaults } from '../../../lib/variables/actions';

const variables = {
	RESET_PASSWORD_SECRET_TOKEN: randomUUID(),
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
