package com.revature.controllers;

import com.revature.models.Bio;
import com.revature.services.BioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bios")
public class BioController {

    private final BioService bioService;

    @Autowired
    public BioController(BioService bioService) {
        this.bioService = bioService;
    }

    // Here I can define endpoints for all of my methods

    // We'll attempt to follow RESTful conventions as much as possible

    //Todo Create a new bio handler
    @PostMapping
    public Bio createNewBioHandler(@RequestBody Bio bio){
        return bioService.createNewBio(bio);
    }

    // Todo Get all bios handler
    @GetMapping
    public List<Bio> getBiosHandler(@RequestParam(name = "name", required = false) String name,
                                    @RequestParam(name = "description", required = false) String description){

        // NOTE the description param was added by request, no functionality

        if (name == null){
            return bioService.getAllBios();
        } else{
            return bioService.searchByName(name);
        }

    }

    // Todo Get Bios By Name handler
    // http://localhost:8080/bios?name=john
}
