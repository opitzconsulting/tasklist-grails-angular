(function (angular) {
    'use strict';

    var module = angular.module('tasklist.tasks', [
        'ngRoute',
        'ngResource'
    ]);

    module.config(function ($routeProvider) {
        $routeProvider
            .when('/tasks', {
                templateUrl: 'tasks.html',
                controller: 'TaskListCtrl'
            });
    });

    module.factory("TaskResource", function ($q, $resource) {
        return $resource('/api/tasks/:id', { id: '@id' }, {
            'update': { method: 'PUT' }
        });
    });

    module.controller('TaskListCtrl', function ($scope, TaskResource) {
        $scope.tasks = TaskResource.query();
        $scope.addTask = function () {
            var newTask = new TaskResource({title: $scope.newTaskTitle, done: false});
            newTask.$save(function (savedTask) {
                $scope.tasks.push(savedTask);
                $scope.newTaskTitle = '';
            });
        };
        $scope.checkTask = function(task) {
            task.done = !task.done;
            task.$update();
        };
        $scope.deleteTask = function (index) {
            $scope.tasks[index].$delete(function() {
                $scope.tasks.splice(index, 1);
            });
        };
    });

})(window.angular);