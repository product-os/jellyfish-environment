/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const {
	Env
} = require('@humanwhocodes/env')
const utils = require('./utils')

class Environment {
	constructor (environment = process.env) {
		this.env = new Env(environment)
		this.variables = this.loadVariables()
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
	 * @summary Check if the code is running in a production environment
	 * @function
	 * @public
	 *
	 * @returns {Boolean} Whether the environment is production
	 */
	isProduction () {
		return this.getString('NODE_ENV') === 'production'
	}

	/**
	 * @summary Check if the code is running in a development environment
	 * @function
	 * @public
	 *
	 * @returns {Boolean} Whether the environment is development
	 */
	isDevelopment () {
		return this.getString('NODE_ENV') === 'development'
	}

	/**
	 * @summary Check if the code is running in a CI environment
	 * @function
	 * @public
	 *
	 * @param {Object} env - env instance
	 * @returns {Boolean} Whether the environment is a CI system
	 */
	isCI () {
		return this.env.has('CI')
	}

	/**
	 * @summary Read and return environment variables
	 * @function
	 * @public
	 * 
	 * @returns {Object} Full set of environment variable names and values
	 */
	getVariables () {
		const variables = {}
		fs.readdirSync('./variables').forEach((fileName) => {
			const group = path.parse(fileName).name
			variables[group] = require(`./variables/${group}`)(this)
		})
		return variables
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