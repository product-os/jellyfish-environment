import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

const variables = {
	AWS_ACCESS_KEY_ID: 'foo',
	AWS_SECRET_ACCESS_KEY: 'bar',
	AWS_S3_BUCKET_NAME: 'baz',
	AWS_S3_ENDPOINT: 'http://s3-endpoint.example.com',
};

describe('AWS', () => {
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

	test('variables are set for production', () => {
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
});
