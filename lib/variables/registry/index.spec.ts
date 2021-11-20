import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

const variables = {
	REGISTRY_HOST: 'http://foo.bar',
	REGISTRY_TOKEN_AUTH_CERT_ISSUER: 'issuer',
	REGISTRY_TOKEN_AUTH_JWT_ALGO: 'algo',
	REGISTRY_TOKEN_AUTH_CERT_KEY: 'key',
	REGISTRY_TOKEN_AUTH_CERT_KID: 'kid',
	REGISTRY_INSECURE_HTTP: 'true',
};

describe('Queue', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.registry).toEqual({
			host: variables.REGISTRY_HOST,
			tokenAuthCertIssuer: variables.REGISTRY_TOKEN_AUTH_CERT_ISSUER,
			tokenAuthJwtAlgo: variables.REGISTRY_TOKEN_AUTH_JWT_ALGO,
			tokenAuthCertKey: variables.REGISTRY_TOKEN_AUTH_CERT_KEY,
			tokenAuthCertKid: variables.REGISTRY_TOKEN_AUTH_CERT_KID,
			insecureHttp: true,
		});
	});

	test('insecureHttp can return false', () => {
		const environment = getEnvironment();
		expect(environment.registry.insecureHttp).toEqual(false);
	});

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.registry.host).toEqual(defaults.REGISTRY_HOST);
		expect(environment.registry.tokenAuthCertIssuer).toEqual(
			defaults.REGISTRY_TOKEN_AUTH_CERT_ISSUER,
		);
		expect(environment.registry.tokenAuthJwtAlgo).toEqual(
			defaults.REGISTRY_TOKEN_AUTH_JWT_ALGO,
		);
		expect(environment.registry.tokenAuthCertKey).toEqual(
			defaults.REGISTRY_TOKEN_AUTH_CERT_KEY,
		);
		expect(environment.registry.tokenAuthCertKid).toEqual(
			defaults.REGISTRY_TOKEN_AUTH_CERT_KID,
		);
	});
});
