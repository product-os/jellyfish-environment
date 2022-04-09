import _ from 'lodash';
import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface AWS {
	accessKeyId: string;
	secretAccessKey: string;
	s3BucketName: string;
	s3Endpoint?: string;
}

export function GetAWS(env: EnvironmentBuilder): AWS {
	const result: AWS = env.isDevelopment
		? {
				accessKeyId: defaults.AWS_ACCESS_KEY_ID,
				secretAccessKey: defaults.AWS_SECRET_ACCESS_KEY,
				s3BucketName: defaults.AWS_S3_BUCKET_NAME,
				s3Endpoint: env.getString('AWS_S3_ENDPOINT', defaults.AWS_S3_ENDPOINT),
		  }
		: {
				accessKeyId: env.getString(
					'AWS_ACCESS_KEY_ID',
					defaults.AWS_ACCESS_KEY_ID,
				),
				secretAccessKey: env.getString(
					'AWS_SECRET_ACCESS_KEY',
					defaults.AWS_SECRET_ACCESS_KEY,
				),
				s3BucketName: env.getString(
					'AWS_S3_BUCKET_NAME',
					defaults.AWS_S3_BUCKET_NAME,
				),
		  };

	if (env.isDevelopment && _.isEmpty(result.s3Endpoint)) {
		result.s3Endpoint = defaults.AWS_S3_ENDPOINT;
	}

	return result;
}
