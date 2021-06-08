/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { Env } from '@humanwhocodes/env';

import { EnvironmentBuilder, EnvironmentVariables } from './types';
import * as utils from './utils';
import { getVariables } from './variables';

/**
 * Read and return values for a subset of environment variables.
 * Can dependency inject environment in constructor, falls back to process.env.
 */
class Environment implements EnvironmentBuilder {
	public variables: EnvironmentVariables;
	public isProduction: boolean;
	public isDevelopment: boolean;
	public isCI: boolean;

	private _env: Env;

	public constructor(raw = process.env) {
		this._env = new Env(raw);
		this.isProduction = this._env.get('NODE_ENV') === 'production';
		this.isDevelopment = this._env.get('NODE_ENV') === 'development';
		this.isCI = this._env.has('CI');
		this.variables = getVariables(this);

		// TODO: Make this smarter
		if (this.variables.database.type === 'postgres') {
			this.variables.database.options = this.variables.postgres;
		}
		if (this.variables.mail.type === 'mailgun') {
			this.variables.mail.options = this.variables.mailgun;
		}
	}

	public getString(name: string, fallback?: string): string {
		return utils.cleanString(this._env.get(name, fallback || '') || '');
	}

	public getNumber(name: string, fallback?: number): number {
		return utils.setNumber(this._env.get(name) || '', fallback || 0);
	}

	public getBoolean(name: string, fallback?: boolean): boolean {
		return utils.setBoolean(this._env.get(name) || '', fallback || false);
	}

	public getBase64(name: string, fallback?: string): string {
		return Buffer.from(
			this._env.get(name, fallback || '') || '',
			'base64',
		).toString();
	}
}

/**
 * @summary Initialize and return an Environment instance
 * @function
 *
 * @param env - raw environment variable data, defaults to process.env
 * @returns parsed environment variable data
 *
 * @example
 * ```typescript
 * const environment = getEnvironment();
 * ```
 */
export function getEnvironment(
	env: NodeJS.ProcessEnv = process.env,
): EnvironmentVariables {
	const instance = new Environment(env);
	return instance.variables;
}

/**
 * Default environment created using process.env
 */
export const defaultEnvironment = getEnvironment();

export { EnvironmentBuilder, EnvironmentVariables };

export {
	Actions,
	AWS,
	Database,
	DatabaseOptions,
	FileStorage,
	Flags,
	HTTP,
	Integration,
	Livechat,
	LogEntries,
	Logger,
	Mail,
	MailOptions,
	Metrics,
	OAuth,
	Pod,
	Queue,
	Redis,
	Sentry,
	Test,
	UI,
} from './types';
