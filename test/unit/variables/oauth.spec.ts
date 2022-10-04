import { getEnvironment } from '../../../lib';
import { defaults } from '../../../lib/variables/oauth';
import { v4 as uuid } from 'uuid';

const variables = {
	OAUTH_REDIRECT_BASE_URL: uuid(),
};

test('variables are parsed', () => {
	const environment = getEnvironment(variables);
	expect(environment.oauth).toEqual({
		redirectBaseUrl: variables.OAUTH_REDIRECT_BASE_URL,
	});
});

test('defaults are used', () => {
	const environment = getEnvironment();
	expect(environment.oauth).toEqual({
		redirectBaseUrl: defaults.OAUTH_REDIRECT_BASE_URL,
	});
});
