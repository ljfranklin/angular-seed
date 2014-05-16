'use strict';

define([
    'angular'
], function(angular) {

    var directives = angular.module('myApp.directives', []);

    directives.directive('appVersion', ['version', function(version) {
        return function(scope, elm) {
            elm.text(version);
        };
    }]);

    return directives;
});
