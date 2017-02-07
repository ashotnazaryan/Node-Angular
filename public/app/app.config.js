/**
 * Created by a.nazaryan on 9/30/2016.
 */
(function (app) {
    var config = function ($stateProvider, $urlRouterProvider, $locationProvider, constants) {

        $urlRouterProvider.when("", "home");
        $urlRouterProvider.when("/", "home");

        $urlRouterProvider.otherwise("/home");
        

        $stateProvider
            .state('home', {
                url: "/home",
                views: {
                    "home": {
                        templateUrl: "app/views/home.html",
                        controller: "home"
                    }
                }
            });

        //$locationProvider.html5Mode(true);

    };
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'constants'];
    app.config(config);
})(angular.module('app'));
