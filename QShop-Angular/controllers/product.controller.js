angular.module("qshop").controller("ProductController", function($scope, $stateParams, ProductsRepository, Cart, $rootScope){

  $scope.quantity = 1;



  $scope.scade = function (){
    if($scope.quantity>1)

    $scope.quantity-=1;

  }
  $scope.creste = function (){
    $scope.quantity+=1;

  }



  $scope.tabPanel = "description";


  $scope.showTab = function(tabName) {
    $scope.tabPanel = tabName;
}

$scope.loadProduct = function() {

    console.log("Load product called...", $stateParams);
    ProductsRepository.getProductList().then(function(result) {


        //result.data= toate produsele
        var productId = $stateParams.id;
        for (i = 0; i < result.data.length; i++) {
            if (result.data[i].id == productId) {
                $scope.product = result.data[i];
                break;
            }
        }

    }, function(err) {
        console.error(err);
    });

};

$scope.addToCart = function(){
Cart.add($scope.product, $scope.quantity);


};

});
