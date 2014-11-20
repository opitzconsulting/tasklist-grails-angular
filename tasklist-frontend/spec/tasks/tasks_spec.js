describe('tasklist.tasks', function () {

    beforeEach(module('tasklist.tasks'));

    describe('TaskListCtrl', function () {
        it('loads all tasks', inject(function ($controller, TaskRepository) {
            var scope = {};
            var allTasks = [];
            spyOn(TaskRepository, 'allTasks').andReturn(allTasks);

            $controller('TaskListCtrl', {$scope: scope, TaskRepository: TaskRepository});

            expect(scope.tasks).toBe(allTasks);
        }));
    });

});
