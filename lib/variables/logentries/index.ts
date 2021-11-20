import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface LogEntries {
	token: string;
	region: string;
}

export function GetLogEntries(env: EnvironmentBuilder): LogEntries {
	return {
		token: env.getString('LOGENTRIES_TOKEN', defaults.LOGENTRIES_TOKEN),
		region: env.getString('LOGENTRIES_REGION', defaults.LOGENTRIES_REGION),
	};
}
