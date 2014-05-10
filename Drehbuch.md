# Drehbuch zur Grails-und-Angular-Demo

## Ausgangsbasis

Leeres Git-Repository "tasklist":

    git checkout demo-baseline
    git checkout -b demo-oop
    git clean -f -d

## Schritt 1: Scaffolding mit Grails

Applikation anlegen

    grails create-app tasklist-backend

Applikations-Ordner öffnen

    cd tasklist-backend

Domänenobjekt anlegen

    grails create-domain-class Task

Domänenobjekt modellieren

    package tasklist.backend

    class Task {

        String title
        boolean done

        static constraints = {
            title nullable: false, blank: false
        }

    }

Controller anlegen

    grails create-scaffold-controller tasklist.backend.Task

Anwendung starten und präsentieren

    grails run-app

Testdaten erzeugen in BootStrap.groovy

    def init = { servletContext ->
        ["Create Backend", "Create Frontend", "Present Powerpoints", "Run Application"].each {
            new Task(title: it, done: false).save(flush: true)
        }
    }

Anwendung erneut starten

    grails run-app

## Schritt 2: Client ohne Backend

*   Gerüst für leere Lineman-Applikation ins Projekt-Verzeichnis kopieren
*   `cd tasklist-frontend; lineman run`
*   Bei Bedarf LiveReload starten
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
        <span>X of Y tasks remaining</span>
        <ul class="list-unstyled">
            <li>
                <input type="checkbox">
                <span>Some task</span>
            </li>
        </ul>
    </div>
    <script type="text/javascript" src="/js/app.js"></script>
    </body>
    </html>

### Initial angular controller

    angular.module('app', []);
    
    angular.module('app').controller('TaskCtrl', function($scope) {
        $scope.tasks = [
            {title: "Task 1", done: true},
            {title: "Task 2", done: false},
            {title: "Task 3", done: false}
        ];
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

Live Template `_ng1`.

### Toggle task

Markup:

    <input type="checkbox" ng-checked="task.done" ng-click="toggle(task)">

Code:

    $scope.toggle = function(task) {
        task.done = !task.done;
    };

### Styling for done tasks

Live Template `_ng2`.

### Add new task

Live Templates `_ng3` (HTML) and `_ng4` (scope function).

### Clean up

    [ <a href="" ng-click="cleanup(tasks)">clean up</a> ]

Live Template `_ng5` (scope function).

## Schritt 3: REST-Endpoints

Controller erzeugen

    grails create-controller tasklist.backend.Api

Controller implementieren

    import grails.converters.JSON

    class ApiController {
        def tasks(Long id) {
            switch (request.method) {
                case "GET":
                    if (id)
                        render Task.get(id) as JSON
                    else
                        render Task.list() as JSON
                    break
                case "POST":
                    def task = new Task(request.JSON)
                    task.save()
                    response.status = 201
                    render task as JSON
                    break
                case "PUT":
                    def task = Task.get(request.JSON.id)
                    task.properties = request.JSON
                    task.save()
                    render task as JSON
                    break
            }
        }
    }

Applikations-Kontext ändern in Config.groovy

    grails.app.context = '/'

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

*   Ablage-Ort `web-app/...` der Ressourcen zeigen
*   `ApplicationResources.groovy` zeigen
*   `tasks.gsp` zeigen
