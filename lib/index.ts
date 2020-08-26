/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import _ from 'lodash';
import Env from './types';

/** @internal */
const setBoolean: Env['setBoolean'] = (rawValue, fallback = false) => {
	if (rawValue === undefined) {
		return fallback;
	}
	return rawValue === '1';
};

/** @internal */
const setNumber: Env['setNumber'] = (rawValue, fallback = 0) => {
	if (rawValue === undefined) {
		return fallback;
	}
	const intValue = _.parseInt(rawValue);
	return !_.isNaN(intValue) && intValue !== 0 ? intValue : fallback;
};

/** @internal */
const cleanString: Env['cleanString'] = (original, fallback = '') => {
	if (!original) {
		return fallback;
	}
	return original.replace(/(^\s*"*)|("*\s*$)/g, '');
};

const environment: Env = {
	setBoolean,
	setNumber,
	cleanString,

	isProduction() {
		return process.env.NODE_ENV === 'production';
	},

	isDevelopment() {
		return process.env.NODE_ENV === 'development';
	},

	isCI: () => {
		return process.env.hasOwnProperty('CI');
	},

	logger: {
		loglevel: cleanString(process.env.LOGLEVEL),
	},

	sentry: {
		server: {
			dsn: '',
		},
	},

	logentries: {
		token: cleanString(process.env.LOGENTRIES_TOKEN),
	},

	http: {
		port: setNumber(process.env.SERVER_PORT),
		host: cleanString(process.env.SERVER_HOST),
	},

	ui: {
		port: setNumber(process.env.UI_PORT),
		host: cleanString(process.env.UI_HOST),
	},

	livechat: {
		port: setNumber(process.env.LIVECHAT_PORT),
		host: cleanString(process.env.LIVECHAT_HOST),
	},

	postgres: {
		user: cleanString(process.env.POSTGRES_USER),
		password: cleanString(process.env.POSTGRES_PASSWORD),
		database: cleanString(process.env.POSTGRES_DATABASE),
		port: setNumber(process.env.POSTGRES_PORT),
		host: cleanString(process.env.POSTGRES_HOST),
	},

	database: {
		type: cleanString(process.env.DATABASE),
		options: undefined,
	},

	fileStorage: {
		driver: cleanString(process.env.FS_DRIVER),
	},

	aws: {
		accessKeyId: cleanString(process.env.AWS_ACCESS_KEY_ID),
		secretAccessKey: cleanString(process.env.AWS_SECRET_ACCESS_KEY),
		s3BucketName: cleanString(process.env.AWS_S3_BUCKET_NAME),
	},

	redis: {
		mock: false,
		namespace: cleanString(process.env.REDIS_NAMESPACE),
		password: cleanString(process.env.REDIS_PASSWORD),
		port: setNumber(process.env.REDIS_PORT),
		host: cleanString(process.env.REDIS_HOST),
	},

	flags: {
		visual: setBoolean(process.env.VISUAL),
	},

	pod: {
		name: cleanString(process.env.POD_NAME),
	},

	integration: {
		default: {
			user: cleanString(process.env.INTEGRATION_DEFAULT_USER),
		},
		'balena-api': {
			privateKey: cleanString(process.env.INTEGRATION_BALENA_API_PRIVATE_KEY),
			production: {
				publicKey: cleanString(
					process.env.INTEGRATION_BALENA_API_PUBLIC_KEY_PRODUCTION,
				),
			},
			staging: {
				publicKey: cleanString(
					process.env.INTEGRATION_BALENA_API_PUBLIC_KEY_STAGING,
				),
			},
			appId: cleanString(process.env.INTEGRATION_BALENA_API_APP_ID),
			appSecret: cleanString(process.env.INTEGRATION_BALENA_API_APP_SECRET),
			oauthBaseUrl: cleanString(
				process.env.INTEGRATION_BALENA_API_OAUTH_BASE_URL,
			),
		},
		github: {
			api: cleanString(process.env.INTEGRATION_GITHUB_TOKEN || ''),
			signature: cleanString(
				process.env.INTEGRATION_GITHUB_SIGNATURE_KEY || '',
			),
			key: cleanString(process.env.INTEGRATION_GITHUB_PRIVATE_KEY).replace(
				/\\n/gm,
				'\n',
			),
			appId: cleanString(process.env.INTEGRATION_GITHUB_APP_ID),
		},
		front: {
			api: cleanString(process.env.INTEGRATION_FRONT_TOKEN || ''),
			intercom: cleanString(process.env.INTEGRATION_INTERCOM_TOKEN || ''),
		},
		discourse: {
			api: cleanString(process.env.INTEGRATION_DISCOURSE_TOKEN || ''),
			username: cleanString(process.env.INTEGRATION_DISCOURSE_USERNAME || ''),
			signature: cleanString(
				process.env.INTEGRATION_DISCOURSE_SIGNATURE_KEY || '',
			),
		},
		outreach: {
			appId: cleanString(process.env.INTEGRATION_OUTREACH_APP_ID),
			appSecret: cleanString(process.env.INTEGRATION_OUTREACH_APP_SECRET),
			signature: cleanString(process.env.INTEGRATION_OUTREACH_SIGNATURE_KEY),
		},
		flowdock: {
			api: cleanString(process.env.INTEGRATION_FLOWDOCK_TOKEN),
			signature: cleanString(process.env.INTEGRATION_FLOWDOCK_SIGNATURE_KEY),
		},
		typeform: {
			signature: cleanString(
				process.env.INTEGRATION_TYPEFORM_SIGNATURE_KEY || '',
			),
		},
		'google-meet': {
			credentials: cleanString(process.env.INTEGRATION_GOOGLE_MEET_CREDENTIALS),
		},
	},

	mailgun: {
		token: cleanString(process.env.MAILGUN_TOKEN),
		domain: cleanString(process.env.MAILGUN_DOMAIN),
		baseUrl: cleanString(process.env.MAILGUN_BASE_URL),
	},

	mail: {
		type: cleanString(process.env.MAIL_TYPE),
		options: undefined,
	},

	metrics: {
		token: cleanString(process.env.MONITOR_SECRET_TOKEN),
		ports: {
			app: setNumber(process.env.METRICS_PORT, 9000),
			socket: setNumber(process.env.SOCKET_METRICS_PORT, 9001),
		},
	},

	test: {
		integration: {
			github: {
				repo: cleanString(process.env.TEST_INTEGRATION_GITHUB_REPO),
			},
			front: {
				inboxes: [
					cleanString(process.env.TEST_INTEGRATION_FRONT_INBOX_1 || ''),
					cleanString(process.env.TEST_INTEGRATION_FRONT_INBOX_2 || ''),
				],
			},
			discourse: {
				category: cleanString(process.env.TEST_INTEGRATION_DISCOURSE_CATEGORY),
				username: cleanString(process.env.TEST_INTEGRATION_DISCOURSE_USERNAME),
				nonModeratorUsername: cleanString(
					process.env.TEST_INTEGRATION_DISCOURSE_NON_MODERATOR_USERNAME,
				),
			},
			skip: setBoolean(process.env.TEST_INTEGRATION_SKIP),
		},
		jellyfish: {
			user: cleanString(process.env.JF_TEST_USER),
			password: cleanString(process.env.JF_TEST_PASSWORD),
			url: cleanString(process.env.JF_URL),
		},
		user: {
			username: cleanString(process.env.TEST_USER_USERNAME),
			password: cleanString(process.env.TEST_USER_PASSWORD),
			organization: cleanString(process.env.TEST_USER_ORGANIZATION),
			role: cleanString(process.env.TEST_USER_ROLE),
		},
		ci: setBoolean(process.env.CI),
	},

	actions: {
		resetPasswordSecretToken: cleanString(
			process.env.RESET_PASSWORD_SECRET_TOKEN,
		),
	},

	oauth: {
		redirectBaseUrl: cleanString(process.env.OAUTH_REDIRECT_BASE_URL),
	},

	queue: {
		concurrency: setNumber(process.env.QUEUE_CONCURRENCY, 4),
	},
};

if (environment.isProduction()) {
	environment.sentry.server.dsn = cleanString(process.env.SENTRY_DSN_SERVER);
}

if (environment.database.type === 'postgres') {
	environment.database.options = environment.postgres;
}

if (environment.mail.type === 'mailgun') {
	environment.mail.options = environment.mailgun;
}

if (!environment.redis.password) {
	Reflect.deleteProperty(environment.redis, 'password');
}

export default environment;
