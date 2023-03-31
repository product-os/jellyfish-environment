import { randomUUID } from 'node:crypto';
import { getEnvironment } from '../../../lib';
import { defaults } from '../../../lib/variables/integration';

const variables = {
	INTEGRATION_DEFAULT_USER: randomUUID(),
	INTEGRATION_BALENA_API_PRIVATE_KEY: randomUUID(),
	INTEGRATION_BALENA_API_PUBLIC_KEY_PRODUCTION: randomUUID(),
	INTEGRATION_BALENA_API_PUBLIC_KEY_STAGING: randomUUID(),
	INTEGRATION_BALENA_API_APP_ID: '1234',
	INTEGRATION_BALENA_API_APP_SECRET: randomUUID(),
	INTEGRATION_GITHUB_TOKEN: randomUUID(),
	INTEGRATION_GITHUB_SIGNATURE_KEY: randomUUID(),
	INTEGRATION_GITHUB_PRIVATE_KEY: randomUUID(),
	INTEGRATION_GITHUB_APP_ID: '5678',
	INTEGRATION_FRONT_TOKEN: randomUUID(),
	INTEGRATION_INTERCOM_TOKEN: randomUUID(),
	INTEGRATION_DISCOURSE_TOKEN: randomUUID(),
	INTEGRATION_DISCOURSE_USERNAME: randomUUID(),
	INTEGRATION_DISCOURSE_SIGNATURE_KEY: randomUUID(),
	INTEGRATION_OUTREACH_APP_ID: randomUUID(),
	INTEGRATION_OUTREACH_APP_SECRET: randomUUID(),
	INTEGRATION_OUTREACH_SIGNATURE_KEY: randomUUID(),
	INTEGRATION_JELLYFISH_APP_ID: randomUUID(),
	INTEGRATION_JELLYFISH_APP_SECRET: randomUUID(),
	INTEGRATION_TYPEFORM_SIGNATURE_KEY: randomUUID(),
	INTEGRATION_GOOGLE_MEET_CREDENTIALS: randomUUID(),
	INTEGRATION_STATUSPAGE_PAGES: '1234:5678,foo:bar',
};

test('variables are parsed', () => {
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
		typeform: {
			signature: variables.INTEGRATION_TYPEFORM_SIGNATURE_KEY,
		},
		statuspage: {
			pages: {
				1234: '5678',
				foo: 'bar',
			},
		},
	});
});

test('defaults are used', () => {
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
	expect(environment.integration['typeform'].signature).toEqual(
		defaults.INTEGRATION_TYPEFORM_SIGNATURE_KEY,
	);
	expect(environment.integration['discourse'].signature).toEqual(
		defaults.INTEGRATION_DISCOURSE_SIGNATURE_KEY,
	);
	expect(environment.integration['github'].appId).toEqual(
		defaults.INTEGRATION_GITHUB_APP_ID,
	);
	expect(environment.integration['github'].api).toEqual(
		defaults.INTEGRATION_GITHUB_TOKEN,
	);
	expect(environment.integration['github'].key).toEqual(
		defaults.INTEGRATION_GITHUB_PRIVATE_KEY,
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
	expect(environment.integration['statuspage']).toEqual({
		pages: {
			foobar: 'buzbaz',
		},
	});
});
