package com.revature;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @RequestMapping("/register")
    public User register(User user) {
        return userService.register(user);
    }

    @RequestMapping("/delete")
    public void delete(User user) {
        userService.delete(user);
    }

    @RequestMapping("/deleteByUsername")
    public void deleteByUsername(String username) {
        userService.deleteByUsername(username);
    }
}
