import { randomUUID } from 'node:crypto';
import { getEnvironment } from '../../../lib';
import { defaults } from '../../../lib/variables/postgres';

const variables = {
	POSTGRES_DATABASE: randomUUID(),
	POSTGRES_HOST: randomUUID(),
	POSTGRES_PASSWORD: randomUUID(),
	POSTGRES_PORT: '1337',
	POSTGRES_USER: randomUUID(),
};

test('variables are parsed', () => {
	const environment = getEnvironment(variables);
	expect(environment.postgres).toEqual({
		user: variables.POSTGRES_USER,
		password: variables.POSTGRES_PASSWORD,
		database: variables.POSTGRES_DATABASE,
		port: variables.POSTGRES_PORT,
		host: variables.POSTGRES_HOST,
	});
});

test('defaults are used', () => {
	const environment = getEnvironment();
	expect(environment.postgres).toEqual({
		user: defaults.POSTGRES_USER,
		password: defaults.POSTGRES_PASSWORD,
		database: defaults.POSTGRES_DATABASE,
		port: defaults.POSTGRES_PORT,
		host: defaults.POSTGRES_HOST,
	});
});
