package tasklist.backend

import grails.rest.RestfulController

class ApiController extends RestfulController {
    
    static responseFormats = ['json', 'xml']

    ApiController() {
        super(Task)
    }

}
