/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

type Endpoint = {
	port: number;
	host: string;
};

export interface DbPostgres extends Endpoint {
	user: string;
	password: string;
	database: string;
}

export type MailMailgun = {
	token: string;
	domain: string;
	baseUrl: string;
};

/**
 * A facade to the environment variables used by Jellyfish.
 */
interface Env {
	/**
	 * Set environment variable as integer, using fallback if necessary
	 *
	 * @param rawValue - raw value as gotten by process.env
	 * @param fallback - value to fallback to
	 * @returns parsed value or fallback
	 *
	 * @example
	 * const val = setBoolean(process.env.MY_VAR, true)
	 */
	setBoolean: (rawValue: string | undefined, fallback?: boolean) => boolean;

	/**
	 * Set environment variable as integer, using fallback if necessary
	 *
	 * @param rawValue - raw value as gotten by process.env
	 * @param fallback - number to fallback to
	 * @returns parsed value or fallback
	 *
	 * @example
	 * const val = setNumber(process.env.MY_VAR, 10)
	 */
	setNumber: (rawValue: string | undefined, fallback?: number) => number;

	/**
	 * Clean up an environment variable string, remove whitespace and quotes
	 *
	 * @param original - original string
	 * @param fallback - string to fallback to
	 * @returns cleaned up string
	 *
	 * @example
	 * ```typescript
	 * const result = cleanString(process.env.MY_STRING_VAR)
	 * ```
	 */
	cleanString: (original: string | undefined, fallback?: string) => string;

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

	logger: {
		/** One of `'debug' | 'info' | 'notice' | 'warning' | 'err' | 'crit' | 'alert' | 'emerg'` */
		loglevel: string;
	};

	sentry: {
		server: {
			dsn: string;
		};
	};

	logentries: {
		token: string;
	};

	http: Endpoint;

	ui: Endpoint;

	livechat: Endpoint;

	postgres: DbPostgres;

	database: {
		/** Currently supported options: `'postgres'` */
		type: string;
		options: DbPostgres | undefined;
	};

	fileStorage: {
		driver: string;
	};

	aws: {
		accessKeyId: string;
		secretAccessKey: string;
		s3BucketName: string;
	};

	redis: {
		mock: boolean;
		namespace: string;
		password: string | undefined;
		port: Endpoint['port'];
		host: Endpoint['host'];
	};

	flags: {
		visual: boolean;
	};

	pod: {
		name: string;
	};

	integration: {
		default: {
			user: string;
		};
		'balena-api': {
			privateKey: string;
			production: {
				publicKey: string;
			};
			staging: {
				publicKey: string;
			};
			appId: string;
			appSecret: string;
			oauthBaseUrl: string;
		};
		github: {
			api: string;
			signature: string;
			key: string;
			appId: string;
		};
		front: {
			api: string;
			intercom: string;
		};
		discourse: {
			api: string;
			username: string;
			signature: string;
		};
		outreach: {
			appId: string;
			appSecret: string;
			signature: string;
		};
		flowdock: {
			api: string;
			signature: string;
		};
		typeform: {
			signature: string;
		};
		'google-meet': {
			credentials: string;
		};
	};

	mailgun: MailMailgun;

	mail: {
		/** Currently supported options: `'mailgun'` */
		type: string;
		options: MailMailgun | undefined;
	};

	metrics: {
		token: string;
		ports: {
			app: Endpoint['port'];
			socket: Endpoint['port'];
		};
	};

	test: {
		integration: {
			github: {
				repo: string;
			};
			front: {
				inboxes: string[];
			};
			discourse: {
				category: string;
				username: string;
				nonModeratorUsername: string;
			};
			skip: boolean;
		};
		jellyfish: {
			user: string;
			password: string;
			url: string;
		};
		user: {
			username: string;
			password: string;
			organization: string;
			role: string;
		};
		ci: boolean;
	};

	actions: {
		resetPasswordSecretToken: string;
	};

	oauth: {
		redirectBaseUrl: string;
	};

	queue: {
		concurrency: number;
	};
}

export default Env;
