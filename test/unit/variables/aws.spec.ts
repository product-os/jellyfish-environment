import { getEnvironment } from '../../../lib';
import * as defaults from '../../../lib/variables/aws/defaults';
import { v4 as uuid } from 'uuid';

const variables = {
	AWS_ACCESS_KEY_ID: uuid(),
	AWS_SECRET_ACCESS_KEY: uuid(),
	AWS_S3_BUCKET_NAME: uuid(),
	AWS_S3_ENDPOINT: uuid(),
};

test('defaults are used for development', () => {
	const environment = getEnvironment({
		NODE_ENV: 'development',
		...variables,
	});
	expect(environment.aws).toEqual({
		accessKeyId: defaults.AWS_ACCESS_KEY_ID,
		secretAccessKey: defaults.AWS_SECRET_ACCESS_KEY,
		s3BucketName: defaults.AWS_S3_BUCKET_NAME,
		s3Endpoint: variables.AWS_S3_ENDPOINT,
	});
});

test('variables are parsed for production', () => {
	const environment = getEnvironment({
		NODE_ENV: 'production',
		...variables,
	});
	expect(environment.aws).toEqual({
		accessKeyId: variables.AWS_ACCESS_KEY_ID,
		secretAccessKey: variables.AWS_SECRET_ACCESS_KEY,
		s3BucketName: variables.AWS_S3_BUCKET_NAME,
	});
});
