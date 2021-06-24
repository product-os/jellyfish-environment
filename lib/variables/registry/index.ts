/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { EnvironmentBuilder } from '../../types';

export interface RegistryOptions {
	host: string;
	tokenAuthCertIssuer: string;
	tokenAuthJwtAlgo: string;
	tokenAuthCertKey: string;
	tokenAuthCertKid: string;
	insecureHttp: boolean;
}

export function GetRegistry(env: EnvironmentBuilder): RegistryOptions {
	return {
		host: env.getString('REGISTRY_HOST'),
		tokenAuthCertIssuer: env.getString('REGISTRY_TOKEN_AUTH_CERT_ISSUER'),
		tokenAuthJwtAlgo: env.getString('REGISTRY_TOKEN_AUTH_JWT_ALGO'),
		tokenAuthCertKey: env.getString('REGISTRY_TOKEN_AUTH_CERT_KEY'),
		tokenAuthCertKid: env.getString('REGISTRY_TOKEN_AUTH_CERT_KID'),
		insecureHttp: env.getString('REGISTRY_INSECURE_HTTP') === 'true',
	};
}
