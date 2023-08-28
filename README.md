# Jellyfish environment

Environment variable library for Jellyfish.

This module aims to be the startup system configuration hub and exposes any
runtime settings to the rest of the system. Its the only place in the
codebase that should ever read environment variables.

# Usage

Use exported environment variables:
```js
import { defaultEnvironment } from '@balena/jellyfish-environment';
console.log('Metrics Port:', defaultEnvironment.metrics.ports.app);
```

```js
const environment = require('@balena/jellyfish-environment').defaultEnvironment
console.log('Metrics Port:', environment.metrics.ports.app)
```

Inject your own environment:
```js
import { getEnvironment } from '@balena/jellyfish-environment';
const environment = getEnvironment({
    METRICS_PORT: 1234,
});
console.log('Metrics Port:', environment.metrics.ports.app);
```
