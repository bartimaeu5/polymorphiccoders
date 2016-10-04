(function () {

    var app = angular.module('app');

    var clients = function ($http) {

        var getClients = function () {
            return $http.get('/api/v1/polymorphoiccoders/getClients').then(function (response) {
                return response.data;
            });
        }

        return {
            getClients: getClients
        };

    };

    app.factory('clients', clients);


}());