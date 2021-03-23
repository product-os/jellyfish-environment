/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { EnvironmentBuilder, EnvironmentVariables } from '../types';
import { GetActions } from './actions';
import { GetAWS } from './aws';
import { GetDatabase } from './database';
import { GetFileStorage } from './filestorage';
import { GetFlags } from './flags';
import { GetHTTP } from './http';
import { GetIntegration } from './integration';
import { GetLivechat } from './livechat';
import { GetLogEntries } from './logentries';
import { GetLogger } from './logger';
import { GetMail } from './mail';
import { GetMailGun } from './mailgun';
import { GetMetrics } from './metrics';
import { GetOAuth } from './oauth';
import { GetPod } from './pod';
import { GetPostgres } from './postgres';
import { GetQueue } from './queue';
import { GetRedis } from './redis';
import { GetSentry } from './sentry';
import { GetTest } from './test';
import { GetUI } from './ui';

export function getVariables(env: EnvironmentBuilder): EnvironmentVariables {
	return {
		actions: GetActions(env),
		aws: GetAWS(env),
		database: GetDatabase(env),
		fileStorage: GetFileStorage(env),
		flags: GetFlags(env),
		http: GetHTTP(env),
		integration: GetIntegration(env),
		livechat: GetLivechat(env),
		logentries: GetLogEntries(env),
		logger: GetLogger(env),
		mail: GetMail(env),
		mailgun: GetMailGun(env),
		metrics: GetMetrics(env),
		oauth: GetOAuth(env),
		pod: GetPod(env),
		postgres: GetPostgres(env),
		queue: GetQueue(env),
		redis: GetRedis(env),
		sentry: GetSentry(env),
		test: GetTest(env),
		ui: GetUI(env),
		isProduction: () => {
			return env.isProduction;
		},
		isDevelopment: () => {
			return env.isDevelopment;
		},
		isCI: () => {
			return env.isCI;
		},
	};
}
