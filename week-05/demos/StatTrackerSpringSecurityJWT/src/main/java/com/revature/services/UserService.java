package com.revature.services;

import com.revature.daos.PlayerDAO;
import com.revature.daos.UserDAO;
import com.revature.models.Player;
import com.revature.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    private final UserDAO userDAO;

    private final PlayerDAO playerDAO;

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserDAO userDAO, PlayerDAO playerDAO, PasswordEncoder passwordEncoder) {
        this.userDAO = userDAO;
        this.playerDAO = playerDAO;
        this.passwordEncoder = passwordEncoder;
    }

    public User login(String username, String password){

        Optional<User> possibleUser = userDAO.getUserByUsername(username);

        if (possibleUser.isEmpty()){
            return null;
        }

        User returnedUser = possibleUser.get();

        // Validate the password added in will match the db password
        if (passwordEncoder.matches(password, returnedUser.getPassword())){
            return returnedUser;
        }

        return null;
    }

    public User register(User user){
        // Encrypt the password
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userDAO.save(user);
    }

    public User addPlayerToFavorites(String username, int playerId){

        Optional<User> possibleUser = userDAO.getUserByUsername(username);
        Optional<Player> possiblePlayer = playerDAO.findById(playerId);
        if (possibleUser.isEmpty() || possiblePlayer.isEmpty()){
            return null;
        }
        User returnedUser = possibleUser.get();
        Player returnedPlayer = possiblePlayer.get();
        Set<Player> favorites = returnedUser.getFavorites();
        favorites.add(returnedPlayer);
        returnedUser.setFavorites(favorites);
        return userDAO.save(returnedUser);
    }



    public User removePlayerFromFavorites(String username, int playerId){
        Optional<User> possibleUser = userDAO.getUserByUsername(username);
        Optional<Player> possiblePlayer = playerDAO.findById(playerId);
        if (possibleUser.isEmpty() || possiblePlayer.isEmpty()){
            return null;
        }
        User returnedUser = possibleUser.get();
        Player returnedPlayer = possiblePlayer.get();

        Set<Player> favorites = returnedUser.getFavorites();
        favorites.remove(returnedPlayer);
        returnedUser.setFavorites(favorites);

        return userDAO.save(returnedUser);
    }

    public User getUserByUsername(String username){
        Optional<User> possibleUser = userDAO.getUserByUsername(username);
        return possibleUser.orElse(null);
    }
}
