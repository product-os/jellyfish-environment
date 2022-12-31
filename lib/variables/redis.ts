import _ from 'lodash';
import type { EnvironmentBuilder } from '../types';

export interface Redis {
	mock: boolean;
	namespace: string;
	password?: string;
	url: string;
	socket: {
		host: string;
		port: number;
		tls: boolean;
	};
}

export const defaults = {
	REDIS_HOST: 'redis',
	REDIS_PORT: 6379,
	REDIS_NAMESPACE: 'jellyfish',
	REDIS_USERNAME: 'default',
	REDIS_PASSWORD: '',
	REDIS_TLS: false,
};

export function GetRedis(env: EnvironmentBuilder): Redis {
	const host = env.getString('REDIS_HOST', defaults.REDIS_HOST);
	const port = env.getNumber('REDIS_PORT', defaults.REDIS_PORT);
	const username = env.getString('REDIS_USERNAME', defaults.REDIS_USERNAME);
	const password = env.getString('REDIS_PASSWORD', defaults.REDIS_PASSWORD);
	const url = _.isEmpty(password)
		? `redis://${host}:${port}`
		: `redis://${username}:${password}@${host}:${port}`;

	const options = {
		mock: false,
		namespace: env.getString('REDIS_NAMESPACE', defaults.REDIS_NAMESPACE),
		url,
		socket: {
			host,
			port,
			tls: env.getBoolean('REDIS_TLS', defaults.REDIS_TLS),
		},
	};

	return options;
}
