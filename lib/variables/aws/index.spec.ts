/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { getEnvironment } from '../../../lib';

const variables = {
	AWS_ACCESS_KEY_ID: 'foo',
	AWS_SECRET_ACCESS_KEY: 'bar',
	AWS_S3_BUCKET_NAME: 'baz',
};

describe('AWS', () => {
	test('variables are set', () => {
		const environment = getEnvironment(variables);
		expect(environment.aws).toEqual({
			accessKeyId: variables.AWS_ACCESS_KEY_ID,
			secretAccessKey: variables.AWS_SECRET_ACCESS_KEY,
			s3BucketName: variables.AWS_S3_BUCKET_NAME,
		});
	});
});
