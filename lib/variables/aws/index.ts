/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { EnvironmentBuilder } from '../../types';

export interface AWS {
	accessKeyId: string;
	secretAccessKey: string;
	s3BucketName: string;
}

export function GetAWS(env: EnvironmentBuilder): AWS {
	return {
		accessKeyId: env.getString('AWS_ACCESS_KEY_ID'),
		secretAccessKey: env.getString('AWS_SECRET_ACCESS_KEY'),
		s3BucketName: env.getString('AWS_S3_BUCKET_NAME'),
	};
}
