import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

const variables = {
	HYDRA_ADMIN_HOST: 'hydra:4445',
	HYDRA_PUBLIC_HOST: 'hydra.ly.fish.local',
};

describe('Hydra', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.hydra).toEqual({
			adminHost: variables.HYDRA_ADMIN_HOST,
			publicHost: variables.HYDRA_PUBLIC_HOST,
		});
	});

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.hydra).toEqual({
			adminHost: defaults.HYDRA_ADMIN_HOST,
			publicHost: defaults.HYDRA_PUBLIC_HOST,
		});
	});
});
