/**
 * Created by Xin Meng on 01/01/2016.
 */
angular.module('myApp.promise-example', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/promise-example', {
            templateUrl: 'promise-example/promise-example.view.html',
            controller: 'PromiseExampleCtrl'
        });
    }])
    .controller('PromiseExampleCtrl', [
        '$scope', 'GithubService',
        function($scope, GithubService) {
            GithubService.getPullRequests()
                .then(function(data) {
                    $scope.pullRequests = data;
                });
        }])
    .factory('GithubService', [
        '$q', '$http',
        function($q, $http) {
            var getPullRequests = function() {
                var deferred = $q.defer();
                // Get list of open angular js pull requests from github
                $http.get('https://api.github.com/repos/angular/angular.js/pulls')
                    .success(function(data) {
                        deferred.resolve(data);
                    })
                    .error(function(reason) {
                        deferred.reject(reason);
                    })
                return deferred.promise;
            }

            return { // return factory object
                getPullRequests: getPullRequests
            };
        }]);



//angular.module('myApp', [])
