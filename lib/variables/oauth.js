/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

module.exports = (env) => {
	return {
		redirectBaseUrl: env.getString('OAUTH_REDIRECT_BASE_URL')
	}
}