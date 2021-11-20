import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface Logger {
	loglevel: string;
}

export function GetLogger(env: EnvironmentBuilder): Logger {
	return {
		loglevel: env.getString('LOGLEVEL', defaults.LOGLEVEL),
	};
}
