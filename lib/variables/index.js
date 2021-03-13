/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

module.exports = (env) => {
    const variables = {
        actions: require('./actions')(env),
        aws: require('./aws')(env),
        database: require('./database')(env),
        fileStorage: require('./filestorage')(env),
        flags: require('./flags')(env),
        http: require('./http')(env),
        integration: require('./integration')(env),
        livechat: require('./livechat')(env),
        logentries: require('./logentries')(env),
        logger: require('./logger')(env),
        mail: require('./mail')(env),
        mailgun: require('./mailgun')(env),
        metrics: require('./metrics')(env),
        oauth: require('./oauth')(env),
        pod: require('./pod')(env),
        postgres: require('./postgres')(env),
        queue: require('./queue')(env),
        redis: require('./redis')(env),
        sentry: require('./sentry')(env),
        test: require('./test')(env),
        ui: require('./ui')(env)
    }
    variables.database.options = variables[variables.database.type]
    variables.mail.options = variables[variables.mail.type]

    return variables
}
