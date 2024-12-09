package com.revature.models;

import jakarta.persistence.*;

@Entity // (Marks this class as one that needs to be tracked by Spring Data JPA)
@Table(name = "customers") // @Table is used to provide Config info for your table like name, schema etc
public class Customer {
    // Customer information
    // Id (Primary Key)
    // First name
    // Last name
    // Purchase Amount

    @Id // Marks this field as the Primary Key (Unique and Not Null)
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Generates a value automatically based on strategy
    private int customerId;

    @Column(name = "first_name") // Provides config at the column level
    private String firstName;

    private String lastName;

    private double purchaseAmount;

    // Constructors: Special Methods designed to create objects of this class and initialize fields
    public Customer(){
        // REQUIRED for Jackson Databind (library that converts between Java objects and JSON)
    }

    public Customer(double purchaseAmount, String lastName, String firstName) {
        this.purchaseAmount = purchaseAmount;
        this.lastName = lastName;
        this.firstName = firstName;
    }

    public Customer(int customerId, String firstName, String lastName, double purchaseAmount){
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.purchaseAmount = purchaseAmount;
    }

    // Getters and Setters (Mutators)
    public int getCustomerId(){
        return this.customerId;
    }

    public void setCustomerId(int customerId){
        this.customerId = customerId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public double getPurchaseAmount() {
        return purchaseAmount;
    }

    public void setPurchaseAmount(double purchaseAmount) {
        this.purchaseAmount = purchaseAmount;
    }
}
