/**
 * Created by a.nazaryan on 9/30/2016.
 */
(function (services) {
    var srv = function ($http, $q) {
        function handleError(response) {
            if (!angular.isObject(response.data) || !response.data.message) {
                return ($q.reject("An unknown error occurred."));
            }
            return ($q.reject(response.data.message));
        }

        function handleSuccess(response) {
            return (response.data);
        }

        function send(url, params) {
            params = params || {};

            var request = $http({
                method: "POST",
                url: url,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: params
            });
            return request.then(handleSuccess, handleError);
        }

        return ({
            send: send
        });
    };
    srv.$inject = ['$http', '$q'];
    services.service("httpService", srv);
})(angular.module('services'));