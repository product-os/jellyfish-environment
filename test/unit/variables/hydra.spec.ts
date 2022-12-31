import { randomUUID } from 'node:crypto';
import { getEnvironment } from '../../../lib';
import { defaults } from '../../../lib/variables/hydra';

const variables = {
	HYDRA_ADMIN_HOST: randomUUID(),
	HYDRA_PUBLIC_HOST: randomUUID(),
};

test('variables are parsed', () => {
	const environment = getEnvironment(variables);
	expect(environment.hydra).toEqual({
		adminHost: variables.HYDRA_ADMIN_HOST,
		publicHost: variables.HYDRA_PUBLIC_HOST,
	});
});

test('defaults are used', () => {
	const environment = getEnvironment();
	expect(environment.hydra).toEqual({
		adminHost: defaults.HYDRA_ADMIN_HOST,
		publicHost: defaults.HYDRA_PUBLIC_HOST,
	});
});
