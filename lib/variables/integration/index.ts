import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface Integration {
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
}

export function GetIntegration(env: EnvironmentBuilder): Integration {
	return {
		default: {
			user: env.getString(
				'INTEGRATION_DEFAULT_USER',
				defaults.INTEGRATION_DEFAULT_USER,
			),
		},
		'balena-api': {
			privateKey: env.getString(
				'INTEGRATION_BALENA_API_PRIVATE_KEY',
				defaults.INTEGRATION_BALENA_API_PRIVATE_KEY,
			),
			production: {
				publicKey: env.getString(
					'INTEGRATION_BALENA_API_PUBLIC_KEY_PRODUCTION',
					defaults.INTEGRATION_BALENA_API_PUBLIC_KEY_PRODUCTION,
				),
			},
			staging: {
				publicKey: env.getString(
					'INTEGRATION_BALENA_API_PUBLIC_KEY_STAGING',
					defaults.INTEGRATION_BALENA_API_PUBLIC_KEY_STAGING,
				),
			},
			appId: env.getString(
				'INTEGRATION_BALENA_API_APP_ID',
				defaults.INTEGRATION_BALENA_API_APP_ID,
			),
			appSecret: env.getString(
				'INTEGRATION_BALENA_API_APP_SECRET',
				defaults.INTEGRATION_BALENA_API_APP_SECRET,
			),
			oauthBaseUrl: env.getString(
				'INTEGRATION_BALENA_API_OAUTH_BASE_URL',
				defaults.INTEGRATION_BALENA_API_OAUTH_BASE_URL,
			),
		},
		github: {
			api: env.getString('INTEGRATION_GITHUB_TOKEN'),
			signature: env.getString('INTEGRATION_GITHUB_SIGNATURE_KEY'),
			key: env
				.getString('INTEGRATION_GITHUB_PRIVATE_KEY')
				.replace(/\\n/gm, '\n'),
			appId: env.getString('INTEGRATION_GITHUB_APP_ID'),
		},
		front: {
			api: env.getString('INTEGRATION_FRONT_TOKEN'),
			intercom: env.getString('INTEGRATION_INTERCOM_TOKEN'),
		},
		discourse: {
			api: env.getString('INTEGRATION_DISCOURSE_TOKEN'),
			username: env.getString('INTEGRATION_DISCOURSE_USERNAME'),
			signature: env.getString('INTEGRATION_DISCOURSE_SIGNATURE_KEY'),
		},
		outreach: {
			appId: env.getString(
				'INTEGRATION_OUTREACH_APP_ID',
				defaults.INTEGRATION_OUTREACH_APP_ID,
			),
			appSecret: env.getString(
				'INTEGRATION_OUTREACH_APP_SECRET',
				defaults.INTEGRATION_OUTREACH_APP_SECRET,
			),
			signature: env.getString('INTEGRATION_OUTREACH_SIGNATURE_KEY'),
		},
		flowdock: {
			api: env.getString('INTEGRATION_FLOWDOCK_TOKEN'),
			signature: env.getString('INTEGRATION_FLOWDOCK_SIGNATURE_KEY'),
		},
		typeform: {
			signature: env.getString('INTEGRATION_TYPEFORM_SIGNATURE_KEY'),
		},
		'google-meet': {
			credentials: env.getString('INTEGRATION_GOOGLE_MEET_CREDENTIALS'),
		},
	};
}
