'use strict';

module.exports = function (grunt) {

    require('load-grunt-config')(grunt);

    grunt.initConfig({
        project: {
            app: 'app',
            dist: 'dist'
        },
        jshint: {
            files: ['Gruntfile.js', 'app/scripts/**/*.js', 'test/e2e/*.js', 'test/unit/**/*.js', 'test/*.js'],
            options: {
                ignores: ['app/bower_components/', 'test/bower_components/', 'node_modules/'],
                jshintrc: true
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= project.dist %>'
                    ]
                }]
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
        copy: {
            all: {
                expand: true,
                cwd: 'app/',
                src: ['**/*.html', '**/*.css', '!bower_components/**/*.html', '!bower_components/**/*.css'],
                dest: 'dist/'
            }
        },

        useminPrepare: {
            html: '<%= project.app %>/index.html',
            options: {
                dest: '<%= project.dist %>',
                flow: {
                    html: {
                        steps: {
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            html: ['<%= project.dist %>/index.html'],
            css: ['<%= project.dist %>/css/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= project.dist %>']
            }
        },

        requirejs: {
            dist: {
                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    almond: true,
                    replaceRequireScript: [{
                        files: ['<%= project.dist %>/index.html'],
                        module: 'main'
                    }],
                    modules: [{name: 'main'}],
                    baseUrl: '<%= project.app %>/scripts',
                    dir: '<%= project.dist %>/scripts',
                    optimize: 'uglify',
                    mainConfigFile: '<%= project.app %>/scripts/requirejs-config.js',
                    findNestedDependencies: true,
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true,
                    wrapShim: true,
                    removeCombined: true
                }
            }
        },

        // The following *-min tasks produce minified files in the dist folder
        cssmin: {
            options: {
                root: '<%= project.app %>'
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
                    cwd: '<%= project.dist %>',
                    src: ['*.html'],
                    dest: '<%= project.dist %>'
                }]
            }
        },

        rev: {
            dist: {
                files: {
                    src: [
                        '<%= project.dist %>/css/{,*/}*.css'
                    ]
                }
            }
        },

        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.registerTask('build', [
        'clean',
        'useminPrepare',
        'copy',
        'cssmin',
        'requirejs',
        'rev',
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('serve', [
        'connect:app',
        'watch'
    ]);

    grunt.registerTask('test', [
        'karma'
    ]);
};