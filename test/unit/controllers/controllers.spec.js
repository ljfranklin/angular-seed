'use strict';

define([
    'chai',
    'angular',
    'mocks',
    'controllers/controllers'
], function(chai) {

    var expect = chai.expect;

    describe('controllers', function() {

        beforeEach(module('myApp.controllers'));

        it('should ....', inject(function($controller) {
            //spec body
            var myCtrl1 = $controller('MyCtrl1', { $scope: {} });
            expect(myCtrl1).to.be.defined;
        }));

        it('should ....', inject(function($controller) {
            //spec body
            var myCtrl2 = $controller('MyCtrl2', { $scope: {} });
            expect(myCtrl2).to.be.defined;
        }));
    });
});
