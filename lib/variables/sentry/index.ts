import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface Sentry {
	server: {
		dsn?: string;
	};
}

export function GetSentry(env: EnvironmentBuilder): Sentry {
	const server = env.isProduction
		? {
				dsn: env.getString('SENTRY_DSN_SERVER', defaults.SENTRY_DSN_SERVER),
		  }
		: {};
	return {
		server,
	};
}
