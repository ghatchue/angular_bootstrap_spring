var httpHeaders;
var originalLocation = "/main";

app.config([ '$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
	
	// ======= router configuration
	$routeProvider
		.when('/main', {
			templateUrl: 'resources/html/partials/main.html'
		})
		.when('/customer/search', {
			controller: 'CustomerController',
			templateUrl: 'resources/html/partials/customer_search.html'
		})
		.when('/login', {
			controller: 'LoginController',
			templateUrl: 'resources/html/partials/login.html'
		})
		.otherwise({ redirectTo : "/main"});
	
	// ======== http configuration
	
	//configure $http to view a login whenever a 401 unauthorized response arrives
    $httpProvider.responseInterceptors.push(function ($rootScope, $q) {
        return function (promise) {
            return promise.then(
                //success -> don't intercept
                function (response) {
                    return response;
                },
                //error -> if 401 save the request and broadcast an event
                function (response) {
                    if (response.status === 401) {
                        var deferred = $q.defer(),
                            req = {
                                config: response.config,
                                deferred: deferred
                            };
                        $rootScope.requests401.push(req);
                        $rootScope.$broadcast('event:loginRequired');
                        return deferred.promise;
                    }
                    return $q.reject(response);
                }
            );
        };
    });
    httpHeaders = $httpProvider.defaults.headers;
}]);