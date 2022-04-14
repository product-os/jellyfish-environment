import { getEnvironment } from '../../../lib';

const variables = {
	SENTRY_DSN_SERVER: 'foobar',
};

describe('Sentry', () => {
	test('variables are set', () => {
		const environment = getEnvironment({
			...variables,
			NODE_ENV: 'production',
		});
		expect(environment.sentry).toEqual({
			server: {
				dsn: variables.SENTRY_DSN_SERVER,
			},
		});
	});

	test('dsn not set if not production', () => {
		const environment = getEnvironment({
			...variables,
			NODE_ENV: 'development',
		});
		expect(environment.sentry).toEqual({
			server: {},
		});
	});
});