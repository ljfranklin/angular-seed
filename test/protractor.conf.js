'use strict';

exports.config = {

    specs: [
        'e2e/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8001/',

    framework: 'mocha',

    mochaOpts: {
        reporter: 'spec',
        slow: 3000,
        defaultTimeoutInterval: 30000
    }
};
