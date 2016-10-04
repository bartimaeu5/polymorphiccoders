(function () {

    var aboutuscontroller = function ($scope, customercontact) {
        var customer = customercontact.getCustomer();
        $scope.customer = customer;
    };

    var app = angular.module('app');
    app.controller('aboutuscontroller', aboutuscontroller);

}());