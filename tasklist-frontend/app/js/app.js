(function (angular) {
    'use strict';

    var app = angular.module('tasklist', [
        'ngRoute',
        'tasklist.tasks'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/tasks'});
    }]);

})(window.angular);
