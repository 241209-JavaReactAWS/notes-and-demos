package com.revature;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	/*
	This application is going to be a basic Spring Boot application that tracks customers. So in this app I can
	send a request to get a customer, get all customers, add a new customer.

	First thing we construct is a model: A Model is a shape for the data we want to track, it's basically a sample
	class with the fields that we want to keep track of
	 */
}
