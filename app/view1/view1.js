'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function () {
    }])
    //I add a directive here
    .directive('myDirective', function () {
        return {
            restrict: 'E',
            template: '<a href="http://google.co.uk"> ' +
            'Click me to go to Google</a>'
        };
    })
;
