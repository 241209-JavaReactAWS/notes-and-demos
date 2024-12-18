package com.revature.services;

import com.revature.daos.PlayerDAO;
import com.revature.daos.UserDAO;
import com.revature.models.Player;
import com.revature.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    private final UserDAO userDAO;

    private final PlayerDAO playerDAO;

    @Autowired
    public UserService(UserDAO userDAO, PlayerDAO playerDAO) {
        this.userDAO = userDAO;
        this.playerDAO = playerDAO;
    }

    // TODO LOGIN METHOD
    public User login(String username, String password){
        // Look up the user by the username
        Optional<User> possibleUser = userDAO.getUserByUsername(username);

        // Check to make sure the user exists
        if (possibleUser.isEmpty()){
            return null;
        }

        // At this point we've validated that the user exists
        User returnedUser = possibleUser.get();

        // Validate the password added in will match the db password
        if (returnedUser.getPassword().equals(password)){
            return returnedUser;
        }

        return null;
    }

    // TODO ADD PLAYER TO USER'S FAVORITES
    public User addPlayerToFavorites(String username, int playerId){
        // Look up the user
        Optional<User> possibleUser = userDAO.getUserByUsername(username);

        // Look up the player
        Optional<Player> possiblePlayer = playerDAO.findById(playerId);

        // Validate that they both exist
        if (possibleUser.isEmpty() || possiblePlayer.isEmpty()){
            return null;
        }

        // Extract the values now that I know they exist
        User returnedUser = possibleUser.get();
        Player returnedPlayer = possiblePlayer.get();

        // Add the player to the list of favorites
        Set<Player> favorites = returnedUser.getFavorites();
        favorites.add(returnedPlayer);
        returnedUser.setFavorites(favorites);

        // Save the user now that the info is updated
        return userDAO.save(returnedUser);
    }


    // TODO REMOVE PLAYER TO USER'S FAVORITES
    public User removePlayerFromFavorites(String username, int playerId){
        // Look up the user
        Optional<User> possibleUser = userDAO.getUserByUsername(username);

        // Look up the player
        Optional<Player> possiblePlayer = playerDAO.findById(playerId);

        // Validate that they both exist
        if (possibleUser.isEmpty() || possiblePlayer.isEmpty()){
            return null;
        }

        // Extract the values now that I know they exist
        User returnedUser = possibleUser.get();
        Player returnedPlayer = possiblePlayer.get();

        // Remove the player from the list of favorites
        Set<Player> favorites = returnedUser.getFavorites();
        favorites.remove(returnedPlayer);
        returnedUser.setFavorites(favorites);

        // Save the user now that the info is updated
        return userDAO.save(returnedUser);
    }
}
