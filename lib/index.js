/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const _ = require('lodash')

/**
 * A module that sets up the Jellyfish system configuration using environment variables.
 *
 * @module environment
 */

/**
 * @summary Set environment variable as integer, using fallback if necessary
 * @function
 *
 * @param {String} rawValue - raw value as gotten by process.env
 * @param {Number} fallback - number to fallback to
 * @returns {Number} parsed value or fallback
 *
 * @example
 * const val = setNumber(process.env.MY_VAR, 10)
 */
exports.setNumber = (rawValue, fallback) => {
	const intValue = _.parseInt(rawValue)
	return !_.isNaN(intValue) && intValue !== 0 ? intValue : fallback
}

/**
 * @summary Clean up an environment variable string, remove whitespace and quotes
 * @function
 *
 * @param {String} original - original string
 * @returns {String} cleaned up string
 *
 * @example
 * const result = exports.cleanString(process.env.MY_STRING_VAR)
 */
exports.cleanString = (original) => {
	if (!_.isString(original) || original === '') {
		return original
	}
	return original.replace(/(^\s*"*)|("*\s*$)/g, '')
}

/**
 * @summary Check if the code is running in a production environment
 * @function
 * @public
 *
 * @returns {Boolean} Whether the environment is production
 *
 * @example
 * if (environment.isProduction()) {
 *   console.log('Production!')
 * }
 */
exports.isProduction = () => {
	return process.env.NODE_ENV === 'production'
}

exports.logger = {
	loglevel: process.env.LOGLEVEL
}

exports.sentry = {
	server: {}
}

if (exports.isProduction()) {
	exports.sentry.server.dsn = process.env.SENTRY_DSN_SERVER
}

exports.logentries = {
	token: process.env.LOGENTRIES_TOKEN
}

exports.http = {
	port: process.env.SERVER_PORT,
	host: process.env.SERVER_HOST
}

exports.ui = {
	port: process.env.UI_PORT,
	host: process.env.UI_HOST
}

exports.livechat = {
	host: process.env.LIVECHAT_HOST,
	port: process.env.LIVECHAT_PORT
}

exports.postgres = {
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DATABASE,
	port: process.env.POSTGRES_PORT,
	host: process.env.POSTGRES_HOST
}

exports.database = {
	type: process.env.DATABASE
}

exports.database.options = exports[exports.database.type]

exports.fileStorage = {
	driver: process.env.FS_DRIVER
}

exports.aws = {
	accessKeyId: exports.cleanString(process.env.AWS_ACCESS_KEY_ID),
	secretAccessKey: exports.cleanString(process.env.AWS_SECRET_ACCESS_KEY),
	s3BucketName: exports.cleanString(process.env.AWS_S3_BUCKET_NAME)
}

exports.redis = {
	mock: false,
	namespace: process.env.REDIS_NAMESPACE,
	password: process.env.REDIS_PASSWORD || null,
	port: process.env.REDIS_PORT,
	host: process.env.REDIS_HOST
}

if (!exports.redis.password) {
	Reflect.deleteProperty(exports.redis, 'password')
}

exports.flags = {
	visual: process.env.VISUAL
}

exports.pod = {
	name: process.env.POD_NAME
}

exports.integration = {
	default: {
		user: exports.cleanString(process.env.INTEGRATION_DEFAULT_USER)
	},
	'balena-api': {
		privateKey: exports.cleanString(process.env.INTEGRATION_BALENA_API_PRIVATE_KEY),
		production: {
			publicKey: exports.cleanString(process.env.INTEGRATION_BALENA_API_PUBLIC_KEY_PRODUCTION)
		},
		staging: {
			publicKey: exports.cleanString(process.env.INTEGRATION_BALENA_API_PUBLIC_KEY_STAGING)
		},
		appId: exports.cleanString(process.env.INTEGRATION_BALENA_API_APP_ID),
		appSecret: exports.cleanString(process.env.INTEGRATION_BALENA_API_APP_SECRET),
		oauthBaseUrl: exports.cleanString(process.env.INTEGRATION_BALENA_API_OAUTH_BASE_URL)
	},
	github: {
		api: exports.cleanString(process.env.INTEGRATION_GITHUB_TOKEN || ''),
		signature: exports.cleanString(process.env.INTEGRATION_GITHUB_SIGNATURE_KEY || ''),
		key: exports.cleanString(process.env.INTEGRATION_GITHUB_PRIVATE_KEY || '').replace(/\\n/gm, '\n'),
		appId: exports.cleanString(process.env.INTEGRATION_GITHUB_APP_ID)
	},
	front: {
		api: exports.cleanString(process.env.INTEGRATION_FRONT_TOKEN || ''),
		intercom: exports.cleanString(process.env.INTEGRATION_INTERCOM_TOKEN || '')
	},
	discourse: {
		api: exports.cleanString(process.env.INTEGRATION_DISCOURSE_TOKEN || ''),
		username: exports.cleanString(process.env.INTEGRATION_DISCOURSE_USERNAME || ''),
		signature: exports.cleanString(process.env.INTEGRATION_DISCOURSE_SIGNATURE_KEY || '')
	},
	outreach: {
		appId: exports.cleanString(process.env.INTEGRATION_OUTREACH_APP_ID),
		appSecret: exports.cleanString(process.env.INTEGRATION_OUTREACH_APP_SECRET),
		signature: exports.cleanString(process.env.INTEGRATION_OUTREACH_SIGNATURE_KEY)
	},
	flowdock: {
		api: exports.cleanString(process.env.INTEGRATION_FLOWDOCK_TOKEN),
		signature: exports.cleanString(process.env.INTEGRATION_FLOWDOCK_SIGNATURE_KEY)
	},
	typeform: {
		signature: exports.cleanString(process.env.INTEGRATION_TYPEFORM_SIGNATURE_KEY || '')
	},
	'google-meet': {
		credentials: process.env.INTEGRATION_GOOGLE_MEET_CREDENTIALS
	}
}

exports.mailgun = {
	token: process.env.MAILGUN_TOKEN,
	domain: process.env.MAILGUN_DOMAIN,
	baseUrl: process.env.MAILGUN_BASE_URL
}

exports.mail = {
	type: process.env.MAIL_TYPE
}

exports.mail.options = exports[exports.mail.type]

exports.metrics = {
	token: exports.cleanString(process.env.MONITOR_SECRET_TOKEN),
	ports: {
		app: exports.setNumber(process.env.METRICS_PORT, 9000),
		socket: exports.setNumber(process.env.SOCKET_METRICS_PORT, 9001)
	}
}

exports.test = {
	integration: {
		github: {
			repo: exports.cleanString(process.env.TEST_INTEGRATION_GITHUB_REPO)
		},
		front: {
			inboxes: [
				exports.cleanString(process.env.TEST_INTEGRATION_FRONT_INBOX_1 || ''),
				exports.cleanString(process.env.TEST_INTEGRATION_FRONT_INBOX_2 || '')
			]
		},
		discourse: {
			category: exports.cleanString(process.env.TEST_INTEGRATION_DISCOURSE_CATEGORY),
			username: exports.cleanString(process.env.TEST_INTEGRATION_DISCOURSE_USERNAME),
			nonModeratorUsername: exports.cleanString(process.env.TEST_INTEGRATION_DISCOURSE_NON_MODERATOR_USERNAME)
		},
		skip: exports.setNumber(process.env.TEST_INTEGRATION_SKIP, 0)
	},
	jellyfish: {
		user: exports.cleanString(process.env.JF_TEST_USER),
		password: exports.cleanString(process.env.JF_TEST_PASSWORD),
		url: exports.cleanString(process.env.JF_URL)
	},
	user: {
		username: exports.cleanString(process.env.TEST_USER_USERNAME),
		password: exports.cleanString(process.env.TEST_USER_PASSWORD),
		organization: exports.cleanString(process.env.TEST_USER_ORGANIZATION),
		role: exports.cleanString(process.env.TEST_USER_ROLE)
	}
}

exports.actions = {
	resetPasswordSecretToken: process.env.RESET_PASSWORD_SECRET_TOKEN
}

exports.oauth = {
	redirectBaseUrl: exports.cleanString(process.env.OAUTH_REDIRECT_BASE_URL)
}

exports.queue = {
	concurrency: exports.setNumber(process.env.QUEUE_CONCURRENCY, 4)
}
