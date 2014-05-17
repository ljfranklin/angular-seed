'use strict';

require.config({
    paths: {
        angular: '../bower_components/angular/angular',
        'angular-route': '../bower_components/angular-route/angular-route',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'angular-animate': '../bower_components/angular-animate/angular-animate',
        'jquery': '../bower_components/jquery/dist/jquery'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        }
    }
});
