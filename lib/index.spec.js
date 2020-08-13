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

ava('.cleanString() should return a number if passed a number', (test) => {
	const result = environment.cleanString(1234)
	test.is(result, 1234)
})

ava('.cleanString() should remove leading and trailing whitespace from a string', (test) => {
	const result = environment.cleanString(' test   ')
	test.is(result, 'test')
})

ava('.cleanString() should remove double-quotes from a string', (test) => {
	const result = environment.cleanString('"test"')
	test.is(result, 'test')
})

ava('isProduction() returns true if the node environment is `production`', (test) => {
	const fakeEnv = {
		NODE_ENV: 'production'
	}
	test.true(environment.isProduction(fakeEnv))
})

ava('isProduction() returns false if the node environment is not `production`', (test) => {
	const fakeEnv = {
		NODE_ENV: 'delorean'
	}
	test.false(environment.isProduction(fakeEnv))
})

ava('isDevelopment() returns true if the node environment is `development`', (test) => {
	const fakeEnv = {
		NODE_ENV: 'development'
	}
	test.true(environment.isDevelopment(fakeEnv))
})

ava('isDevelopment() returns false if the node environment is not `development`', (test) => {
	const fakeEnv = {
		NODE_ENV: 'delorean'
	}
	test.false(environment.isDevelopment(fakeEnv))
})

ava('.isCI() returns true if the `CI` environment variable is present', (test) => {
	const fakeEnv = {
		CI: true
	}
	test.true(environment.isCI(fakeEnv))
})

ava('.isCI() returns false if the `CI` environment variable is not present', (test) => {
	const fakeEnv = {}
	test.false(environment.isCI(fakeEnv))
})
