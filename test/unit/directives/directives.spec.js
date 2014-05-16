'use strict';

define([
    'chai',
    'angular',
    'mocks',
    'directives/directives'
], function(chai) {

    var expect = chai.expect;

    describe('directives', function() {

        beforeEach(module('myApp.directives'));

        describe('app-version', function() {

            beforeEach(function() {
                module(function($provide) {
                    $provide.value('version', 'TEST_VER');
                });
            });

            it('should print current version', inject(function($compile, $rootScope) {
                var element = $compile('<span app-version></span>')($rootScope);
                expect(element.text()).to.equal('TEST_VER');
            }));
        });
    });
});
