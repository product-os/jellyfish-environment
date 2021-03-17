/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')

const variables = {
	AWS_ACCESS_KEY_ID: 'foo',
	AWS_SECRET_ACCESS_KEY: 'bar',
	AWS_S3_BUCKET_NAME: 'baz'
}

ava('aws variables get set', (test) => {
	const environment = require('../../index').getEnvironment(variables)
	test.deepEqual(environment.aws, {
		accessKeyId: variables.AWS_ACCESS_KEY_ID,
		secretAccessKey: variables.AWS_SECRET_ACCESS_KEY,
		s3BucketName: variables.AWS_S3_BUCKET_NAME
	})
})
