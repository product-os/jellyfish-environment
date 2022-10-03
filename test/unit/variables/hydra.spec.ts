import { getEnvironment } from '../../../lib';
import * as defaults from '../../../lib/variables/hydra/defaults';
import { v4 as uuid } from 'uuid';

const variables = {
	HYDRA_ADMIN_HOST: uuid(),
	HYDRA_PUBLIC_HOST: uuid(),
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
