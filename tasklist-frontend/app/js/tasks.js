(function (angular) {
    'use strict';

    var module = angular.module('tasklist.tasks', [
        'ngRoute',
        'ngStorage'
    ]);

    module.config(function ($routeProvider) {
        $routeProvider
            .when('/tasks', {
                templateUrl: 'tasks.html',
                controller: 'TaskListCtrl'
            });
    });

    module.factory('TaskRepository', function ($localStorage) {
        var storage = $localStorage.$default({tasks: [], initialized: false});
        if (!storage.initialized) {
            storage.tasks.push({title: 'One', done: false});
            storage.tasks.push({title: 'Two', done: false});
            storage.tasks.push({title: 'Three', done: false});
            storage.initialized = true;
        }
        return {
            allTasks: function () {
                return storage.tasks;
            },
            addTask: function (task) {
                storage.tasks.push(task);
            },
            deleteTaskAtIndex: function (index) {
                storage.tasks.splice(index, 1);
            }
        };
    });

    module.controller('TaskListCtrl', function ($scope, TaskRepository) {
        $scope.tasks = TaskRepository.allTasks();
        $scope.addTask = function () {
            TaskRepository.addTask({title: $scope.newTaskTitle, done: false});
            $scope.newTaskTitle = '';
        };
        $scope.deleteTask = function (index) {
            TaskRepository.deleteTaskAtIndex(index);
        };
    });

})(window.angular);