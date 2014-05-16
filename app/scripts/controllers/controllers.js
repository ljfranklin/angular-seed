'use strict';

define([
    'angular'
], function(angular) {

    var controllers = angular.module('myApp.controllers', []);

    controllers.controller('MyCtrl1', ['$scope', function($scope) {

    }]);

    controllers.controller('MyCtrl2', ['$scope', function($scope) {

    }]);

    return controllers;
});
