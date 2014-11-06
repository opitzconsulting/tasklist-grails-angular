class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }
        "/tasks"(resources:'task')
        "/"(view:"/index")
        "/tasklist"(view:"/tasklist")
        "500"(view:'/error')
	}
}
