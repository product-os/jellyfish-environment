/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

module.exports = (env) => {
	return {
		accessKeyId: env.getString('AWS_ACCESS_KEY_ID'),
		secretAccessKey: env.getString('AWS_SECRET_ACCESS_KEY'),
		s3BucketName: env.getString('AWS_S3_BUCKET_NAME')
	}
}
