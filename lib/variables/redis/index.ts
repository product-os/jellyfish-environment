import isEmpty from 'lodash/isEmpty';
import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface Redis {
	mock: boolean;
	namespace: string;
	password?: string;
	host: string;
	port: string;
}

export function GetRedis(env: EnvironmentBuilder): Redis {
	const options = {
		mock: false,
		namespace: env.getString('REDIS_NAMESPACE', defaults.REDIS_NAMESPACE),
		host: env.getString('REDIS_HOST', defaults.REDIS_HOST),
		port: env.getString('REDIS_PORT', defaults.REDIS_PORT),
		password: env.getString('REDIS_PASSWORD', defaults.REDIS_PASSWORD),
	};
	if (isEmpty(options.password)) {
		Reflect.deleteProperty(options, 'password');
	}

	return options;
}
