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

A module that sets up the Jellyfish system configuration using environment variables.


* [environment](#module_environment)
    * [~Environment](#module_environment..Environment)
        * [new Environment(environment)](#new_module_environment..Environment_new)
        * [.isProduction()](#module_environment..Environment+isProduction) ⇒ <code>Boolean</code>
        * [.isDevelopment()](#module_environment..Environment+isDevelopment) ⇒ <code>Boolean</code>
        * [.isCI()](#module_environment..Environment+isCI) ⇒ <code>Boolean</code>
        * [.getString(name, fallback)](#module_environment..Environment+getString) ⇒ <code>String</code>
        * [.getNumber(name, fallback)](#module_environment..Environment+getNumber) ⇒ <code>Number</code>
        * [.variables()](#module_environment..Environment+variables) ⇒ <code>Object</code>
    * [~init(env)](#module_environment..init) ⇒ <code>Object</code>

<a name="module_environment..Environment"></a>

### environment~Environment
Read and return values for a subset of environment variables.
Can dependency inject environment in constructor, falls back to process.env.

**Kind**: inner class of [<code>environment</code>](#module_environment)  

* [~Environment](#module_environment..Environment)
    * [new Environment(environment)](#new_module_environment..Environment_new)
    * [.isProduction()](#module_environment..Environment+isProduction) ⇒ <code>Boolean</code>
    * [.isDevelopment()](#module_environment..Environment+isDevelopment) ⇒ <code>Boolean</code>
    * [.isCI()](#module_environment..Environment+isCI) ⇒ <code>Boolean</code>
    * [.getString(name, fallback)](#module_environment..Environment+getString) ⇒ <code>String</code>
    * [.getNumber(name, fallback)](#module_environment..Environment+getNumber) ⇒ <code>Number</code>
    * [.variables()](#module_environment..Environment+variables) ⇒ <code>Object</code>

<a name="new_module_environment..Environment_new"></a>

#### new Environment(environment)
Constructor.


| Param | Type | Description |
| --- | --- | --- |
| environment | <code>Object</code> | environment variable object, defaults to process.env |

<a name="module_environment..Environment+isProduction"></a>

#### environment.isProduction() ⇒ <code>Boolean</code>
**Kind**: instance method of [<code>Environment</code>](#module_environment..Environment)  
**Summary**: Check if the code is running in a production environment  
**Returns**: <code>Boolean</code> - Whether the environment is production  
**Access**: public  
**Example**  
```js
if (environment.isProduction()) {
  console.log('production environment')
}
```
<a name="module_environment..Environment+isDevelopment"></a>

#### environment.isDevelopment() ⇒ <code>Boolean</code>
**Kind**: instance method of [<code>Environment</code>](#module_environment..Environment)  
**Summary**: Check if the code is running in a development environment  
**Returns**: <code>Boolean</code> - Whether the environment is development  
**Access**: public  
**Example**  
```js
if (environment.isDevelopment()) {
  console.log('development environment')
}
```
<a name="module_environment..Environment+isCI"></a>

#### environment.isCI() ⇒ <code>Boolean</code>
**Kind**: instance method of [<code>Environment</code>](#module_environment..Environment)  
**Summary**: Check if the code is running in a CI environment  
**Returns**: <code>Boolean</code> - Whether the environment is a CI system  
**Access**: public  
**Example**  
```js
if (environment.isCI()) {
  console.log('running in CI')
}
```
<a name="module_environment..Environment+getString"></a>

#### environment.getString(name, fallback) ⇒ <code>String</code>
**Kind**: instance method of [<code>Environment</code>](#module_environment..Environment)  
**Summary**: Get and return the string value of an environment variable.  
**Returns**: <code>String</code> - environment variable value  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | environment variable name |
| fallback | <code>String</code> | fallback value |

<a name="module_environment..Environment+getNumber"></a>

#### environment.getNumber(name, fallback) ⇒ <code>Number</code>
**Kind**: instance method of [<code>Environment</code>](#module_environment..Environment)  
**Summary**: Get and return the number value of an environment variable.  
**Returns**: <code>Number</code> - environment variable value  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>String</code> |  | environment variable name |
| fallback | <code>Number</code> | <code>0</code> | fallback value |

<a name="module_environment..Environment+variables"></a>

#### environment.variables() ⇒ <code>Object</code>
**Kind**: instance method of [<code>Environment</code>](#module_environment..Environment)  
**Summary**: Read and return environment variables  
**Returns**: <code>Object</code> - Full set of environment variable names and values  
**Access**: public  
<a name="module_environment..init"></a>

### environment~init(env) ⇒ <code>Object</code>
**Kind**: inner method of [<code>environment</code>](#module_environment)  
**Summary**: Create Environment instance and return variables and public functions  
**Returns**: <code>Object</code> - list of environment variables and public functions  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| env | <code>Object</code> | environment object, defaults to process.env |

