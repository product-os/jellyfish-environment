/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

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
			'sentry',
			'test',
			'ui',
			'isProduction',
			'isDevelopment',
			'isCI',
		]);
	});
});
