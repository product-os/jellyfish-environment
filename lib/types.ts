/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { Actions } from './variables/actions';
import { AWS } from './variables/aws';
import { Database, DatabaseOptions } from './variables/database';
import { FileStorage } from './variables/filestorage';
import { Flags } from './variables/flags';
import { HTTP } from './variables/http';
import { Integration } from './variables/integration';
import { Livechat } from './variables/livechat';
import { LogEntries } from './variables/logentries';
import { Logger } from './variables/logger';
import { Mail, MailOptions } from './variables/mail';
import { Metrics } from './variables/metrics';
import { OAuth } from './variables/oauth';
import { Pod } from './variables/pod';
import { Queue } from './variables/queue';
import { Redis } from './variables/redis';
import { Sentry } from './variables/sentry';
import { Test } from './variables/test';
import { UI } from './variables/ui';

export interface EnvironmentVariables {
	actions: Actions;
	aws: AWS;
	database: Database;
	fileStorage: FileStorage;
	flags: Flags;
	http: HTTP;
	integration: Integration;
	livechat: Livechat;
	logentries: LogEntries;
	logger: Logger;
	mail: Mail;
	mailgun: MailOptions;
	metrics: Metrics;
	oauth: OAuth;
	pod: Pod;
	postgres: DatabaseOptions;
	queue: Queue;
	redis: Redis;
	sentry: Sentry;
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
};
