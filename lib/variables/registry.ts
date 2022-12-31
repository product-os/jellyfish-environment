import type { EnvironmentBuilder } from '../types';

export interface RegistryOptions {
	host: string;
	tokenAuthCertIssuer: string;
	tokenAuthJwtAlgo: string;
	tokenAuthCertKey: string;
	tokenAuthCertKid: string;
	insecureHttp: boolean;
}

export const defaults = {
	REGISTRY_TOKEN_AUTH_CERT_ISSUER: 'api.ly.fish.local',
	REGISTRY_TOKEN_AUTH_CERT_KEY:
		'LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSU4xWUw1WVRjb3NVVnhHdXlXMGt4cGE0ekxzbEpGQ2JvZUxIUWlpaW1vTkhvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFR0RRQ2FpK1FnNG9GZE9HMXZNdWdtMFA5bTViSUR3R29MNjg1aGVYR0hwZWJVblgxOGQvYwpQUTZGbDBQaklQam9iUzlCNW5oSTF1Y0p3MW8vclE2UXdnPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQo=',
	REGISTRY_TOKEN_AUTH_CERT_KID:
		'UkNVNTo2Q1RaOkJITjc6RlBCUjpKWUJIOjVHRVI6QVdQSDpIRk9aOjZaT0c6VVUzTzo3Q0gzOjZFU0sK',
	REGISTRY_TOKEN_AUTH_JWT_ALGO: 'ES256',
	REGISTRY_HOST: 'registry.ly.fish.local',
};

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
