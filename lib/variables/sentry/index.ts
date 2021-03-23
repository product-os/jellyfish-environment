/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { EnvironmentBuilder } from '../../types';

export interface Sentry {
	server: {
		dsn?: string;
	};
}

export function GetSentry(env: EnvironmentBuilder): Sentry {
	const server = env.isProduction
		? {
				dsn: env.getString('SENTRY_DSN_SERVER'),
		  }
		: {};
	return {
		server,
	};
}
