import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

const allowedTypes = [defaults.DATABASE];

export interface DatabaseOptions {
	user: string;
	password: string;
	database: string;
	host: string;
	port: string;
}

export interface Database {
	type: string;
	options?: DatabaseOptions;
}

// TODO: Set DatabaseOptions using Database.type
export function GetDatabase(env: EnvironmentBuilder): Database {
	const type = env.getString('DATABASE', defaults.DATABASE);
	if (!allowedTypes.includes(type)) {
		throw Error(`Invalid database type environment value: ${type}`);
	}
	return {
		type,
	};
}
