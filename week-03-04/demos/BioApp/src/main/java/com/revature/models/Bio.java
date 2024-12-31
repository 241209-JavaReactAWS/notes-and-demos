package com.revature.models;

import jakarta.persistence.*;

@Entity
@Table(name = "bios")
public class Bio {
    /*
    This class is going to be a model class for my API. It will hold a Bio (short for biography)
    - BioId
    - Name
    - Short Description
     */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bioId;

    private String name;

    private String description;

    public Bio() {
    }

    public Bio(int bioId, String name, String description) {
        this.bioId = bioId;
        this.name = name;
        this.description = description;
    }

    public int getBioId() {
        return bioId;
    }

    public void setBioId(int bioId) {
        this.bioId = bioId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
