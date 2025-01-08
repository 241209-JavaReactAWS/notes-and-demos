package com.revature.controllers;

import com.revature.models.User;
import com.revature.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping("/favorites/{playerId}")
    public ResponseEntity<User> addPlayerToFavoritesHandler(@AuthenticationPrincipal UserDetails userDetails,
                                                            @PathVariable int playerId){

        User returnedUser = userService.addPlayerToFavorites( userDetails.getUsername(), playerId);
        if (returnedUser == null){
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(returnedUser);
    }

    @PreAuthorize("hasRole('USER')")
    @DeleteMapping("/favorites/{playerId}")
    public ResponseEntity<User> deletePlayerFromFavoritesHandler(@AuthenticationPrincipal UserDetails userDetails,
                                                                 @PathVariable int playerId){

        User returnedUser = userService.removePlayerFromFavorites(userDetails.getUsername(), playerId);

        if (returnedUser == null){
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(returnedUser);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping
    public ResponseEntity<User> getUserInfoHandler(@AuthenticationPrincipal UserDetails userDetails){
        User userToBeReturned = userService.getUserByUsername(userDetails.getUsername());
        return ResponseEntity.ok(userToBeReturned);
    }
}
