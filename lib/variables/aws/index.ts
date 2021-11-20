import { EnvironmentBuilder } from '../../types';
import * as defaults from './defaults';

export interface AWS {
	accessKeyId: string;
	secretAccessKey: string;
	s3BucketName: string;
}

export function GetAWS(env: EnvironmentBuilder): AWS {
	return {
		accessKeyId: env.getString('AWS_ACCESS_KEY_ID', defaults.AWS_ACCESS_KEY_ID),
		secretAccessKey: env.getString(
			'AWS_SECRET_ACCESS_KEY',
			defaults.AWS_SECRET_ACCESS_KEY,
		),
		s3BucketName: env.getString(
			'AWS_S3_BUCKET_NAME',
			defaults.AWS_S3_BUCKET_NAME,
		),
	};
}
