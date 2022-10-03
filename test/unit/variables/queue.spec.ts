import { getEnvironment } from '../../../lib';
import * as defaults from '../../../lib/variables/queue/defaults';

const variables = {
	QUEUE_CONCURRENCY: '5',
};

test('variables are parsed', () => {
	const environment = getEnvironment(variables);
	expect(environment.queue).toEqual({
		concurrency: parseInt(variables.QUEUE_CONCURRENCY, 10),
	});
});

test('defaults are used', () => {
	const environment = getEnvironment();
	expect(environment.queue.concurrency).toEqual(defaults.QUEUE_CONCURRENCY);
});
