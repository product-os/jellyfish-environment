import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

const variables = {
	POSTGRES_DATABASE: 'foo',
	POSTGRES_HOST: 'bar',
	POSTGRES_PASSWORD: 'buz',
	POSTGRES_PORT: '1337',
	POSTGRES_USER: 'baz',
};

describe('Postgres', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.postgres).toEqual({
			user: variables.POSTGRES_USER,
			password: variables.POSTGRES_PASSWORD,
			database: variables.POSTGRES_DATABASE,
			port: variables.POSTGRES_PORT,
			host: variables.POSTGRES_HOST,
		});
	});

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.postgres).toEqual({
			user: defaults.POSTGRES_USER,
			password: defaults.POSTGRES_PASSWORD,
			database: defaults.POSTGRES_DATABASE,
			port: defaults.POSTGRES_PORT,
			host: defaults.POSTGRES_HOST,
		});
	});
});
