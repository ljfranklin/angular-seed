'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'app/scripts/**/*.js', 'test/e2e/*.js', 'test/unit/**/*.js', 'test/*.js'],
            options: {
                ignores: ['app/bower_components/', 'test/bower_components/', 'node_modules/'],
                jshintrc: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};