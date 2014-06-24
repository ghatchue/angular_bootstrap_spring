describe('CustomerController Tests', function() {
    var $rootScope, $controller, mockCustomerService, deferred, spyPromise;

    beforeEach(function() { module('app'); });

    beforeEach(
        inject(function(_$rootScope_, _$controller_, _$q_) {

            $rootScope = _$rootScope_.$new();

            //create a promise for the spy to return to mock the async calls to the service
            deferred = _$q_.defer();
            spyPromise = deferred.promise;

            //create spy for the service being called so it is mocked out
            mockCustomerService = jasmine.createSpyObj('CustomerService',['getCustomers', 'deleteCustomer', 'saveCustomer']);

            // initialize controller
            $controller = _$controller_('CustomerController', {'$scope': $rootScope, CustomerService : mockCustomerService });
        })
    );

    describe('CustomerController Structural Tests', function() {

        // check to see if it has the expected function
        it('should have an init function in scope', function () {
           expect(angular.isFunction($rootScope.init)).toBe(true);
        });

        // check to see if it has the expected function
        it('should have an save function in scope', function () {
            expect(angular.isFunction($rootScope.save)).toBe(true);
        });

        // check to see if it has the expected function
        it('should have an delete function in scope', function () {
            expect(angular.isFunction($rootScope.delete)).toBe(true);
        });
    });

    describe('CustomerController Customers Tests', function() {

        beforeEach(function() {
            //setup the spy to always return the spyPromise for the entire test spec
            mockCustomerService.getCustomers.and.returnValue(spyPromise);
        });

        // check that the customers starts undefined
        it('should initially has customers undefined before any calls are made', function(){
            expect($rootScope.customers).toEqual(undefined);
        });

        // check that scope variable is populated
        it('should have scope variable customers populated', function () {
            $rootScope.init();

            deferred.resolve([
                {"id": 1, "firstName": "Foo", "lastName": "Bar"},
                {"id": 2, "firstName": "Jim", "lastName": "Sunny"},
                {"id": 3, "firstName": "Peter", "lastName": "Prone"},
                {"id": 4, "firstName": "Sam", "lastName": "Sully"}
            ]);

            $rootScope.$apply();

            expect($rootScope.customers).toEqual([ { id : 1, firstName : 'Foo', lastName : 'Bar' }, { id : 2, firstName : 'Jim', lastName : 'Sunny' }, { id : 3, firstName : 'Peter', lastName : 'Prone' }, { id : 4, firstName : 'Sam', lastName : 'Sully' } ]);
            expect(mockCustomerService.getCustomers).toHaveBeenCalled();
        });
    });
});

describe('MainController Tests', function() {

    var $rootScope, $controller;

    beforeEach(function() {

        // load the module.
        module('app');

        inject(function(_$rootScope_, _$controller_) {

            $rootScope = _$rootScope_;

            $controller = _$controller_('MainController', {'$scope': $rootScope });
        });
    });

    // check to see if it has the expected function
    it('should have an logout function in scope', function () {
        expect(angular.isFunction($rootScope.logout)).toBe(true);
    });
});

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

    // check to see if it has the expected function
    it('should have an login function in scope', function () {
        expect(angular.isFunction($rootScope.login)).toBe(true);
    });
});