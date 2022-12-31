import type { EnvironmentBuilder } from '../types';

export interface Sentry {
	server: {
		dsn?: string;
	};
}

export const defaults = {
	SENTRY_DSN_SERVER: '',
};

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
