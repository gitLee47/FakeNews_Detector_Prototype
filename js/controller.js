'use strict';

// the storeController contains two objects:
// - store: contains the product list
// - cart: the shopping cart object
fbApp.controller('appController', function($scope, $routeParams, DataService) {

	$scope.store = DataService.store;
	
	if ($routeParams.productSku != null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }
	
});
