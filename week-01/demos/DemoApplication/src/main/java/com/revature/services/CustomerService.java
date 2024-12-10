package com.revature.services;

import com.revature.daos.CustomerDAO;
import com.revature.models.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    /*
    Service classes are important because they're in charge of all the business logic of an application (logic that
    doesn't directly pertain to web traffic or database access). For example it leverages several dao methods in each
    service method to chain complex logic together

    Ex: To register a new user, we first call the dao to look up if a username is taken, if it is, we return null.
    Otherwise, validate the username and password fit security requirements and then hash the password, then call
    the dao layer to save the user.

    To do all of this, we need access to the DAO layer so we need to inject it in
     */

    private final CustomerDAO customerDAO;

    @Autowired
    public CustomerService(CustomerDAO customerDAO) {
        this.customerDAO = customerDAO;
    }

    // Todo Get a Customer Method
    public Optional<Customer> getCustomerById(int customerId){
        // When in the service class our goal is to make sure that the data being entered and retrieved from the db
        // is valid
        // We need to leverage the dao layer to get info from the database

        // What is an Optional?
        // Wrapper class around objects that might be null to help with null checking
        return customerDAO.findById(customerId);
    }

    // TODO Get All customers Method
    public List<Customer> getAllCustomers(){
        return customerDAO.findAll();
        // Why don't we use an optional here? The list will always exist whether or not there are any customers
        // so no matter what this will not be null
    }

    // Todo Add new customer method
    public Customer createNewCustomer(Customer customer){
        // Validation logic here
        if (customer.getPurchaseAmount() <= 0){
            return null;
        }

        return customerDAO.save(customer);
    }
}

/*
What is Dependency Injection? Dependency Injection is a design pattern where the dependencies of a class are determined
in some external configuration location. This could another class like a Factory class, or in our case, the Spring
Framework itself. Spring is responsible for creating, managing and wiring our classes together

How do we do dependency injection in Spring?
Two (technically 3 ways)
Constructor Injection: This is injecting dependencies through your constructor, standard practice and will be used
for 95% of your use cases
Setter Injection: Using @Autowired over a setter to set after the class has been initialized. Good for circular
dependencies. (Class A depends on Class B but Class B also depends on Class A)
Field Injection: This is using @Autowired directly on the field
 */
