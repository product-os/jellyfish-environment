import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

const variables = {
	DATABASE: 'postgres',
	POSTGRES_USER: 'foo',
	POSTGRES_PASSWORD: 'bar',
	POSTGRES_DATABASE: 'buz',
	POSTGRES_PORT: '1234',
	POSTGRES_HOST: 'baz',
};

describe('Database', () => {
	test('variables are set', () => {
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

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.database.type).toEqual(defaults.DATABASE);
	});
});
