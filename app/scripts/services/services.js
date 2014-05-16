'use strict';

define([
    'angular'
], function(angular) {

    var services = angular.module('myApp.services', []);

    services.value('version', '0.1');

    return services;
});
