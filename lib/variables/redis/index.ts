import isEmpty from 'lodash/isEmpty';
import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface Redis {
	mock: boolean;
	namespace: string;
	password?: string;
	socket: {
		host: string;
		port: number;
		tls: boolean;
	};
}

export function GetRedis(env: EnvironmentBuilder): Redis {
	const options = {
		mock: false,
		namespace: env.getString('REDIS_NAMESPACE', defaults.REDIS_NAMESPACE),
		password: env.getString('REDIS_PASSWORD', defaults.REDIS_PASSWORD),
		socket: {
			host: env.getString('REDIS_HOST', defaults.REDIS_HOST),
			port: env.getNumber('REDIS_PORT', defaults.REDIS_PORT),
			tls: env.getBoolean('REDIS_TLS', defaults.REDIS_TLS),
		},
	};
	if (isEmpty(options.password)) {
		Reflect.deleteProperty(options, 'password');
	}

	return options;
}
