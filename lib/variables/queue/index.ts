/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */
import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface Queue {
	concurrency: number;
}

export function GetQueue(env: EnvironmentBuilder): Queue {
	return {
		concurrency: env.getNumber('QUEUE_CONCURRENCY', defaults.QUEUE_CONCURRENCY),
	};
}
