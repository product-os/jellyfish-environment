import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

const variables = {
	LIVECHAT_BASE_URL: 'http://livechat.ly.fish.local',
};

describe('Livechat', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.livechat).toEqual({
			baseUrl: variables.LIVECHAT_BASE_URL,
		});
	});

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.livechat).toEqual({
			baseUrl: defaults.LIVECHAT_BASE_URL,
		});
	});
});
