describe('CustomerService Tests', function (){
    var CustomerService;

    // excuted before each "it" is run.
    beforeEach(function (){

        // load the module.
        module('app');

        // inject your service for testing.
        // The _underscores_ are a convenience thing
        // so you can have your variable name be the
        // same as your injected service.
        inject(function(_CustomerService_) {
            CustomerService = _CustomerService_;
        });
    });

    // check to see if it has the expected function
    it('should have an get customers function', function () {
        expect(angular.isFunction(CustomerService.getCustomers)).toBe(true);
    });

    // check to see if it has the expected function
    it('should have an delete customer function', function () {
        expect(angular.isFunction(CustomerService.deleteCustomer)).toBe(true);
    });

    // check to see if it has the expected function
    it('should have an save customer function', function () {
        expect(angular.isFunction(CustomerService.saveCustomer)).toBe(true);
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

    // check to see if it has the expected function
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

    // check to see if it has the expected function
    it('should have an encode function', function () {
        expect(angular.isFunction(Base64Service.encode)).toBe(true);
    });

    // check to see if it has the expected function
    it('should have an decode function', function () {
        expect(angular.isFunction(Base64Service.decode)).toBe(true);
    });
});