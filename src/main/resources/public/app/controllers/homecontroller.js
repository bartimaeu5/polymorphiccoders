(function () {

    var app = angular.module('app');

    var homecontroller = function ($scope, $location, $anchorScroll, customercontact) {

        var scrollTo = function (divId) {
            $location.hash(divId);
            $anchorScroll();
        }

        var submitCustomerContact = function () {

        }

        $scope.scrollTo = scrollTo;
        $scope.submitCustomerContact = submitCustomerContact;
    }

    app.controller('homecontroller', homecontroller);
}());