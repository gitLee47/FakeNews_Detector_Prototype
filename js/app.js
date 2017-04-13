'use strict';
var fbApp = angular.module('AngularApp', ['ngRoute','ui.bootstrap', 'ngAnimate', 'toaster']);
// App Module: the name AngularApp matches the ng-app attribute in the main <html> tag
// the route provides parses the URL and injects the appropriate partial page
fbApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
		when('/profile', {
			templateUrl: 'partials/profile.htm',
			controller: 'appController' 
		}).
        otherwise({
			redirectTo: '/profile'
		});
}]).run(function ($rootScope, $location) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            
			$location.path("/profile");     
        });
});

// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).
fbApp.factory("DataService", function () {

    // create store
    var myStore = new store();

    // return data object with store and cart
    return {
        store: myStore
    };
});