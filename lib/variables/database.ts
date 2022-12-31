import type { EnvironmentBuilder } from '../types';

export interface DatabaseOptions {
	user: string;
	password: string;
	database: string;
	host: string;
	port: string;
}

export const defaults = {
	DATABASE: 'postgres',
};
const allowedTypes = [defaults.DATABASE];

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
