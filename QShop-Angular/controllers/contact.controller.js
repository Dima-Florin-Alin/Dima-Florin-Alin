angular.module("qshop").controller("contactController", function($scope, Contact, $state) {


    $scope.sendContact = function() {

        var contact = {
            email: "",
            subject: "",
            message: ""

        };


        contact.email = $scope.email;
        contact.subject = $scope.subject;
        contact.message = $scope.message;
        Contact.sendContact(contact);
        //redirect pe prima pagina dupa ce trimtem order
        $state.go('contact');
    };


});
