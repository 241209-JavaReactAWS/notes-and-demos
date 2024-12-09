package com.revature.daos;

import com.revature.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerDAO extends JpaRepository<Customer, Integer> {
    /*
    What is a DAO? A DAO is a Data-Access Object which means that this member is responsible for accessing data in the
    database and interacting with it

    CRUD: Create, Read, Update and Delete

    Before Spring Data JPA, we'd originally write out a series of methods in here leveraging JDBC and SQL queries
    to execute certain operations against a SQL database, but now we only need a few things to get started with our
    CRUD methods:

    Marking this interface with the @Repository annotation
        @Repository is stereotype annotation and it's used by Spring to denote that a class or interface should be a
        bean (class/interface that is managed by Spring). @Component, @Service, and @Controller
    Extending a Repository from Spring Data (Repository, CrudRepository, PagingAndSortingRepository, JpaRepository)

    Once we've done all of this, we now have access to basic crud methods but we define more custom queries inside of
    here as needed

    TODO: Add custom query later
     */
}
