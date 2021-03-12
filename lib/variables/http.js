/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

module.exports = (env) => {
	return {
		port: env.getString('SERVER_PORT'),
		host: env.getString('SERVER_HOST')
	}
}