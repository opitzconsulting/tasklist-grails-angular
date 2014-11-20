(function (angular) {
    'use strict';

    var module = angular.module('tasklist.tasks', [
        'ngRoute'
    ]);

    module.config(function ($routeProvider) {
        $routeProvider
            .when('/tasks', {
                templateUrl: 'tasks.html'
            });
    });

})(window.angular);