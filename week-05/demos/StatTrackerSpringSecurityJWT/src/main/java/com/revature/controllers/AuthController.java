package com.revature.controllers;

import com.revature.models.dtos.AuthDTO;
import com.revature.models.dtos.UserDTO;
import com.revature.models.Role;
import com.revature.models.User;
import com.revature.security.JwtUtil;
import com.revature.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserService userService;


    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public UserDTO login(@RequestBody AuthDTO authDTO){
        // Validate the user's credentials
        User user = userService.login(authDTO.getUsername(), authDTO.getPassword());

        // If the user is null, the credentials were invalid
        if (user == null){
            return null;
        }

        // Create a UserDTO object
        UserDTO userDTO = new UserDTO();
        userDTO.setUserId(user.getUserId());
        userDTO.setUsername(user.getUsername());
        userDTO.setRole(user.getRole().name());
        userDTO.setToken(JwtUtil.generateToken(user.getUsername()));

        return userDTO;
    }

    @PostMapping("/register")
    public UserDTO register(@RequestBody AuthDTO authDTO){
        // Create a new user object
        User user = new User();
        user.setUsername(authDTO.getUsername());
        user.setPassword(authDTO.getPassword());
        user.setFavorites(new HashSet<>());
        user.setRole(Role.USER);

        // Register the user
        User registeredUser = userService.register(user);

        // Create UserDTO object
        UserDTO userDTO = new UserDTO();
        userDTO.setUserId(registeredUser.getUserId());
        userDTO.setUsername(registeredUser.getUsername());
        userDTO.setRole(registeredUser.getRole().name());
        userDTO.setToken(JwtUtil.generateToken(registeredUser.getUsername()));

        return userDTO;
    }

    @PostMapping("/register-admin")
    public UserDTO registerAdmin(@RequestBody AuthDTO authDTO){
        // Create a new user object
        User user = new User();
        user.setUsername(authDTO.getUsername());
        user.setPassword(authDTO.getPassword());
        user.setFavorites(new HashSet<>());
        user.setRole(Role.ADMIN);

        // Register the user
        User registeredUser = userService.register(user);

        // Create UserDTO object
        UserDTO userDTO = new UserDTO();
        userDTO.setUserId(registeredUser.getUserId());
        userDTO.setUsername(registeredUser.getUsername());
        userDTO.setRole(registeredUser.getRole().name());
        userDTO.setToken(JwtUtil.generateToken(registeredUser.getUsername()));

        return userDTO;
    }



}
