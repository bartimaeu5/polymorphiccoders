package com.polymorphiccoders;

import static spark.Spark.get;
import static spark.Spark.post;

public class Resource {

	private static final String API_CONTEXT = "/api/v1/polymorphoiccoders";

	private Service service;

	public Resource(Service service) {
		this.service = service;
		setupEndpoints();
	}

	private void setupEndpoints() {
		post(API_CONTEXT + "/customercontact", "application/json", (request, response) -> {
			service.saveCustomerContact(request.body());
			response.status(201);
			return response;
		});

		// get(API_CONTEXT + "/todos/:id", "application/json", (request,
		// response) -> todoService.find(request.params(":id")), new
		// JsonTransformer());
		
		//get("/", (request, response) -> "Hello, World!");

	}

}
