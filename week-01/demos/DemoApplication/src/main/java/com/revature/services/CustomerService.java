package com.revature.services;

import com.revature.daos.CustomerDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    // TODO Get All customers Method

    // Todo Add new customer method
}
