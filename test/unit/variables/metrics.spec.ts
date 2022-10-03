import { getEnvironment } from '../../../lib';
import * as defaults from '../../../lib/variables/metrics/defaults';
import { v4 as uuid } from 'uuid';

const variables = {
	MONITOR_SECRET_TOKEN: uuid(),
	METRICS_PORT: '9100',
	SOCKET_METRICS_PORT: '9101',
};

test('variables are parsed', () => {
	const environment = getEnvironment(variables);
	expect(environment.metrics).toEqual({
		token: variables.MONITOR_SECRET_TOKEN,
		ports: {
			app: parseInt(variables.METRICS_PORT, 10),
			socket: parseInt(variables.SOCKET_METRICS_PORT, 10),
		},
	});
});

test('defaults are used', () => {
	const environment = getEnvironment();
	expect(environment.metrics).toEqual({
		token: defaults.MONITOR_SECRET_TOKEN,
		ports: {
			app: defaults.METRICS_PORT,
			socket: defaults.SOCKET_METRICS_PORT,
		},
	});
});
