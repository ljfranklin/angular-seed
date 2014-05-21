'use strict';

exports.config = {

    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,

    specs: [
        'e2e/*.js'
    ],

    capabilities: {
        'browserName': 'chrome',
        'name': 'Angular Seed Stack Protractor Tests',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        'build': process.env.TRAVIS_BUILD_NUMBER,
    },

    baseUrl: 'http://localhost:8001/',

    framework: 'mocha',

    mochaOpts: {
        reporter: 'spec',
        slow: 3000,
        defaultTimeoutInterval: 30000
    }
};
