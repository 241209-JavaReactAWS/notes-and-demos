package com.revature.services;

import com.revature.daos.BioDAO;
import com.revature.models.Bio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BioService {

    private final BioDAO bioDAO;

    @Autowired
    public BioService(BioDAO bioDAO) {
        this.bioDAO = bioDAO;
    }

    // TODO Create a new bio
    public Bio createNewBio(Bio bio){
        return bioDAO.save(bio);
    }

    // Todo GET all bios
    public List<Bio> getAllBios(){
        return bioDAO.findAll();
    }

    // Todo Get all bios by a specific name
    public List<Bio> searchByName(String name){
        // Validation to make sure name is not null
        return bioDAO.findAllByNameIgnoreCase(name);
    }
}
