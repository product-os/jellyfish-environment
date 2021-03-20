/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import isEmpty from 'lodash/isEmpty';

import { EnvironmentBuilder } from '../../types';

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
		namespace: env.getString('REDIS_NAMESPACE'),
		host: env.getString('REDIS_HOST'),
		port: env.getString('REDIS_PORT'),
		password: env.getString('REDIS_PASSWORD'),
	};
	if (isEmpty(options.password)) {
		Reflect.deleteProperty(options, 'password');
	}

	return options;
}
