/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */
import { EnvironmentBuilder } from '../../types';

export interface HTTP {
	host: string;
	port: string;
}

export function GetHTTP(env: EnvironmentBuilder): HTTP {
	return {
		port: env.getString('SERVER_PORT'),
		host: env.getString('SERVER_HOST'),
	};
}