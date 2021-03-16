/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const _ = require('lodash')
const ava = require('ava')

const variables = {
	QUEUE_CONCURRENCY: '5'
}

ava('queue variables get set', (test) => {
	const environment = require('../../index').getEnvironment(variables)
	test.deepEqual(environment.queue, {
		concurrency: _.toInteger(variables.QUEUE_CONCURRENCY)
	})
})
