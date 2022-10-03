import { getEnvironment } from '../../../lib';
import * as defaults from '../../../lib/variables/database/defaults';
import { v4 as uuid } from 'uuid';

const variables = {
	DATABASE: 'postgres',
	POSTGRES_USER: uuid(),
	POSTGRES_PASSWORD: uuid(),
	POSTGRES_DATABASE: uuid(),
	POSTGRES_PORT: '1234',
	POSTGRES_HOST: uuid(),
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
