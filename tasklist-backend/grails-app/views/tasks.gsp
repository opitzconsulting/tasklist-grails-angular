<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <meta name="layout" content="main"/>
    <r:require module="tasks"/>
</head>
<body>
<div class="container" ng-app="app">
    <h2>Tasks</h2>
    <div ng-controller="TaskCtrl">
        <span>{{remaining()}} of {{tasks.length}} remaining</span>
        [ <a href="" ng-click="archive()">archive</a> ]
        <ul class="list-unstyled">
            <li ng-repeat="task in tasks">
                <input type="checkbox" ng-checked="task.done" ng-click="updateTask(task)">
                <span class="done-{{task.done}}">{{task.title}}</span>
            </li>
        </ul>
        <form class="form-inline" ng-submit="addTask()">
            <div class="form-group">
                <input type="text" class="form-control" ng-model="taskTitle" size="30" placeholder="add new task here">
            </div>
            <input type="submit" class="btn btn-default" value="add">
        </form>
    </div>
</div>
</body>
</html>