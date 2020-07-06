/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')
const environment = require('./index')

ava('.setNumber() should return a number if raw value is parsable as a number', (test) => {
	const result = environment.setNumber('1234', 10)
	test.is(result, 1234)
})

ava('.setNumber() should return fallback if raw value is not parsable as a number', (test) => {
	const result = environment.setNumber('string', 10)
	test.is(result, 10)
})
