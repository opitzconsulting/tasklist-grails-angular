describe('tasklist.tasks', function () {

    beforeEach(module('tasklist.tasks'));

    describe('TaskListCtrl', function () {
        it('loads all tasks', inject(function ($controller, TaskResource) {
            var scope = {};
            var allTasks = [];
            spyOn(TaskResource, 'query').andReturn(allTasks);

            $controller('TaskListCtrl', {$scope: scope, TaskResource: TaskResource});

            expect(scope.tasks).toBe(allTasks);
        }));
    });

});
