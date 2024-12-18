package com.revature.controllers;

import com.revature.models.Player;
import com.revature.models.Role;
import com.revature.services.PlayerService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("players")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class PlayerController {

    private final PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    // TODO VIEW ALL PLAYERS
    @GetMapping
    public List<Player> getAllPlayersHandler(){
        return playerService.getAllPlayers();
    }

    // TODO ADD A NEW PLAYER (ADMIN ONLY)
    @PostMapping
    public ResponseEntity<Player> createNewPlayerHandler(HttpSession session, @RequestBody Player player){
        // Check that the user is actually logged in
        if (session.isNew() || session.getAttribute("username") == null){
            // The user is not logged in
            return ResponseEntity.status(401).build();
            // This status code indicates the user is not logged
            // Not to be confused with 403 which says the user IS logged in, but has the wrong permissions
        }

        // We know who is logged in but we need to make sure they have the right permissions
        // Check if that user is an admin
        if (session.getAttribute("role") != Role.ADMIN){
            // This means we're signed in but NOT an Admin
            return ResponseEntity.status(403).build();
        }

        // If we make it to this point, the user is logged in and the user is an admin

        // Finally add the player to the database
        Player returnedPlayer = playerService.createNewPlayer(player);

        if(returnedPlayer == null){
            return ResponseEntity.badRequest().build();
        }

        // 201 is the CREATED status code
        return ResponseEntity.status(201).body(returnedPlayer);
    }

    // TODO UPDATE A PLAYER (ADMIN ONLY)
}
