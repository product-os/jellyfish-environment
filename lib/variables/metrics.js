/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

module.exports = (env) => {
	return {
		token: env.getString('MONITOR_SECRET_TOKEN'),
		ports: {
			app: env.getNumber('METRICS_PORT', 9000),
			socket: env.getNumber('SOCKET_METRICS_PORT', 9001)
		}
	}
}