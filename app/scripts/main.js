'use strict';

require(['requirejs-config'], function() {

    require(['angular', 'app', 'jquery'], function (angular) {
        angular.bootstrap(document, ['myApp']);
    });
});
