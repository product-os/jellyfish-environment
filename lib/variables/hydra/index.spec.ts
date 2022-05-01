import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

const variables = {
	HYDRA_ADMIN_BASE_URL: 'http://hydra:4445',
	HYDRA_PUBLIC_BASE_URL: 'http://hydra.ly.fish.local',
};

describe('Hydra', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.hydra).toEqual({
			adminBaseUrl: variables.HYDRA_ADMIN_BASE_URL,
			publicBaseUrl: variables.HYDRA_PUBLIC_BASE_URL,
		});
	});

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.hydra).toEqual({
			adminBaseUrl: defaults.HYDRA_ADMIN_BASE_URL,
			publicBaseUrl: defaults.HYDRA_PUBLIC_BASE_URL,
		});
	});
});
