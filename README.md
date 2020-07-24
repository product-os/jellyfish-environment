# Jellyfish environment

Environment variable library for Jellyfish.

This module aims to be the startup system configuration hub, and it exposes any
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
    * [.setNumber(rawValue, fallback)](#module_environment.setNumber) ⇒ <code>Number</code>
    * [.cleanString(original)](#module_environment.cleanString) ⇒ <code>String</code>
    * [.isProduction()](#module_environment.isProduction) ⇒ <code>Boolean</code>

<a name="module_environment.setNumber"></a>

### environment.setNumber(rawValue, fallback) ⇒ <code>Number</code>
**Kind**: static method of [<code>environment</code>](#module_environment)  
**Summary**: Set environment variable as integer, using fallback if necessary  
**Returns**: <code>Number</code> - parsed value or fallback  

| Param | Type | Description |
| --- | --- | --- |
| rawValue | <code>String</code> | raw value as gotten by process.env |
| fallback | <code>Number</code> | number to fallback to |

**Example**  
```js
const val = setNumber(process.env.MY_VAR, 10)
```
<a name="module_environment.cleanString"></a>

### environment.cleanString(original) ⇒ <code>String</code>
**Kind**: static method of [<code>environment</code>](#module_environment)  
**Summary**: Clean up an environment variable string, remove whitespace and quotes  
**Returns**: <code>String</code> - cleaned up string  

| Param | Type | Description |
| --- | --- | --- |
| original | <code>String</code> | original string |

**Example**  
```js
const result = exports.cleanString(process.env.MY_STRING_VAR)
```
<a name="module_environment.isProduction"></a>

### environment.isProduction() ⇒ <code>Boolean</code>
**Kind**: static method of [<code>environment</code>](#module_environment)  
**Summary**: Check if the code is running in a production environment  
**Returns**: <code>Boolean</code> - Whether the environment is production  
**Access**: public  
**Example**  
```js
if (environment.isProduction()) {
  console.log('Production!')
}
```
