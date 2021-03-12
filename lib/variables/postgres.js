/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

module.exports = (env) => {
	return {
		user: env.getString('POSTGRES_USER'),
		password: env.getString('POSTGRES_PASSWORD'),
		database: env.getString('POSTGRES_DATABASE'),
		port: env.getString('POSTGRES_PORT'),
		host: env.getString('POSTGRES_HOST')
	}
}