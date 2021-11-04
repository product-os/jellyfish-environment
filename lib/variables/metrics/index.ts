/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface Metrics {
	token: string;
	ports: {
		app: number;
		socket: number;
	};
}

export function GetMetrics(env: EnvironmentBuilder): Metrics {
	return {
		token: env.getString('MONITOR_SECRET_TOKEN', defaults.MONITOR_SECRET_TOKEN),
		ports: {
			app: env.getNumber('METRICS_PORT', defaults.METRICS_PORT),
			socket: env.getNumber(
				'SOCKET_METRICS_PORT',
				defaults.SOCKET_METRICS_PORT,
			),
		},
	};
}
