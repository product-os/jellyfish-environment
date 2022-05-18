import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

const variables = {
	LIVECHAT_HOST: 'livechat.ly.fish.local',
};

describe('Livechat', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.livechat).toEqual({
			host: variables.LIVECHAT_HOST,
		});
	});

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.livechat).toEqual({
			host: defaults.LIVECHAT_HOST,
		});
	});
});
