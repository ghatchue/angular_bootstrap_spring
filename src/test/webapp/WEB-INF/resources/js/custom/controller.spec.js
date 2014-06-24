describe('CustomerController Tests', function() {
    var $rootScope, createController;

    beforeEach(function() {

        // load the module.
        module('app');

        inject(function(_$rootScope_, _$controller_) {

            $rootScope = _$rootScope_;

            createController = function () {
                return _$controller_('CustomerController', {'$scope': $rootScope });
            };
        });
    });

    // check to see if it has the expected function
    it('should have an init function in scope', function () {
        createController();

        expect(angular.isFunction($rootScope.init)).toBe(true);
    });

    // check to see if it has the expected function
    it('should have an save function in scope', function () {
        createController();

        expect(angular.isFunction($rootScope.save)).toBe(true);
    });

    // check to see if it has the expected function
    it('should have an delete function in scope', function () {
        createController();

        expect(angular.isFunction($rootScope.delete)).toBe(true);
    });
});

describe('MainController Tests', function() {
    var $rootScope, createController;

    beforeEach(function() {

        // load the module.
        module('app');

        inject(function(_$rootScope_, _$controller_) {

            $rootScope = _$rootScope_;

            createController = function () {
                return _$controller_('MainController', {'$scope': $rootScope });
            };
        });
    });

    // check to see if it has the expected function
    it('should have an logout function in scope', function () {
        createController();

        expect(angular.isFunction($rootScope.logout)).toBe(true);
    });
});

describe('LoginController Tests', function() {
    var $rootScope, createController;

    beforeEach(function() {

        // load the module.
        module('app');

        inject(function(_$rootScope_, _$controller_) {

            $rootScope = _$rootScope_;

            createController = function () {
                return _$controller_('LoginController', {'$scope': $rootScope });
            };
        });
    });

    // check to see if it has the expected function
    it('should have an login function in scope', function () {
        createController();

        expect(angular.isFunction($rootScope.login)).toBe(true);
    });
});