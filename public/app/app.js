/**
 * Created by a.nazaryan on 9/30/2016.
 */
(function (angular) {
    var app = angular.module("app", [
        "ui.router",
        "ngStorage",
        //"ngMaterial",
        //"ngAnimate",
        //"ngAria",
        "services"
    ]);

    app.constant("constants", {
        api: {
            base: 'http://localhost:1111/api/',
            country: 'countries',
            city: 'cities'
        }

    });
})(window.angular);