import { randomUUID } from 'node:crypto';
import { getEnvironment } from '../../../lib';
import { defaults } from '../../../lib/variables/aws';

const variables = {
	AWS_ACCESS_KEY_ID: randomUUID(),
	AWS_SECRET_ACCESS_KEY: randomUUID(),
	AWS_S3_BUCKET_NAME: randomUUID(),
	AWS_S3_ENDPOINT: randomUUID(),
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
