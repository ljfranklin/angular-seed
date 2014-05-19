'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        project: {
            app: 'app/',
            dist: 'dist/'
        },
        jshint: {
            files: ['Gruntfile.js', 'app/scripts/**/*.js', 'test/e2e/*.js', 'test/unit/**/*.js', 'test/*.js'],
            options: {
                ignores: ['app/bower_components/', 'test/bower_components/', 'node_modules/'],
                jshintrc: true
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        connect: {
            options: {
                port: 8000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: '0.0.0.0'
            },
            app: {
                options: {
                    open: true,
                    base: [
                        //'.tmp',
                        '<%= project.app %>'
                    ]
                }
            },
            test: {
                options: {
                    port: 8001,
                    base: [
                        '.tmp',
                        'test',
                        '<%= project.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    base: '<%= project.dist %>'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: ['*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', [
        'htmlmin'
    ]);

    grunt.registerTask('serve', [
        'connect:app',
        'watch'
    ]);
};