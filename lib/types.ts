import type { Actions } from './variables/actions';
import type { AWS } from './variables/aws';
import type { Database, DatabaseOptions } from './variables/database';
import type { HTTP } from './variables/http';
import type { Integration } from './variables/integration';
import type { Livechat } from './variables/livechat';
import type { Logger } from './variables/logger';
import type { Mail, MailOptions } from './variables/mail';
import type { Metrics } from './variables/metrics';
import type { OAuth } from './variables/oauth';
import type { Pod } from './variables/pod';
import type { Queue } from './variables/queue';
import type { Redis } from './variables/redis';
import type { RegistryOptions } from './variables/registry';
import type { Test } from './variables/test';
import type { UI } from './variables/ui';

export interface EnvironmentVariables {
	actions: Actions;
	aws: AWS;
	database: Database;
	http: HTTP;
	integration: Integration;
	livechat: Livechat;
	logger: Logger;
	mail: Mail;
	mailgun: MailOptions;
	metrics: Metrics;
	oauth: OAuth;
	pod: Pod;
	postgres: DatabaseOptions;
	queue: Queue;
	redis: Redis;
	registry: RegistryOptions;
	test: Test;
	ui: UI;

	/**
	 * Check if the code is running in a production environment
	 *
	 * @returns Whether the environment is production
	 *
	 * @example
	 * ```typescript
	 * if (environment.isProduction()) {
	 *   console.log('Production!')
	 * }
	 * ```
	 */
	isProduction: () => boolean;

	/**
	 * Check if the code is running in a development environment
	 *
	 * @returns Whether the environment is development
	 *
	 * @example
	 * ```typescript
	 * if (environment.isDevelopment()) {
	 *   console.log('Development!')
	 * }
	 * ```
	 */
	isDevelopment: () => boolean;

	/**
	 * Check if the code is running in a CI environment
	 *
	 * @returns Whether the environment is a CI system
	 *
	 * @example
	 * ```typescript
	 * if (environment.isCI()) {
	 *   console.log('CI!')
	 * }
	 * ```
	 */
	isCI: () => boolean;

	/**
	 * Get environment variables for an integration
	 *
	 * @returns Environment variables for specified integration
	 *
	 * @example
	 * ```typescript
	 * const frontEnvVars = environment.getIntegration('front');
	 * ```
	 */
	getIntegration: (name: string) => any;
}

export interface EnvironmentBuilder {
	variables: EnvironmentVariables;
	isProduction: boolean;
	isDevelopment: boolean;
	isCI: boolean;

	/**
	 * Get cleaned environment variable string
	 *
	 * @param name - environment variable name
	 * @param fallback - string to fallback to
	 * @returns parsed value of fallback
	 *
	 * @example
	 * ```typescript
	 * const value = environment.getString('MY_STRING', 'foobar');
	 * ```
	 */
	getString: (name: string, fallback?: string) => string;

	/**
	 * Get numeric value of an environment variable
	 *
	 * @param name - environment variable name
	 * @param fallback - number to fallback to
	 * @returns parsed value or fallback
	 *
	 * @example
	 * ```typescript
	 * const value = environment.getNumber('MY_NUMBER', 10);
	 * ```
	 */
	getNumber: (name: string, fallback?: number) => number;

	/**
	 * Get boolean value of an environment variable
	 *
	 * @param name - environment variable name
	 * @param fallback - boolean to fallback to
	 * @returns parsed value or fallback
	 *
	 * @example
	 * ```typescript
	 * const value = environment.getBoolean('SKIP', true);
	 * ```
	 */
	getBoolean: (name: string, fallback?: boolean) => boolean;
}

export {
	Actions,
	AWS,
	Database,
	DatabaseOptions,
	HTTP,
	Integration,
	Livechat,
	Logger,
	Mail,
	MailOptions,
	Metrics,
	OAuth,
	Pod,
	Queue,
	Redis,
	RegistryOptions,
	Test,
	UI,
};
