(function () {

    var app = angular.module('app');

    var homecontroller = function ($scope, $location, $anchorScroll, customercontact, clients) {

        var scrollTo = function (divId) {
            $location.hash(divId);
            $anchorScroll();
        };

        var onSubmitCustomerContactComplete = function () {
            console.log("Success!");
        };

        var onError = function () {
            console.log("Failed!");
        };

        var onGetClientsComplete = function (response) {
            $scope.clients = response;
            console.log(response);
        };

        var submitCustomerContact = function () {
            customercontact.setCustomer($scope.customer);
            customercontact.postContactUs().then(onSubmitCustomerContactComplete, onError);
        };

        var getClients = function () {
            clients.getClients().then(onGetClientsComplete, onError);
        }

        $scope.scrollTo = scrollTo;
        $scope.submitCustomerContact = submitCustomerContact;
        $scope.getClients = getClients;
    }

    app.controller('homecontroller', homecontroller);
}());