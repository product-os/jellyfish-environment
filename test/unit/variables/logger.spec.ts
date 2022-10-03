import { getEnvironment } from '../../../lib';
import * as defaults from '../../../lib/variables/logger/defaults';
import { v4 as uuid } from 'uuid';

const variables = {
	LOGLEVEL: uuid(),
};

test('variables are parsed', () => {
	const environment = getEnvironment(variables);
	expect(environment.logger).toEqual({
		loglevel: variables.LOGLEVEL,
	});
});

test('defaults are used', () => {
	const environment = getEnvironment();
	expect(environment.logger).toEqual({
		loglevel: defaults.LOGLEVEL,
	});
});
