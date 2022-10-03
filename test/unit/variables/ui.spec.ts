import { getEnvironment } from '../../../lib';
import * as defaults from '../../../lib/variables/ui/defaults';
import { v4 as uuid } from 'uuid';

const variables = {
	UI_HOST: `http://${uuid()}`,
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
