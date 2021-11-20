import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

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
		host: env.getString('REGISTRY_HOST', defaults.REGISTRY_HOST),
		tokenAuthCertIssuer: env.getString(
			'REGISTRY_TOKEN_AUTH_CERT_ISSUER',
			defaults.REGISTRY_TOKEN_AUTH_CERT_ISSUER,
		),
		tokenAuthJwtAlgo: env.getString(
			'REGISTRY_TOKEN_AUTH_JWT_ALGO',
			defaults.REGISTRY_TOKEN_AUTH_JWT_ALGO,
		),
		tokenAuthCertKey: env.getString(
			'REGISTRY_TOKEN_AUTH_CERT_KEY',
			defaults.REGISTRY_TOKEN_AUTH_CERT_KEY,
		),
		tokenAuthCertKid: env.getString(
			'REGISTRY_TOKEN_AUTH_CERT_KID',
			defaults.REGISTRY_TOKEN_AUTH_CERT_KID,
		),
		insecureHttp: env.getString('REGISTRY_INSECURE_HTTP') === 'true',
	};
}
