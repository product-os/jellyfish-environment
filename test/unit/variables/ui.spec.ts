import { randomUUID } from 'node:crypto';
import { getEnvironment } from '../../../lib';
import { defaults } from '../../../lib/variables/ui';

const variables = {
	UI_HOST: `http://${randomUUID()}`,
	UI_PORT: '8080',
};

test('variables are parsed', () => {
	const environment = getEnvironment(variables);
	expect(environment.ui).toEqual({
		host: variables.UI_HOST,
		port: variables.UI_PORT,
	});
});

test('defaults are used', () => {
	const environment = getEnvironment();
	expect(environment.ui).toEqual({
		host: defaults.UI_HOST,
		port: defaults.UI_PORT,
	});
});
