/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { getEnvironment } from '../../../lib';

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
});
