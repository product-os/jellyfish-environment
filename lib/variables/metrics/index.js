/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const defaults = require('./defaults')

module.exports = (env) => {
	return {
		token: env.getString('MONITOR_SECRET_TOKEN'),
		ports: {
			app: env.getNumber('METRICS_PORT', defaults.METRICS_PORT),
			socket: env.getNumber('SOCKET_METRICS_PORT', defaults.SOCKET_METRICS_PORT)
		}
	}
}
