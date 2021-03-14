# Jellyfish environment

Environment variable library for Jellyfish.

This module aims to be the startup system configuration hub and exposes any
runtime settings to the rest of the system. Its the only place in the
codebase that should ever read environment variables.

# Usage

Below is an example how to use this library:

```js
const environment = require('@balena/jellyfish-environment')

console.log(`Metrics Token: ${environment.metrics.token}`)
```

# Documentation

ERROR, Cannot find module.