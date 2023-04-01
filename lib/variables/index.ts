import type { EnvironmentBuilder, EnvironmentVariables } from '../types';
import { GetActions } from './actions';
import { GetAWS } from './aws';
import { GetDatabase } from './database';
import { GetHTTP } from './http';
import { GetIntegration } from './integration';
import { GetLivechat } from './livechat';
import { GetLogger } from './logger';
import { GetMail } from './mail';
import { GetMailGun } from './mailgun';
import { GetMetrics } from './metrics';
import { GetOAuth } from './oauth';
import { GetPod } from './pod';
import { GetPostgres } from './postgres';
import { GetQueue } from './queue';
import { GetRedis } from './redis';
import { GetTest } from './test';
import { GetUI } from './ui';

export function getVariables(env: EnvironmentBuilder): EnvironmentVariables {
	const integration = GetIntegration(env);

	return {
		actions: GetActions(env),
		aws: GetAWS(env),
		database: GetDatabase(env),
		http: GetHTTP(env),
		integration,
		livechat: GetLivechat(env),
		logger: GetLogger(env),
		mail: GetMail(env),
		mailgun: GetMailGun(env),
		metrics: GetMetrics(env),
		oauth: GetOAuth(env),
		pod: GetPod(env),
		postgres: GetPostgres(env),
		queue: GetQueue(env),
		redis: GetRedis(env),
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
		getIntegration: (name: string) => {
			for (const [key, value] of Object.entries(integration)) {
				if (name === key) {
					return value;
				}
			}
			throw new Error(
				`Environment variables not found for integration "${name}"`,
			);
		},
	};
}
