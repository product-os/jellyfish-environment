import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

const variables = {
	INTEGRATION_DEFAULT_USER: 'admin',
	INTEGRATION_BALENA_API_PRIVATE_KEY: 'key-1',
	INTEGRATION_BALENA_API_PUBLIC_KEY_PRODUCTION: 'key-2',
	INTEGRATION_BALENA_API_PUBLIC_KEY_STAGING: 'key-3',
	INTEGRATION_BALENA_API_APP_ID: '1234',
	INTEGRATION_BALENA_API_APP_SECRET: 'foo',
	INTEGRATION_GITHUB_TOKEN: 'token-1',
	INTEGRATION_GITHUB_SIGNATURE_KEY: 'key-4',
	INTEGRATION_GITHUB_PRIVATE_KEY: 'key-5',
	INTEGRATION_GITHUB_APP_ID: '5678',
	INTEGRATION_FRONT_TOKEN: 'token-2',
	INTEGRATION_INTERCOM_TOKEN: 'token-3',
	INTEGRATION_DISCOURSE_TOKEN: 'token-4',
	INTEGRATION_DISCOURSE_USERNAME: 'user-1',
	INTEGRATION_DISCOURSE_SIGNATURE_KEY: 'key-6',
	INTEGRATION_OUTREACH_APP_ID: 'id-1',
	INTEGRATION_OUTREACH_APP_SECRET: 'secret-1',
	INTEGRATION_OUTREACH_SIGNATURE_KEY: 'key-7',
	INTEGRATION_JELLYFISH_APP_ID: 'id-2',
	INTEGRATION_JELLYFISH_APP_SECRET: 'secret-2',
	INTEGRATION_FLOWDOCK_TOKEN: 'token-5',
	INTEGRATION_FLOWDOCK_SIGNATURE_KEY: 'key-8',
	INTEGRATION_TYPEFORM_SIGNATURE_KEY: 'key-9',
	INTEGRATION_GOOGLE_MEET_CREDENTIALS: 'cred-1',
	INTEGRATION_STATUSPAGE_PAGE_ID: 'statuspage-page-id',
	INTEGRATION_STATUSPAGE_TOKEN: 'statuspage-token',
};

describe('Integration', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.integration).toEqual({
			default: {
				user: variables.INTEGRATION_DEFAULT_USER,
			},
			'balena-api': {
				privateKey: variables.INTEGRATION_BALENA_API_PRIVATE_KEY,
				production: {
					publicKey: variables.INTEGRATION_BALENA_API_PUBLIC_KEY_PRODUCTION,
				},
				staging: {
					publicKey: variables.INTEGRATION_BALENA_API_PUBLIC_KEY_STAGING,
				},
				appId: variables.INTEGRATION_BALENA_API_APP_ID,
				appSecret: variables.INTEGRATION_BALENA_API_APP_SECRET,
			},
			github: {
				api: variables.INTEGRATION_GITHUB_TOKEN,
				signature: variables.INTEGRATION_GITHUB_SIGNATURE_KEY,
				key: variables.INTEGRATION_GITHUB_PRIVATE_KEY,
				appId: variables.INTEGRATION_GITHUB_APP_ID,
			},
			front: {
				api: variables.INTEGRATION_FRONT_TOKEN,
				intercom: variables.INTEGRATION_INTERCOM_TOKEN,
			},
			discourse: {
				api: variables.INTEGRATION_DISCOURSE_TOKEN,
				username: variables.INTEGRATION_DISCOURSE_USERNAME,
				signature: variables.INTEGRATION_DISCOURSE_SIGNATURE_KEY,
			},
			outreach: {
				appId: variables.INTEGRATION_OUTREACH_APP_ID,
				appSecret: variables.INTEGRATION_OUTREACH_APP_SECRET,
				signature: variables.INTEGRATION_OUTREACH_SIGNATURE_KEY,
			},
			jellyfish: {
				appId: variables.INTEGRATION_JELLYFISH_APP_ID,
				appSecret: variables.INTEGRATION_JELLYFISH_APP_SECRET,
			},
			flowdock: {
				api: variables.INTEGRATION_FLOWDOCK_TOKEN,
				signature: variables.INTEGRATION_FLOWDOCK_SIGNATURE_KEY,
			},
			typeform: {
				signature: variables.INTEGRATION_TYPEFORM_SIGNATURE_KEY,
			},
			'google-meet': {
				credentials: variables.INTEGRATION_GOOGLE_MEET_CREDENTIALS,
			},
			statuspage: {
				pageId: variables.INTEGRATION_STATUSPAGE_PAGE_ID,
				api: variables.INTEGRATION_STATUSPAGE_TOKEN,
			},
		});
	});

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.integration.default.user).toEqual(
			defaults.INTEGRATION_DEFAULT_USER,
		);
		expect(environment.integration['balena-api'].appId).toEqual(
			defaults.INTEGRATION_BALENA_API_APP_ID,
		);
		expect(environment.integration['balena-api'].appSecret).toEqual(
			defaults.INTEGRATION_BALENA_API_APP_SECRET,
		);
		expect(environment.integration['balena-api'].privateKey).toEqual(
			defaults.INTEGRATION_BALENA_API_PRIVATE_KEY,
		);
		expect(environment.integration['balena-api'].production.publicKey).toEqual(
			defaults.INTEGRATION_BALENA_API_PUBLIC_KEY_PRODUCTION,
		);
		expect(environment.integration['balena-api'].staging.publicKey).toEqual(
			defaults.INTEGRATION_BALENA_API_PUBLIC_KEY_STAGING,
		);
		expect(environment.integration['outreach'].appId).toEqual(
			defaults.INTEGRATION_OUTREACH_APP_ID,
		);
		expect(environment.integration['outreach'].appSecret).toEqual(
			defaults.INTEGRATION_OUTREACH_APP_SECRET,
		);
		expect(environment.integration['outreach'].signature).toEqual(
			defaults.INTEGRATION_OUTREACH_SIGNATURE_KEY,
		);
		expect(environment.integration['flowdock'].api).toEqual(
			defaults.INTEGRATION_FLOWDOCK_TOKEN,
		);
		expect(environment.integration['flowdock'].signature).toEqual(
			defaults.INTEGRATION_FLOWDOCK_SIGNATURE_KEY,
		);
		expect(environment.integration['google-meet'].credentials).toEqual(
			defaults.INTEGRATION_GOOGLE_MEET_CREDENTIALS,
		);
		expect(environment.integration['typeform'].signature).toEqual(
			defaults.INTEGRATION_TYPEFORM_SIGNATURE_KEY,
		);
		expect(environment.integration['discourse'].signature).toEqual(
			defaults.INTEGRATION_DISCOURSE_SIGNATURE_KEY,
		);
		expect(environment.integration['github'].signature).toEqual(
			defaults.INTEGRATION_GITHUB_SIGNATURE_KEY,
		);
		expect(environment.integration['jellyfish'].appId).toEqual(
			defaults.INTEGRATION_JELLYFISH_APP_ID,
		);
		expect(environment.integration['jellyfish'].appSecret).toEqual(
			defaults.INTEGRATION_JELLYFISH_APP_SECRET,
		);
		expect(environment.integration['statuspage'].pageId).toEqual(
			defaults.INTEGRATION_STATUSPAGE_PAGE_ID,
		);
		expect(environment.integration['statuspage'].api).toEqual(
			defaults.INTEGRATION_STATUSPAGE_TOKEN,
		);
	});
});
