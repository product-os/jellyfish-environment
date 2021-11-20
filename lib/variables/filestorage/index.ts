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
