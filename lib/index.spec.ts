import isEmpty from 'lodash/isEmpty';
import isPlainObject from 'lodash/isPlainObject';
import { getEnvironment } from './index';

describe('isProduction()', () => {
	test('returns true if the node environment is production', () => {
		const environment = getEnvironment({
			NODE_ENV: 'production',
		});
		expect(environment.isProduction()).toBe(true);
	});

	test('returns false if the node environment is not production', () => {
		const environment = getEnvironment({
			NODE_ENV: 'development',
		});
		expect(environment.isProduction()).toBe(false);
	});
});

describe('isDevelopment()', () => {
	test('returns true if the node environment is development', () => {
		const environment = getEnvironment({
			NODE_ENV: 'development',
		});
		expect(environment.isDevelopment()).toBe(true);
	});

	test('returns false if the node environment is not development', () => {
		const environment = getEnvironment({
			NODE_ENV: 'production',
		});
		expect(environment.isDevelopment()).toBe(false);
	});
});

describe('isCI()', () => {
	test('returns true if the CI environment variable is present', () => {
		const environment = getEnvironment({
			CI: 'true',
		});
		expect(environment.isCI()).toBe(true);
	});

	test('returns false if the CI environment variable is not present', () => {
		const environment = getEnvironment({});
		expect(environment.isCI()).toBe(false);
	});
});

describe('getIntegration()', () => {
	test('should return valid data on valid integration name', () => {
		const environment = getEnvironment({
			INTEGRATION_GITHUB_APP_ID: '1234',
		});
		const github = environment.getIntegration('github');
		expect(isPlainObject(github)).toBeTruthy();
		expect(isEmpty(github)).toBeFalsy();
		expect(github.appId).toBe('1234');
	});

	test('should throw an error on invalid integration name', () => {
		const environment = getEnvironment({});
		expect.assertions(1);
		const name = 'foobar';
		try {
			environment.getIntegration(name);
		} catch (error) {
			expect(error).toEqual(
				new Error(`Environment variables not found for integration "${name}"`),
			);
		}
	});
});

describe('returned object', () => {
	test('has all expected keys', () => {
		const environment = getEnvironment({});
		expect(Object.keys(environment)).toEqual([
			'actions',
			'aws',
			'database',
			'fileStorage',
			'flags',
			'http',
			'integration',
			'livechat',
			'logentries',
			'logger',
			'mail',
			'mailgun',
			'metrics',
			'oauth',
			'pod',
			'postgres',
			'queue',
			'redis',
			'registry',
			'sentry',
			'test',
			'ui',
			'isProduction',
			'isDevelopment',
			'isCI',
			'getIntegration',
		]);
	});
});
