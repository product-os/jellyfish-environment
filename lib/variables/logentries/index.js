/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

// TODO: Replace "logentries" with "insight".
module.exports = (env) => {
	return {
		token: env.getString('LOGENTRIES_TOKEN'),
		region: env.getString('LOGENTRIES_REGION')
	}
}
