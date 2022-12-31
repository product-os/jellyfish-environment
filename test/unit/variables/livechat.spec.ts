import { randomUUID } from 'node:crypto';
import { getEnvironment } from '../../../lib';
import { defaults } from '../../../lib/variables/livechat';

const variables = {
	LIVECHAT_HOST: randomUUID(),
};

test('variables are parsed', () => {
	const environment = getEnvironment(variables);
	expect(environment.livechat).toEqual({
		host: variables.LIVECHAT_HOST,
	});
});

test('defaults are used', () => {
	const environment = getEnvironment();
	expect(environment.livechat).toEqual({
		host: defaults.LIVECHAT_HOST,
	});
});
