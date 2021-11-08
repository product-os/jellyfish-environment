/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface FileStorage {
	driver: string;
}

export function GetFileStorage(env: EnvironmentBuilder): FileStorage {
	return {
		driver: env.getString('FS_DRIVER', defaults.FS_DRIVER),
	};
}
