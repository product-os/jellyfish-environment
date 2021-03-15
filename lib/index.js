/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const {
	Env
} = require('@humanwhocodes/env')
const utils = require('./utils')
const getVariables = require('./variables')

/* eslint-disable no-underscore-dangle */

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
		this.variables = getVariables(this)
	}

	/**
	 * @summary Check if the code is running in a production environment
	 * @function
	 * @public
	 *
	 * @returns {Boolean} Whether the environment is production
	 *
	 * @example
	 * if (environment.isProduction()) {
	 *   console.log('production environment')
	 * }
	 */
	isProduction () {
		return this.env.get('NODE_ENV') === 'production'
	}

	/**
	 * @summary Check if the code is running in a development environment
	 * @function
	 * @public
	 *
	 * @returns {Boolean} Whether the environment is development
	 *
	 * @example
	 * if (environment.isDevelopment()) {
	 *   console.log('development environment')
	 * }
	 */
	isDevelopment () {
		return this.env.get('NODE_ENV') === 'development'
	}

	/**
	 * @summary Check if the code is running in a CI environment
	 * @function
	 * @public
	 *
	 * @returns {Boolean} Whether the environment is a CI system
	 *
	 * @example
	 * if (environment.isCI()) {
	 *   console.log('running in CI')
	 * }
	 */
	isCI () {
		return this.env.has('CI')
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
	result.isProduction = () => {
		return environment.isProduction()
	}
	result.isDevelopment = () => {
		return environment.isDevelopment()
	}
	result.isCI = () => {
		return environment.isCI()
	}
	return result
}

module.exports = init()
module.exports.getEnvironment = init
