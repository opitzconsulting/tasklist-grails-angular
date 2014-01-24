angular.module("app").factory("TaskResource", function ($q, $resource) {
    return $resource('/api/tasks/:id', null, {
        'update': { method: 'PUT' }
    });
});
