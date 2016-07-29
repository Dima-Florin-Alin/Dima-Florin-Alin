var qshop = angular.module("qshop", ['ui.router']);

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
        })
        .state('cart', {
            url: '/cart',
            templateUrl: "templates/cart.html"
        });



});

qshop.controller("MainController", function($scope, $stateParams, ProductsRepository) {

    console.log('Am intrat pe pagina');









});
