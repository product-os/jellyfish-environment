/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const _ = require('lodash')

module.exports = (env) => {
	const password = env.getString('REDIS_PASSWORD')
	const options = {
		mock: false,
		namespace: env.getString('REDIS_NAMESPACE'),
		port: env.getString('REDIS_PORT'),
		host: env.getString('REDIS_HOST')
	}
	if (!_.isEmpty(password)) {
		options.password = password
	}
	return options
}
