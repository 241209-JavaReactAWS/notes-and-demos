package com.revature.controllers;

import com.revature.models.Player;
import com.revature.services.PlayerService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/players")
public class PlayerController {

    private final PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping
    public List<Player> getAllPlayersHandler(){
        return playerService.getAllPlayers();
    }


    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<Player> createNewPlayerHandler(@RequestBody Player player){
        Player returnedPlayer = playerService.createNewPlayer(player);
        if(returnedPlayer == null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.status(201).body(returnedPlayer);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("{playerId}")
    public ResponseEntity<Player> updatePlayerHandler(@PathVariable int playerId,
                                                      @RequestBody Player player){
        Player returnedPlayer = playerService.updatePlayer(player);
        if(returnedPlayer == null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(returnedPlayer);
    }
}
