angular.module("app").factory("TodoResource", function ($q, $resource) {
    return $resource('/api/tasks/:id', null, {
        'update': { method: 'PUT' }
    });
});
