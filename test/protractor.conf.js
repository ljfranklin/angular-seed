'use strict';

exports.config = {

    specs: [
        'e2e/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',

    baseUrl: 'http://localhost:8001/',

    framework: 'mocha',

    mochaOpts: {
        reporter: 'spec',
        slow: 3000,
        defaultTimeoutInterval: 30000
    }
};
