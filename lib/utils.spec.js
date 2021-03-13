/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')
const utils = require('./utils')

ava('.setNumber() should return a number if raw value is parsable as a number', (test) => {
	const result = utils.setNumber('1234', 10)
	test.is(result, 1234)
})

ava('.setNumber() should return fallback if raw value is not parsable as a number', (test) => {
	const result = utils.setNumber('string', 10)
	test.is(result, 10)
})

ava('.cleanString() should return a number if passed a number', (test) => {
	const result = utils.cleanString(1234)
	test.is(result, 1234)
})

ava('.cleanString() should remove leading and trailing whitespace from a string', (test) => {
	const result = utils.cleanString(' test   ')
	test.is(result, 'test')
})

ava('.cleanString() should remove double-quotes from a string', (test) => {
	const result = utils.cleanString('"test"')
	test.is(result, 'test')
})
