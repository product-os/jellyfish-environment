/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const defaults = require('./defaults')

module.exports = (env) => {
	return {
		concurrency: env.getNumber('QUEUE_CONCURRENCY', defaults.QUEUE_CONCURRENCY)
	}
}
