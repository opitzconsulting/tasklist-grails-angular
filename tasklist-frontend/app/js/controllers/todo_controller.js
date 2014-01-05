angular.module("app").controller("TodoCtrl", function ($scope, TodoResource) {

    $scope.todos = TodoResource.query();

    $scope.addTodo = function () {
        var newTodo = new TodoResource({title: $scope.todoTitle, done: false});
        newTodo.$save(function (savedTodo) {
            $scope.todos.push(savedTodo);
        });
        $scope.todoTitle = '';
    };

    $scope.updateTodo = function(todo) {
        todo.done = !todo.done;
        todo.$update();
    };

    $scope.remaining = function () {
        var count = 0;
        angular.forEach($scope.todos, function (todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };

    $scope.archive = function () {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function (todo) {
            if (!todo.done) {
                $scope.todos.push(todo);
            }
        });
    };

});