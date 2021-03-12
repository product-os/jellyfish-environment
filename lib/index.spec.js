/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')

ava.before((test) => {
	test.environment = require('./index')
})

ava('isProduction() returns true if the node environment is `production`', (test) => {
	const environment = require('./index')({
		NODE_ENV: 'production'
	})
	test.true(environment.isProduction())
})

ava('isProduction() returns false if the node environment is not `production`', (test) => {
	const environment = require('./index')({
		NODE_ENV: 'delorean'
	})
	test.false(environment.isProduction())
})

ava('isDevelopment() returns true if the node environment is `development`', (test) => {
	const environment = require('./index')({
		NODE_ENV: 'development'
	})
	test.true(environment.isDevelopment())
})

ava('isDevelopment() returns false if the node environment is not `development`', (test) => {
	const environment = require('./index')({
		NODE_ENV: 'delorean'
	})
	test.false(environment.isDevelopment())
})

ava('.isCI() returns true if the `CI` environment variable is present', (test) => {
	const environment = require('./index')({
		CI: true
	})
	test.true(environment.isCI())
})

ava('.isCI() returns false if the `CI` environment variable is not present', (test) => {
	const environment = require('./index')({})
	test.false(environment.isCI())
})