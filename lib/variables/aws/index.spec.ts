import { getEnvironment } from '../../../lib';
import * as defaults from './defaults';

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

	test('defaults are set', () => {
		const environment = getEnvironment();
		expect(environment.aws).toEqual({
			accessKeyId: defaults.AWS_ACCESS_KEY_ID,
			secretAccessKey: defaults.AWS_SECRET_ACCESS_KEY,
			s3BucketName: defaults.AWS_S3_BUCKET_NAME,
		});
	});
});
