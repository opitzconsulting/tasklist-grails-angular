describe('tasklist.tasks', function () {

    beforeEach(module('tasklist.tasks'));

    describe('TaskRepository', function () {
        describe('addTask', function () {
            it('adds a task to the end of the list', inject(function (TaskRepository, $localStorage) {
                spyOn($localStorage, '$default').andReturn({tasks: [], initialized: true});
                var newTask = {title: 'New Task', done: false};

                TaskRepository.addTask(newTask);

                var allTasks = TaskRepository.allTasks();
                expect(allTasks[allTasks.length - 1]).toBe(newTask);
            }));
        });
    });

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
