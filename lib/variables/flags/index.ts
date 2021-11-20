import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface Flags {
	visual: boolean;
}

export function GetFlags(env: EnvironmentBuilder): Flags {
	return {
		visual: env.getBoolean('VISUAL', defaults.VISUAL),
	};
}
