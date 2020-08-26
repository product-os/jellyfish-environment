/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import environment from '../lib/index';

test(".setBoolean() should return true if raw value is '1'", () => {
	const result = environment.setBoolean('1');
	expect(result).toBe(true);
});

test(".setBoolean() should return false if raw value is '0'", () => {
	const result = environment.setBoolean('0');
	expect(result).toBe(false);
});

test('.setBoolean() should return false if raw value is undefined', () => {
	const result = environment.setBoolean(undefined);
	expect(result).toBe(false);
});

test('.setNumber() should return a number if raw value is parsable as a number', () => {
	const result = environment.setNumber('1234', 10);
	expect(result).toBe(1234);
});

test('.setNumber() should return fallback if raw value is not parsable as a number', () => {
	const result = environment.setNumber('string', 10);
	expect(result).toBe(10);
});

test('.cleanString() should remove leading and trailing whitespace from a string', () => {
	const result = environment.cleanString(' test   ');
	expect(result).toBe('test');
});

test('.cleanString() should remove double-quotes from a string', () => {
	const result = environment.cleanString('"test"');
	expect(result).toBe('test');
});
