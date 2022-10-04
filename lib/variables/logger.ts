import { EnvironmentBuilder } from '../types';

export interface Logger {
	loglevel: string;
}

export const defaults = {
	LOGLEVEL: 'info',
};

export function GetLogger(env: EnvironmentBuilder): Logger {
	return {
		loglevel: env.getString('LOGLEVEL', defaults.LOGLEVEL),
	};
}
