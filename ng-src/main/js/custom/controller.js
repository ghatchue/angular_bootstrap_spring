app.controller('MainController', function ($scope, $rootScope, $location, AuthenticationService) {
	$scope.logout = function () {
		$scope.$emit('event:logoutRequest');
		
        AuthenticationService.logout().then(function() {
        	$rootScope.user = null;
            $scope.username = $scope.password = null;
            $location.path('/main');
        });
    };
});

app.controller('CustomerController', function ($scope, CustomerService) {
	$scope.init = function() {
        CustomerService.getCustomers().then(function(response) {
            $scope.customers = response;
        });
	};

    $scope.delete = function(id) {
        CustomerService.deleteCustomer(id).then(function(response) {
            if(response) {
                angular.forEach($scope.customers, function (customer, index) {
                    if (id == customer.id) {
                        $scope.customers.splice(index, 1);

                        console.info("Customer " + id + " has been deleted.");
                    }
                });
            }
            else {
                console.error("Customer " + id + " was unable to be deleted.");
            }
        });
    };

    $scope.save = function(id) {
        angular.forEach($scope.customers, function(customer, index) {
            if(id == customer.id) {
                CustomerService.saveCustomer(customer).then(function(response) {
                    if(response) {
                        console.info("Customer " + id + " has been saved.");
                    }
                    else {
                        console.error("Customer " + id + " was unable to be saved.");
                    }
                });
            }
        });
    };
});

app.controller('LoginController', function($scope, $location) {
	$scope.login = function () {
		$scope.$emit('event:loginRequest', $scope.username, $scope.password);
		$location.path(originalLocation);
    };
});