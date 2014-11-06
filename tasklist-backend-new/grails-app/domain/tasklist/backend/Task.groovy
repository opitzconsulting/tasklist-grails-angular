package tasklist.backend

class Task {

    String title
    boolean done

    static constraints = {
        title nullable: false, blank: false
    }

}
