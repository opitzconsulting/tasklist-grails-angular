package tasklist.backend

import grails.converters.JSON

class ApiController {

    def tasks(Long id) {
    	switch(request.method) {
    		case "GET":
    			if (id)
    				render Task.get(id) as JSON
    			else
    				render Task.list() as JSON
    			break

    		case "POST":
				def task = new Task(request.JSON)
				if (task.validate() && task.save()) {
					response.status = 201
					render task as JSON
				} else {
					error(403, "Invalid data")
				}
				break

			case "PUT":
				def task = Task.get(request.JSON.id)
				if (!task) {
					error(404, "Task with id ${request?.JSON?.id} not found!")
				} else {
					task.properties = request.JSON
					task.save()
					render task as JSON
				}
				break
    	}
    	
    }

    private void error(int code, String message) {
    	response.status = code
    	render([error: message] as JSON)
    }

}
