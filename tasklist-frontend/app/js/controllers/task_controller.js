angular.module("app").controller("TaskCtrl", function ($scope, TaskResource) {

    $scope.tasks = TaskResource.query();

    $scope.addTask = function () {
        var newTask = new TaskResource({title: $scope.taskTitle, done: false});
        newTask.$save(function (savedTask) {
            $scope.tasks.push(savedTask);
        });
        $scope.taskTitle = '';
    };

    $scope.updateTask = function(task) {
        task.done = !task.done;
        task.$update();
    };

    $scope.remaining = function () {
        var count = 0;
        angular.forEach($scope.tasks, function (task) {
            count += task.done ? 0 : 1;
        });
        return count;
    };

    $scope.archive = function () {
        var oldTasks = $scope.tasks;
        $scope.tasks = [];
        angular.forEach(oldTasks, function (task) {
            if (!task.done) {
                $scope.tasks.push(task);
            }
        });
    };

});