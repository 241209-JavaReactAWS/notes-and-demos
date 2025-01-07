package com.revature;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserDAO userDAO;

    @Autowired
    public UserService(UserDAO userDAO) {
        super();
        this.userDAO = userDAO;
    }

    public User findByUsername(String username) {
        return userDAO.findByUsername(username);
    }


    public boolean validateUsername(String username) {
        return username != null &&
                username.length() >= 8 &&
                username.matches("^[a-zA-Z0-9]*$");
    }


    public boolean validatePassword(String password) {
        return password != null &&
                password.length() >= 8 &&
                password.matches(".*[a-z].*") &&
                password.matches(".*[A-Z].*") &&
                password.matches(".*[0-9].*") &&
                password.matches(".*[!@#$%^&*].*");
    }


    public User register(User user) {
        if (validateUsername(user.getUsername()) && validatePassword(user.getPassword())) {
            return userDAO.save(user);
        }
        return null;
    }

    public void delete(User user) {
        userDAO.delete(user);
    }

    public void deleteByUsername(String username) {
        userDAO.deleteById(username);
    }

    public boolean existsByUsername(String username) {
        return userDAO.existsById(username);
    }

    public boolean exists(User user) {
        return userDAO.existsById(user.getUsername());
    }

    public Iterable<User> findAll() {
        return userDAO.findAll();
    }

    public long count() {
        return userDAO.count();
    }

    public void deleteAll() {
        userDAO.deleteAll();
    }
}