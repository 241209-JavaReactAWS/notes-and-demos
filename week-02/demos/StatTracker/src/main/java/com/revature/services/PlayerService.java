package com.revature.services;

import com.revature.daos.PlayerDAO;
import com.revature.models.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService {

    private final PlayerDAO playerDAO;

    @Autowired
    public PlayerService(PlayerDAO playerDAO) {
        this.playerDAO = playerDAO;
    }

    // TODO GET ALL PLAYERS
    public List<Player> getAllPlayers(){
        return playerDAO.findAll();
    }

    // TODO ADD A NEW PLAYER
    public Player createNewPlayer(Player playerToBeAdded){
        // Now here we'd do all sorts of validation to make sure the numbers are valid
        // After the validation is done and we know the player is valid, we save them to the db
        return playerDAO.save(playerToBeAdded);
    }

    // TODO UPDATE AN EXISTING PLAYER
    public Player updatePlayer(Player playerToBeUpdated){
        // In terms of validation, a lot of the same things need to occur as createNewPlayer
        // Additional pieces of validation is making sure the player already exists and we only update the fields
        // they send in

        // When updating information in the db we also use the save method
        return playerDAO.save(playerToBeUpdated);
    }
}
