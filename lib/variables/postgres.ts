import type { EnvironmentBuilder } from '../types';
import type { DatabaseOptions } from './database';

export const defaults = {
	POSTGRES_HOST: 'postgres',
	POSTGRES_PORT: '5432',
	POSTGRES_DATABASE: 'jellyfish',
	POSTGRES_USER: 'docker',
	POSTGRES_PASSWORD: 'docker',
};

export function GetPostgres(env: EnvironmentBuilder): DatabaseOptions {
	return {
		user: env.getString('POSTGRES_USER', defaults.POSTGRES_USER),
		password: env.getString('POSTGRES_PASSWORD', defaults.POSTGRES_PASSWORD),
		database: env.getString('POSTGRES_DATABASE', defaults.POSTGRES_DATABASE),
		port: env.getString('POSTGRES_PORT', defaults.POSTGRES_PORT),
		host: env.getString('POSTGRES_HOST', defaults.POSTGRES_HOST),
	};
}
