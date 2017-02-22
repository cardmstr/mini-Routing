angular.module('miniRouting').controller('productsCtrl', function ($scope, $stateParams, productService) {
    if ($stateParams.id === 'shoes') {
        $scope.productData = productService.shoeData;
        $scope.productHeader = 'Shoes';
    }
    else if ($stateParams.id === 'socks') {
        $scope.productData = productService.sockData;
        $scope.productHeader = "Socks";
    }
});
