package com.revature.daos;

import com.revature.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerDAO extends JpaRepository<Player, Integer> {

    List<Player> findAllByOrderByPassYardsDesc();
}
