(function () {
    var customercontact = function ($http) {
        $http.post('/api/v1/polymorphoiccoders/customercontact')

    }

    var app = angular.module('app');
    app.factory('customercontact', customercontact);

}());