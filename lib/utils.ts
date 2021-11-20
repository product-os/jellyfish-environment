import isEmpty from 'lodash/isEmpty';

/**
 * @summary Set environment variable as integer, using fallback if necessary
 * @function
 *
 * @param rawValue - raw value as gotten by process.env
 * @param fallback - number to fallback to
 * @returns parsed value or fallback
 *
 * @example
 * ```typescript
 * const value = setNumber(process.env.MY_VAR, 10);
 * ```
 */
export function setNumber(value: string, fallback: number): number {
	const intValue = parseInt(value, 10);
	return !isNaN(intValue) && intValue !== 0 ? intValue : fallback;
}

/**
 * @summary Clean up an environment variable string, remove whitespace and quotes
 * @function
 *
 * @param original - original string
 * @returns cleaned up string
 *
 * @example
 * ```typescript
 * const value = cleanString(process.env.MY_STRING_VAR);
 * ```
 */
export function cleanString(value: string): string {
	return value.replace(/(^\s*"*)|("*\s*$)/g, '');
}

/**
 * @summary Set environment variable as boolean, using fallback if necessary
 * @function
 *
 * @param value - raw value
 * @param fallback - boolean to fallback to, defaulting to false
 * @returns parsed value or fallback
 *
 * @example
 * ```typescript
 * const value = setBoolean('1', true);
 * ```
 */
export function setBoolean(value: string, fallback: boolean): boolean {
	if (isEmpty(value)) {
		return fallback || false;
	}
	return value === '1' || value === 'true';
}
