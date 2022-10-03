import { getEnvironment } from '../../../lib';
import { v4 as uuid } from 'uuid';

const variables = {
	SENTRY_DSN_SERVER: uuid(),
};

test('variables are parsed', () => {
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
