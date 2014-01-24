class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.${format})?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "/tasks"(view:"/tasks")
        "500"(view:'/error')
	}
}
