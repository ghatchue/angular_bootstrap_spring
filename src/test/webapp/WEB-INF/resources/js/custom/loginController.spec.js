describe('LoginController Tests', function() {

    var $rootScope, $controller;

    beforeEach(function() {

        // load the module.
        module('app');

        inject(function(_$rootScope_, _$controller_) {

            $rootScope = _$rootScope_;

            $controller = _$controller_('LoginController', {'$scope': $rootScope });
        });
    });

    it('should have an login function in scope', function () {
        expect(angular.isFunction($rootScope.login)).toBe(true);
    });
});