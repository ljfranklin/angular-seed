'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'app/scripts/**/*.js', 'test/e2e/*.js', 'test/unit/**/*.js', 'test/*.js'],
            options: {
                ignores: ['app/bower_components/', 'test/bower_components/', 'node_modules/'],
                strict: true,
                browser: true,
                node: true,
                globals: {
                    /* mocha */
                    describe: false,
                    it: false,
                    before: false,
                    beforeEach: false,
                    after: false,
                    afterEach: false,
                    /* requirejs */
                    require: false,
                    define: false,
                    /* angularjs */
                    inject: false,
                    /* protractor */
                    protractor: false,
                    browser: false,
                    by: false,
                    element: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};