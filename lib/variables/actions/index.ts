import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface Actions {
	resetPasswordSecretToken: string;
}

export function GetActions(env: EnvironmentBuilder): Actions {
	return {
		resetPasswordSecretToken: env.getString(
			'RESET_PASSWORD_SECRET_TOKEN',
			defaults.RESET_PASSWORD_SECRET_TOKEN,
		),
	};
}
