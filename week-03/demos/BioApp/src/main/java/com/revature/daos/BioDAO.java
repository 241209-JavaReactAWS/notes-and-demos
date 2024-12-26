package com.revature.daos;

import com.revature.models.Bio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BioDAO extends JpaRepository<Bio, Integer> {

    // This gives me access to all of my basic crud methods
    // Let's add in a simple custom query
    // Custom query for searching by name ignoring case

    List<Bio> findAllByNameIgnoreCase(String name);

    List<Bio> findAllByDescriptionContainsIgnoreCase(String description);
}
