import { randomUUID } from 'node:crypto';
import { getEnvironment } from '../../../lib';
import { defaults } from '../../../lib/variables/logger';

const variables = {
	LOGLEVEL: randomUUID(),
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
