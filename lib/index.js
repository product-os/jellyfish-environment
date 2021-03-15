/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const path = require('path')
const {
	Env
} = require('@humanwhocodes/env')
const utils = require('./utils')

/**
 * A module that sets up the Jellyfish system configuration using environment variables.
 *
 * @module environment
 */

/**
 * Read and return values for a subset of environment variables.
 * Can dependency inject environment in constructor, falls back to process.env.
 */
class Environment {
	/**
	 * Constructor.
	 *
	 * @param {Object} environment - environment variable object, defaults to process.env
	 */
	constructor (environment = process.env) {
		this.env = new Env(environment)
		this.isProduction = () => {
			return this.env.get('NODE_ENV') === 'production'
		}
		this.isDevelopment = () => {
			return this.env.get('NODE_ENV') === 'development'
		}
		this.isCI = () => {
			return this.env.has('CI')
		}
		this.variables = this.getVariables()
	}

	/**
	 * @summary Get and return the string value of an environment variable.
	 * @function
	 * @public
	 *
	 * @param {String} name - environment variable name
	 * @param {String} fallback - fallback value
	 * @returns {String} environment variable value
	 */
	getString (name, fallback = '') {
		return utils.cleanString(this.env.get(name, fallback))
	}

	/**
	 * @summary Get and return the number value of an environment variable.
	 * @function
	 * @public
	 *
	 * @param {String} name - environment variable name
	 * @param {Number} fallback - fallback value
	 * @returns {Number} environment variable value
	 */
	getNumber (name, fallback = 0) {
		return utils.setNumber(this.env.get(name), fallback)
	}

	/**
	 * @summary Read and return environment variables
	 * @function
	 * @public
	 *
	 * @returns {Object} Full set of environment variable names and values
	 */
	getVariables () {
		if (!this.variables) {
			this.variables = require(path.join(__dirname, 'variables'))(this)
		}
		return this.variables
	}
}

/**
 * @summary Create Environment instance and return variables and public functions
 * @function
 * @public
 *
 * @param {Object} env - environment object, defaults to process.env
 * @returns {Object} list of environment variables and public functions
 */
const init = (env = process.env) => {
	const environment = new Environment(env)
	const result = environment.variables
	result.isProduction = environment.isProduction
	result.isDevelopment = environment.isDevelopment
	result.isCI = environment.isCI
	return result
}

module.exports = init()
module.exports.getEnvironment = init
