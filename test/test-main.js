var allTestFiles = [];
var TEST_REGEXP = /\.spec\.js$/;

var pathToModule = function(path) {
    return path.replace(/^\/base\//, '../../').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
    console.log(file);
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

allTestFiles.push('requirejs-config');

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/app/scripts',

    // example of using shim, to load non AMD libraries (such as underscore and jquery)
    paths: {
        'angular': '../../test/bower_components/angular/angular',
        'mocks': '../../test/bower_components/angular-mocks/angular-mocks',
        'app': 'app',
        'chai': '../../test/bower_components/chai/chai',
        'chai-as-promised': '../../test/bower_components/chai-as-promised/lib/chai-as-promised'
    },

    shim: {
        mocks: {
            deps: ['angular'],
            exports: 'mocks'
        }
    },

    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});