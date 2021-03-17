/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

module.exports = (env) => {
	return {
		default: {
			user: env.getString('INTEGRATION_DEFAULT_USER')
		},
		'balena-api': {
			privateKey: env.getString('INTEGRATION_BALENA_API_PRIVATE_KEY'),
			production: {
				publicKey: env.getString('INTEGRATION_BALENA_API_PUBLIC_KEY_PRODUCTION')
			},
			staging: {
				publicKey: env.getString('INTEGRATION_BALENA_API_PUBLIC_KEY_STAGING')
			},
			appId: env.getString('INTEGRATION_BALENA_API_APP_ID'),
			appSecret: env.getString('INTEGRATION_BALENA_API_APP_SECRET'),
			oauthBaseUrl: env.getString('INTEGRATION_BALENA_API_OAUTH_BASE_URL')
		},
		github: {
			api: env.getString('INTEGRATION_GITHUB_TOKEN'),
			signature: env.getString('INTEGRATION_GITHUB_SIGNATURE_KEY'),
			key: env.getString('INTEGRATION_GITHUB_PRIVATE_KEY').replace(/\\n/gm, '\n'),
			appId: env.getString('INTEGRATION_GITHUB_APP_ID')
		},
		front: {
			api: env.getString('INTEGRATION_FRONT_TOKEN'),
			intercom: env.getString('INTEGRATION_INTERCOM_TOKEN')
		},
		discourse: {
			api: env.getString('INTEGRATION_DISCOURSE_TOKEN'),
			username: env.getString('INTEGRATION_DISCOURSE_USERNAME'),
			signature: env.getString('INTEGRATION_DISCOURSE_SIGNATURE_KEY')
		},
		outreach: {
			appId: env.getString('INTEGRATION_OUTREACH_APP_ID'),
			appSecret: env.getString('INTEGRATION_OUTREACH_APP_SECRET'),
			signature: env.getString('INTEGRATION_OUTREACH_SIGNATURE_KEY')
		},
		flowdock: {
			api: env.getString('INTEGRATION_FLOWDOCK_TOKEN'),
			signature: env.getString('INTEGRATION_FLOWDOCK_SIGNATURE_KEY')
		},
		typeform: {
			signature: env.getString('INTEGRATION_TYPEFORM_SIGNATURE_KEY')
		},
		'google-meet': {
			credentials: env.getString('INTEGRATION_GOOGLE_MEET_CREDENTIALS')
		}
	}
}
