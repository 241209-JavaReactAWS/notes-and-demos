package com.revature.controllers;

import com.revature.models.Customer;
import com.revature.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("customers") // Requests will be routed in this application and we need to declare what endpoints we
// want to handle so we use @RequestMapping to give a parent mapping for all endpoints below
// This class will handle all requests going to http://localhost:8080/customers
public class CustomerController {

    /*
    This class will be in charge of handling web traffic
    This class will have different endpoint declared to handle requests and will format responses accordingly

    @Controller vs @RestController
        @RestController is a combination of @Controller and @ResponseBody
        @ResponseBody declares that the response from a method will fill in the response for the HTTP Request
    Wire in the service class
     */

    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    // Todo Get All Customer Methods
    @GetMapping // This will be called when a GET request comes in
    public List<Customer> getAllCustomersHandler(){
        // I want this method to be executed when a GET Http Request comes in to http://localhost:8080/customers
        return customerService.getAllCustomers();
    }

    // Todo Add a customer method
    @PostMapping // POST request to http://localhost:8080/customers
    public ResponseEntity<Customer> createCustomerHandler(@RequestBody Customer customer){
        /*
        We're expecting a customer to come from the request body we need to take it in as a method parameter
        Once we have the customer object, we'll send it to the service layer to create the customer
         */
        Customer possibleCustomer = customerService.createNewCustomer(customer);

        if (possibleCustomer == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else{
            return new ResponseEntity<>(possibleCustomer, HttpStatus.CREATED);
        }

    }

    // Todo Add a get single customer method
    // This will likely also be a GET request but we need to be specific about the customer that we want
    // I'm going to leverage their ID field to get started
    @GetMapping("{customerId}") // This now handles GET requests to http://localhost:8080/customers/{customerId}
    public ResponseEntity<Customer> getSpecificCustomerHandler(@PathVariable int customerId){
        // Response Entities give you full control over how a Http Response is formatted so we can use it to define
        // Specific status codes
        // return customerService.getCustomerById(customerId).get();
        Optional<Customer> possibleCustomer = customerService.getCustomerById(customerId);

        if (possibleCustomer.isPresent()){
            return new ResponseEntity<>(possibleCustomer.get(), HttpStatus.OK);
        } else {
            // We were unable to find the user with id "customerId"
            // We should return a not found
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }
}
