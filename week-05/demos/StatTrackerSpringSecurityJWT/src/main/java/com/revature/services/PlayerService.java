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

    public List<Player> getAllPlayers(){
        return playerDAO.findAllByOrderByPassYardsDesc();
    }

    public Player createNewPlayer(Player playerToBeAdded){
        return playerDAO.save(playerToBeAdded);
    }

    public Player updatePlayer(Player playerToBeUpdated){
        return playerDAO.save(playerToBeUpdated);
    }
}
