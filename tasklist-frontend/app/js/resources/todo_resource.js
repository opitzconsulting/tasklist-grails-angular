angular.module("app").factory("TodoResource", function ($q, $resource) {
    return $resource('/tasks');
});
