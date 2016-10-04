(function () {

    var app = angular.module('app', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: '/app/partials/main.html',
                controller: 'homecontroller'
            })
            .when('/aboutus', {
                templateUrl: '/app/partials/aboutus.html',
                controller: 'aboutuscontroller'
            })
            .otherwise({
                redirectTo: '/main'
            });
    });

    console.log("app loaded!");
}());