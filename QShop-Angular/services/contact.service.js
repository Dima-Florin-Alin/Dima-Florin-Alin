angular.module("qshop").factory("Contact", function($http) {

    var contactObj = {};

    contactObj.sendContact = function(contact) {
        //Aici se scrie codul pentru trimitere la server
        console.log('Contact', contact);
        $http.post('http://10.59.0.30:3000/posts', contact);
    };

    return contactObj;

});
