import * as utils from './utils';

describe('setNumber()', () => {
	test('should return a number if raw value is parsable as a number', () => {
		const result = utils.setNumber('1234', 10);
		expect(result).toBe(1234);
	});

	test('should return fallback if raw value is not parsable as a number', () => {
		const result = utils.setNumber('string', 10);
		expect(result).toBe(10);
	});
});

describe('cleanString()', () => {
	test('should remove leading and trailing whitespace from a string', () => {
		const result = utils.cleanString(' test   ');
		expect(result).toBe('test');
	});

	test('should remove double-quotes from a string', () => {
		const result = utils.cleanString('"test"');
		expect(result).toBe('test');
	});
});

describe('setBoolean()', () => {
	test('should return true if string is "1"', () => {
		const result = utils.setBoolean('1', false);
		expect(result).toBe(true);
	});

	test('should return true if string is "true"', () => {
		const result = utils.setBoolean('true', false);
		expect(result).toBe(true);
	});

	test('should return false if string is not "1" or "true"', () => {
		const result = utils.setBoolean('2', true);
		expect(result).toBe(false);
	});

	test('should return provided fallback if string is empty', () => {
		const result = utils.setBoolean('', true);
		expect(result).toBe(true);
	});
});
