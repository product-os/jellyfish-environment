/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const _ = require('lodash')

/**
 * A module that sets up the Jellyfish system configuration using environment variables.
 *
 * @module environment
 */

/**
 * @summary Set environment variable as integer, using fallback if necessary
 * @function
 *
 * @param {String} rawValue - raw value as gotten by process.env
 * @param {Number} fallback - number to fallback to
 * @returns {Number} parsed value or fallback
 *
 * @example
 * const val = setNumber(process.env.MY_VAR, 10)
 */
exports.setNumber = (rawValue, fallback) => {
	const intValue = _.parseInt(rawValue)
	return !_.isNaN(intValue) && intValue !== 0 ? intValue : fallback
}

/**
 * @summary Clean up an environment variable string, remove whitespace and quotes
 * @function
 *
 * @param {String} original - original string
 * @returns {String} cleaned up string
 *
 * @example
 * const result = exports.cleanString(process.env.MY_STRING_VAR)
 */
exports.cleanString = (original) => {
	if (!_.isString(original) || original === '') {
		return original
	}
	return original.replace(/(^\s*"*)|("*\s*$)/g, '')
}
