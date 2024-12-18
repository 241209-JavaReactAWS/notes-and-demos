package com.revature.daos;

import com.revature.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDAO extends JpaRepository<User, Integer> {

    /*
    As a reminder, this adds in basic crud operations with the primary key field for the entity
    So if we want to have any other queries we should list them here
     */

    Optional<User> getUserByUsername(String username);
}
