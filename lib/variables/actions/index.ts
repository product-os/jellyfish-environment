/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { EnvironmentBuilder } from '../../types';

export interface Actions {
	resetPasswordSecretToken: string;
}

export function GetActions(env: EnvironmentBuilder): Actions {
	return {
		resetPasswordSecretToken: env.getString('RESET_PASSWORD_SECRET_TOKEN'),
	};
}
