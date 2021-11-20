import { EnvironmentBuilder } from '../../types';
import { DatabaseOptions } from '../database';
import * as defaults from './defaults';

export function GetPostgres(env: EnvironmentBuilder): DatabaseOptions {
	return {
		user: env.getString('POSTGRES_USER', defaults.POSTGRES_USER),
		password: env.getString('POSTGRES_PASSWORD', defaults.POSTGRES_PASSWORD),
		database: env.getString('POSTGRES_DATABASE', defaults.POSTGRES_DATABASE),
		port: env.getString('POSTGRES_PORT', defaults.POSTGRES_PORT),
		host: env.getString('POSTGRES_HOST', defaults.POSTGRES_HOST),
	};
}
