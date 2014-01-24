modules = {

    application {
        resource url: 'js/application.js'
    }

    angularjs {
        resource url: 'js/angular.js'
        resource url: 'js/angular-route.js'
        resource url: 'js/angular-resource.js'
    }

    bootstap {
        resource url: 'css/bootstrap.css'
    }

    tasks {
        dependsOn 'angularjs'
        dependsOn 'bootstap'
        resource url: 'js/tasks.js'
        resource url: 'js/tasks_controller.js'
        resource url: 'js/tasks_resource.js'
        resource url: 'css/tasks.css'
    }

}