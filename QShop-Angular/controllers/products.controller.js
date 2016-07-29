angular.module("qshop").controller("ProductsController", function($scope, ProductsRepository, Cart, $rootScope){


      ProductsRepository.getProductList().then(function(result) {
          $scope.products = result.data;

          console.log('Products', result.data)
      }, function(err) {
          console.error(err);
      });

$scope.addToCart = function(product){
Cart.add(product,1);


}
})
