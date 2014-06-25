describe('CustomerService Tests', function (){
    var $httpBackend, CustomerService;

    // excuted before each "it" is run.
    beforeEach(function (){

        // load the module.
        module('app');

        // inject your service for testing.
        // The _underscores_ are a convenience thing
        // so you can have your variable name be the
        // same as your injected service.
        inject(function(_$httpBackend_, _CustomerService_) {
            $httpBackend = _$httpBackend_;
            CustomerService = _CustomerService_;
        });
    });

    describe('CustomerService Structural Tests', function() {

        it('should have an get customers function', function () {
            expect(angular.isFunction(CustomerService.getCustomers)).toBe(true);
        });

        it('should have an delete customer function', function () {
            expect(angular.isFunction(CustomerService.deleteCustomer)).toBe(true);
        });

        it('should have an save customer function', function () {
            expect(angular.isFunction(CustomerService.saveCustomer)).toBe(true);
        });
    });

    describe('CustomerService Get Customers Tests', function() {

        var populatedData;

        beforeEach(function () {
            populatedData = [
                {"id": 1, "firstName": "Foo", "lastName": "Bar"},
                {"id": 2, "firstName": "Jim", "lastName": "Sunny"},
                {"id": 3, "firstName": "Peter", "lastName": "Prone"},
                {"id": 4, "firstName": "Sam", "lastName": "Sully"}
            ];
        });

        it('should return results from get customers function call', function () {
            $httpBackend.whenGET('customer/customers/retrieve').respond(populatedData);

            // check result returned from service call
            var promise = CustomerService.getCustomers();
            promise.then(function (data) {
                expect(data).toEqual(populatedData);
            });

            $httpBackend.flush();

            $httpBackend.expectGET('customer/customers/retrieve').respond(populatedData);
        });
    });
});

describe('AuthenticationService Tests', function (){
    var AuthenticationService;

    // excuted before each "it" is run.
    beforeEach(function (){

        // load the module.
        module('app');

        // inject your service for testing.
        // The _underscores_ are a convenience thing
        // so you can have your variable name be the
        // same as your injected service.
        inject(function(_AuthenticationService_) {
            AuthenticationService = _AuthenticationService_;
        });
    });

    it('should have a logout function', function () {
        expect(angular.isFunction(AuthenticationService.logout)).toBe(true);
    });
});

describe('Base64Service Tests', function (){
    var Base64Service;

    // excuted before each "it" is run.
    beforeEach(function (){

        // load the module.
        module('app');

        // inject your service for testing.
        // The _underscores_ are a convenience thing
        // so you can have your variable name be the
        // same as your injected service.
        inject(function(_Base64Service_) {
            Base64Service = _Base64Service_;
        });
    });

    it('should have an encode function', function () {
        expect(angular.isFunction(Base64Service.encode)).toBe(true);
    });

    it('should have an decode function', function () {
        expect(angular.isFunction(Base64Service.decode)).toBe(true);
    });
});