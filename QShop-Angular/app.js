var qshop = angular.module("qshop", ['ui.router']);

qshop.config(["$locationProvider", function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);

qshop.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('default', {
            url: "/",
            templateUrl: "templates/firstpage.html"
        })
        .state('contact', {

            url: '/contact',
            templateUrl: "templates/contact.html"
        })
        .state('login', {
            url: '/login',
            templateUrl: "templates/login.html"
        })
        .state('register', {
            url: '/register',
            templateUrl: "templates/register.html"
        })
        .state('products', {
            url: '/products',
            templateUrl: "templates/products.html"
        })
        .state('product', {
            url: '/products/:id',
            templateUrl: "templates/product.html"
        });



});

qshop.controller("MainController", function($scope, $stateParams, ProductsRepository) {

  console.log('Am intrat pe pagina');


    ProductsRepository.getProductList().then(function(result) {
        $scope.products = result.data;

        console.log('Products', result.data)
    }, function(err) {
        console.error(err);
    });

$scope.loadProduct= function(){

  console.log("Load product called...", $stateParams);
  ProductsRepository.getProductList().then(function(result) {


    //result.data= toate produsele
    var productId = $stateParams.id;
    for(i=0;i<result.data.length; i++)
    {
      if(result.data[i].id == productId)
      $scope.product=result.data[i];
      break;
    }

  }, function(err) {
      console.error(err);
  });

}

});


qshop.factory("ProductsRepository", function($http) {

    var repo = {};

    repo.getProductList = function() {
        return $http.get("/data/products.json");
    };


    return repo;





});
