/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { EnvironmentBuilder } from '../../types';
import { DatabaseOptions } from '../database';

export function GetPostgres(env: EnvironmentBuilder): DatabaseOptions {
	return {
		user: env.getString('POSTGRES_USER'),
		password: env.getString('POSTGRES_PASSWORD'),
		database: env.getString('POSTGRES_DATABASE'),
		port: env.getString('POSTGRES_PORT'),
		host: env.getString('POSTGRES_HOST'),
	};
}
