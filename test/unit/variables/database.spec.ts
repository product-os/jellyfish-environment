import { randomUUID } from 'node:crypto';
import { getEnvironment } from '../../../lib';
import { defaults } from '../../../lib/variables/database';

const variables = {
	DATABASE: 'postgres',
	POSTGRES_USER: randomUUID(),
	POSTGRES_PASSWORD: randomUUID(),
	POSTGRES_DATABASE: randomUUID(),
	POSTGRES_PORT: '1234',
	POSTGRES_HOST: randomUUID(),
};

test('variables are parsed', () => {
	const environment = getEnvironment(variables);
	expect(environment.database).toEqual({
		type: variables.DATABASE,
		options: {
			user: variables.POSTGRES_USER,
			password: variables.POSTGRES_PASSWORD,
			database: variables.POSTGRES_DATABASE,
			port: variables.POSTGRES_PORT,
			host: variables.POSTGRES_HOST,
		},
	});
});

test('defaults are used', () => {
	const environment = getEnvironment();
	expect(environment.database.type).toEqual(defaults.DATABASE);
});
