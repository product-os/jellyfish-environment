/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */
import { EnvironmentBuilder } from '../../types';

export interface Logger {
	loglevel: string;
}

export function GetLogger(env: EnvironmentBuilder): Logger {
	return {
		loglevel: env.getString('LOGLEVEL'),
	};
}
