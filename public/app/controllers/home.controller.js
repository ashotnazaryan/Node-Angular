/**
 * Created by a.nazaryan on 9/30/2016.
 */
(function (app) {
    function controller($scope, $rootScope, constants, httpService) {

        var getCountries = function () {
            var params = {};
            httpService.send(constants.api.base + constants.api.country, params).then(function (data) {
                if (!data.HasError) {
                    $scope.countries = data;
                    //console.log("countries==", data);
                }
                else {
                    console.log("error==", data);
                }
            });
        }

        $scope.selectCountry = function (item) {
            $scope.selectedCountry = item;
            var params = {
                parentcode: item.code
            };
            httpService.send(constants.api.base + constants.api.city, params).then(function (data) {
                if (!data.HasError) {
                    $scope.cities = data;
                    //console.log("cities==", data);
                }
                else {
                    console.log("error==", data.Errors);
                }
            });
        }

        $scope.selectCity = function (subitem) {
            $scope.selectedCity = subitem.name;
        }

        $scope.count = function() {
            $scope.ticketcost = Math.random()*1000;
        }

        getCountries();

    };
    controller.$inject = ['$scope', '$rootScope', 'constants', 'httpService'];
    app.controller('home', controller);

}(angular.module('app')));

