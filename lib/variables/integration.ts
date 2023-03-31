import type { EnvironmentBuilder } from '../types';

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
	jellyfish: {
		appId: string;
		appSecret: string;
	};
	typeform: {
		signature: string;
	};
	statuspage: {
		pages: {
			[key: string]: string;
		};
	};
}

export const defaults = {
	INTEGRATION_DEFAULT_USER: 'admin',
	INTEGRATION_BALENA_API_APP_ID: 'foobar',
	INTEGRATION_BALENA_API_APP_SECRET: 'foobar',
	INTEGRATION_BALENA_API_PRIVATE_KEY:
		'LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JR0hBZ0VBTUJNR0J5cUdTTTQ5QWdFR0NDcUdTTTQ5QXdFSEJHMHdhd0lCQVFRZ0lGM1M3TkNkV1MyZXJEU0YKbEcxSnBFTEZid0pNckVURUR0d3ZRMFVSUFh5aFJBTkNBQVNDR1pPcmhZTmhoY1c5YTd5OHNTNStINVFFY2tEaApGK0ZVZUV4Si9UcEtCS256RVBMNVBGNGt0L0JwZVlFNmpoQ3UvUmpjWEhXdE1DOXdRTGpQU1ZXaQotLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tCg==',
	INTEGRATION_BALENA_API_PUBLIC_KEY_PRODUCTION:
		'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFZ2htVHE0V0RZWVhGdld1OHZMRXVmaCtVQkhKQQo0UmZoVkhoTVNmMDZTZ1NwOHhEeStUeGVKTGZ3YVhtQk9vNFFydjBZM0Z4MXJUQXZjRUM0ejBsVm9nPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==',
	INTEGRATION_BALENA_API_PUBLIC_KEY_STAGING: 'foobar',
	INTEGRATION_OUTREACH_APP_ID: 'changeme',
	INTEGRATION_OUTREACH_APP_SECRET: 'changeme',
	INTEGRATION_OUTREACH_SIGNATURE_KEY: 'foobar',
	INTEGRATION_GOOGLE_MEET_CREDENTIALS: '{}',
	INTEGRATION_TYPEFORM_SIGNATURE_KEY: 'foobar',
	INTEGRATION_DISCOURSE_SIGNATURE_KEY: 'EDtPj7LhGe9MvacP',
	INTEGRATION_GITHUB_APP_ID: '1234',
	INTEGRATION_GITHUB_TOKEN: 'foobar',
	INTEGRATION_GITHUB_PRIVATE_KEY: 'Zm9vYmFy',
	INTEGRATION_GITHUB_SIGNATURE_KEY: 'MnDdSk4JT3e6tkiAUdHfD7Mrs6SUrv',
	INTEGRATION_JELLYFISH_APP_ID: 'jellyfish',
	INTEGRATION_JELLYFISH_APP_SECRET: 'changeme',
	INTEGRATION_STATUSPAGE_PAGES: 'foobar:buzbaz',
};

function getStatuspagePages(raw: string): Integration['statuspage']['pages'] {
	if (!raw || !raw.includes(':')) {
		return {};
	}

	const pages = {};
	for (const page of raw.split(',')) {
		const [pageId, token] = page.split(':');
		pages[pageId] = token;
	}
	return pages;
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
		},
		github: {
			api: env.getString(
				'INTEGRATION_GITHUB_TOKEN',
				defaults.INTEGRATION_GITHUB_TOKEN,
			),
			signature: env.getString(
				'INTEGRATION_GITHUB_SIGNATURE_KEY',
				defaults.INTEGRATION_GITHUB_SIGNATURE_KEY,
			),
			key: env
				.getString(
					'INTEGRATION_GITHUB_PRIVATE_KEY',
					defaults.INTEGRATION_GITHUB_PRIVATE_KEY,
				)
				.replace(/\\n/gm, '\n'),
			appId: env.getString(
				'INTEGRATION_GITHUB_APP_ID',
				defaults.INTEGRATION_GITHUB_APP_ID,
			),
		},
		front: {
			api: env.getString('INTEGRATION_FRONT_TOKEN'),
			intercom: env.getString('INTEGRATION_INTERCOM_TOKEN'),
		},
		discourse: {
			api: env.getString('INTEGRATION_DISCOURSE_TOKEN'),
			username: env.getString('INTEGRATION_DISCOURSE_USERNAME'),
			signature: env.getString(
				'INTEGRATION_DISCOURSE_SIGNATURE_KEY',
				defaults.INTEGRATION_DISCOURSE_SIGNATURE_KEY,
			),
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
			signature: env.getString(
				'INTEGRATION_OUTREACH_SIGNATURE_KEY',
				defaults.INTEGRATION_OUTREACH_SIGNATURE_KEY,
			),
		},
		jellyfish: {
			appId: env.getString(
				'INTEGRATION_JELLYFISH_APP_ID',
				defaults.INTEGRATION_JELLYFISH_APP_ID,
			),
			appSecret: env.getString(
				'INTEGRATION_JELLYFISH_APP_SECRET',
				defaults.INTEGRATION_JELLYFISH_APP_SECRET,
			),
		},
		typeform: {
			signature: env.getString(
				'INTEGRATION_TYPEFORM_SIGNATURE_KEY',
				defaults.INTEGRATION_TYPEFORM_SIGNATURE_KEY,
			),
		},
		statuspage: {
			pages: getStatuspagePages(
				env.getString(
					'INTEGRATION_STATUSPAGE_PAGES',
					defaults.INTEGRATION_STATUSPAGE_PAGES,
				),
			),
		},
	};
}
