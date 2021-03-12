/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

module.exports = (env) => {
	const server = {}
	if (env.isProduction()) {
		server.dsn = env.getString('SENTRY_DSN_SERVER')
	}
	return {
		server
	}
}