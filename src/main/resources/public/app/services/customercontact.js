(function () {
    var customercontact = function ($http) {

        // This variable will be shared across controllers
        var customer = {
            name: "",
            email: "",
            message: ""
        };

        var getCustomer = function () {
            return customer;
        }

        var setCustomer = function (contactUs) {
            customer.name = contactUs.name;
            customer.email = contactUs.email;
            customer.message = contactUs.message;
        }

        var postContactUs = function () {
            return $http.post('/api/v1/polymorphoiccoders/customercontact', customer)
                .then(function (response) {
                    return response.data;
                });
        }

        return {
            postContactUs: postContactUs,
            getCustomer: getCustomer,
            setCustomer: setCustomer
        };


    };
    var app = angular.module('app');
    app.factory('customercontact', customercontact);
}());