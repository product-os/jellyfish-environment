/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */
import { EnvironmentBuilder } from '../../types';

export interface Flags {
	visual: boolean;
}

export function GetFlags(env: EnvironmentBuilder): Flags {
	return {
		visual: env.getBoolean('VISUAL', false),
	};
}
