angular.module("qshop").controller("menuController", function($scope, Cart){


$scope.totalProducts = 0;

$scope.$on('cart-updated', function(event, args){

var products=Cart.getTotalProducts();
$scope.totalProducts = products;

});



})
