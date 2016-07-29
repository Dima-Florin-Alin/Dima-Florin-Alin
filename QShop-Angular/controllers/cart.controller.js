angular.module("qshop").controller("cartController", function($scope, Cart, $state, $rootScope) {


    $scope.listProducts = Cart.getProducts();

    var updateView = function() {

        $scope.subTotal = Cart.getSubTotal();
        $scope.shipping = Cart.getShipping();
        $scope.Total = Cart.getTotal();
        $rootScope.$broadcast('cart-updated');
    }

    $scope.scade = function(id) {
        for (var i = 0; i < $scope.listProducts.length; i++) {

            if ($scope.listProducts[i].id == id) {
                if ($scope.listProducts[i].quantity > 1) {
                    $scope.listProducts[i].quantity--;
                    updateView();

                };
                break;
            }
        }
    }
    $scope.creste = function(id) {
            for (var i = 0; i < $scope.listProducts.length; i++) {
                if ($scope.listProducts[i].id == id) {
                    $scope.listProducts[i].quantity++;
                    updateView();

                }
            }
        }
        // $scope.subTotal = Cart.getSubTotal();
        // $scope.shipping = Cart.getShipping();
        // $scope.Total = Cart.getTotal();
        //

    $scope.removeProduct = function(product) {

        Cart.remove(product);
        $scope.listProducts = Cart.getProducts();
        updateView();

    }

    $scope.sendOrder = function() {

        var order = {
            products: [],
            country: "",
            city: "",
            zipCode: ""
        };

        order.products = $scope.listProducts;
        if (!$scope.country) {
            order.country = "Romania";
        } else {
            order.country = $scope.country;
        }
        order.country = $scope.country;
        if ($scope.city == undefined) {
            order.city = "Bucharest";
        } else {
            order.city = $scope.city;
        }

        order.zipCode = $scope.zipCode;

        Cart.sendOrder(order);
        //redirect pe prima pagina dupa ce trimtem order
        $state.go('default');
    }

});
