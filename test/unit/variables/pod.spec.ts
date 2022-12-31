import { randomUUID } from 'node:crypto';
import { getEnvironment } from '../../../lib';
import { defaults } from '../../../lib/variables/pod';

const variables = {
	POD_NAME: randomUUID(),
};

test('variables are parsed', () => {
	const environment = getEnvironment(variables);
	expect(environment.pod).toEqual({
		name: variables.POD_NAME,
	});
});

test('defaults are used', () => {
	const environment = getEnvironment();
	expect(environment.pod).toEqual({
		name: defaults.POD_NAME,
	});
});
