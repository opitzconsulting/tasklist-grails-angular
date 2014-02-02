# Drehbuch zur Grails-und-Angular-Demo

## Ausgangsbasis

Leeres Git-Repository "tasklist"

## Schritt 1: Scaffolding mit Grails

    // Applikation anlegen
    grails create-app tasklist-backend

    // Applikations-Ordner öffnen
    cd tasklist-backend

    // Domänenobjekt anlegen
    grails create-domain-class Task

    // Domänenobjekt modellieren
    package tasklist.backend

    class Task {

        String title
        boolean done

        static constraints = {
            title nullable: false, blank: false
        }

    }

    // Controller anlegen
    grails create-scaffold-controller tasklist.backend.Task

    // Anwendung starten und präsentieren
    grails run-app

## Schritt 2: Client ohne Backend

*   Gerüst für leere Lineman-Applikation ins Projekt-Verzeichnis kopieren
*   Client ohne Backend entwickeln

### Static markup

    <!DOCTYPE html>
    <html>
    <head>
        <title><%= pkg.name %></title>
        <link rel="stylesheet" type="text/css" href="/css/app.css" media="all"/>
    </head>
    <body>
    <div class="container">
        <h2>Tasks</h2>
        <div>
            <span>X of Y tasks remaining</span>
            <ul class="list-unstyled">
                <li>
                    <input type="checkbox">
                    <span>Some task</span>
                </li>
            </ul>
        </div>
    </div>
    <script type="text/javascript" src="/js/app.js"></script>
    </body>
    </html>

### Initial angular controller

    angular.module('app', []);
    
    angular.module('app').controller('TaskCtrl', function($scope) {
        $scope.tasks = [{title: "Task 1", done: true},  {title: "Task 2", done: false}, {title: "Task 3", done: false}];
    });

### Initial binding

    <html ng-app="app">
    ...
    <div class="container" ng-controller="TaskCtrl">
        <h2>Tasks</h2>
        <span>{{remaining(tasks)}} of {{tasks.length}} tasks remaining</span>
        <ul class="list-unstyled">
            <li ng-repeat="task in tasks">
                <input type="checkbox" ng-checked="task.done">
                <span>{{task.title}}</span>
            </li>
        </ul>
    </div>    

### Remaining tasks

Live Template `_oop1`.

### Styling for done tasks

Live Template `_oop2`.

### Add new task

Live Templates `_oop3` (HTML) and `_oop4` (scope function).

### Clean up

    [ <a href="" ng-click="cleanup(tasks)">clean up</a> ]

Live Template `_oop5` (scope function).

## Schritt 3: REST-Endpoints

*   ...

## Schritt 4: Backend-Kommunikation

### Task resource

    angular.module('app').factory('TaskResource', function ($resource) {
        return $resource('/api/tasks/{:id}', null, {update: {method: 'PUT'}});
    });

### Backend aware scope

    $scope.tasks = TaskResource.query();
    
    $scope.addTask = function () {
        var newTask = new TaskResource({title: $scope.newTaskTitle, done: false});
        newTask.$save(function (savedTask) {
            $scope.tasks.push(savedTask);
        });
        $scope.newTaskTitle = '';
    };
    
    $scope.toggle = function (task) {
        task.done = !task.done;
        task.$update();
    };

## Schritt 5: "Embedded Client" zeigen

*   Ablage-Ort der Ressourcen
*   `ApplicationResources.groovy` zeigen
*   `tasks.gsp` zeigen
