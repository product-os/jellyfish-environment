/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */
import { EnvironmentBuilder } from '../../types';

export interface LogEntries {
	token: string;
	region: string;
}

export function GetLogEntries(env: EnvironmentBuilder): LogEntries {
	return {
		token: env.getString('LOGENTRIES_TOKEN'),
		region: env.getString('LOGENTRIES_REGION'),
	};
}
