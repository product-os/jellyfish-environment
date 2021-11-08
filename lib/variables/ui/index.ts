/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface UI {
	host: string;
	port: string;
}

export function GetUI(env: EnvironmentBuilder): UI {
	return {
		port: env.getString('UI_PORT', defaults.UI_PORT),
		host: env.getString('UI_HOST', defaults.UI_HOST),
	};
}
