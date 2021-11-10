/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface Pod {
	name: string;
}

export function GetPod(env: EnvironmentBuilder): Pod {
	return {
		name: env.getString('POD_NAME', defaults.POD_NAME),
	};
}
