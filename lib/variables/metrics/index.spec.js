/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const _ = require('lodash')
const ava = require('ava')
const defaults = require('./defaults')

const variables = {
	MONITOR_SECRET_TOKEN: 'foobar',
	METRICS_PORT: '9100',
	SOCKET_METRICS_PORT: '9101'
}

ava('metrics variables get set', (test) => {
	const environment = require('../../index').getEnvironment(variables)
	test.deepEqual(environment.metrics, {
		token: variables.MONITOR_SECRET_TOKEN,
		ports: {
			app: _.toInteger(variables.METRICS_PORT),
			socket: _.toInteger(variables.SOCKET_METRICS_PORT)
		}
	})
})

ava('metrics ports fallback to defaults', (test) => {
	const environment = require('../../index')
	test.is(environment.metrics.ports.app, defaults.METRICS_PORT)
	test.is(environment.metrics.ports.socket, defaults.SOCKET_METRICS_PORT)
})
