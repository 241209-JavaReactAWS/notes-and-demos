package com.revature.controllers;

import com.revature.models.User;
import com.revature.services.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /*
    Authorization and Authentication (the two main concepts for security) can often be complicated and there are a
    variety of solutions to help with this.

    Sessions
        - Server based
        - Store what user is logged in inside the server and send a session key to the client to then reacccess their
        info/endpoints

    JWTs / TOKENS
        - Client based
        - The backend will generate a token and send it back upon a successful login attempt. This token is stored
        by the frontend and decrypted by the backend as needed to get the appropriate information
        - Adheres more to REST constraints
     */

    // TODO LOGIN
    @PostMapping("/login") // http://localhost:8080/users/login
    public ResponseEntity<User> loginHandler(@RequestBody User user, HttpSession session){
        // Now I want to validate that the user has provided the correct credentials

        User returnedUser = userService.login(user.getUsername(), user.getPassword());

        if (returnedUser == null){
            // This means the user had the wrong credentials or we couldn't find the user with the specific username
            return ResponseEntity.badRequest().build();
            // return new ResponseEntity(HttpStatus.BAD_REQUEST)
        }

        // We'll store some information inside of the session to hold it for later
        session.setAttribute("username", returnedUser.getUsername());
        session.setAttribute("userId", returnedUser.getUserId());
        session.setAttribute("role", returnedUser.getRole());


        // OTHERWISE
        return ResponseEntity.ok(returnedUser);
    }

    // TODO LOGOUT
    @PostMapping("/logout") //http://localhost:8080/users/logout
    public ResponseEntity<?> logout(HttpSession session){
        // To log a user out, we just invalidate the session
        session.invalidate();
        return ResponseEntity.noContent().build();
    }

    // TODO ADD PLAYER TO FAVORITES
    @PostMapping("/favorites/{playerId}")
    public ResponseEntity<User> addPlayerToFavoritesHandler(HttpSession session, @PathVariable int playerId){

        // Validate that the user is logged in
        // One check if the session is brand new
        // Also we can check if the user has a username stored
        if (session.isNew() || session.getAttribute("username") == null){
            // The user is not logged in
            return ResponseEntity.status(401).build();
            // This status code indicates the user is not logged
            // Not to be confused with 403 which says the user IS logged in, but has the wrong permissions
        }

        // If we make it here the user is in fact logged in
        User returnedUser = userService.addPlayerToFavorites( (String) session.getAttribute("username"), playerId);

        // Now let's check if the method was handled correctly
        if (returnedUser == null){
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(returnedUser);
    }

    // TODO REMOVE PLAYER FROM FAVORITES
    @DeleteMapping("/favorites/{playerId}")
    public ResponseEntity<User> deletePlayerFromFavoritesHandler(HttpSession session, @PathVariable int playerId){
        if (session.isNew() || session.getAttribute("username") == null){
            // The user is not logged in
            return ResponseEntity.status(401).build();
            // This status code indicates the user is not logged
            // Not to be confused with 403 which says the user IS logged in, but has the wrong permissions
        }

        // If we make it here the user is in fact logged in
        User returnedUser = userService.removePlayerFromFavorites((String) session.getAttribute("username"), playerId);

        // Now let's check if the method was handled correctly
        if (returnedUser == null){
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(returnedUser);
    }
}
