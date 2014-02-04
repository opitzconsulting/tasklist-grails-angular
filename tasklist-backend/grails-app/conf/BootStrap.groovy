import tasklist.backend.Task

class BootStrap {

    def init = { servletContext ->
        ["Create Backend", "Create Frontend", "Present Powerpoints", "Run Application"].each {
            new Task(title: it, done: false).save(flush: true)
        }
    }
    def destroy = {
    }
}
