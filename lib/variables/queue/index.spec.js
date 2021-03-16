/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const _ = require('lodash')
const ava = require('ava')
const defaults = require('./defaults')

const variables = {
	QUEUE_CONCURRENCY: '5'
}

ava('queue variables get set', (test) => {
	const environment = require('../../index').getEnvironment(variables)
	test.deepEqual(environment.queue, {
		concurrency: _.toInteger(variables.QUEUE_CONCURRENCY)
	})
})

ava('queue concurrency value falls back to default', (test) => {
	const environment = require('../../index')
	test.is(environment.queue.concurrency, defaults.QUEUE_CONCURRENCY)
})
