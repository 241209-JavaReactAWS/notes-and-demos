"use strict";
/*
TS is an OOP language, why havent we made any classes?

NOTE: Classes also exist in JS, but the TS classes are more robust and offer solutions for the different pillar
of OOP
*/
class Animal {
    // Constructors
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    // Getters and Setters
    // So with classes in Java, we use ENCAPSULATION to protect our variables by marking them as private
    // and creating getters and setters. TS has 3 access modifiers: public, protected, and private
    get getSpecies() {
        return this.species;
    }
    set setSpecies(species) {
        this.species = species;
    }
    // Methods
    move(feet) {
        console.log(`${this.name} moved a total of ${feet} feet`);
    }
}
// Static Variable
// Static members belong to the CLASS and not the object
Animal.sampleVariable = 3;
// Let's create an object of that type
let perry = new Animal("Perry", "Platypus");
// check our variables
console.log(perry.name);
console.log(perry.getSpecies); // Getters are called like variables
perry.move(5);
console.log(Animal.sampleVariable);
Animal.sampleVariable = 4;
console.log(Animal.sampleVariable);
// PILLARS OF OOP
// INHERITANCE
// We're going to inherit the Animal class and make a child class called
class Dog extends Animal {
    // Dogs are Animals, meaning they have access to the fields and methods from the Animal class
    bark() {
        console.log("ARF ARF ARF");
    }
    // POLYMORPHISM
    // Generally happens in extended classes. So there are two ways to achieve polymorphism
    // Overriding
    move(feet) {
        console.log(`The dog ${this.name} moved a total of ${feet} feet. What a good boy!`);
    }
}
let cash = new Dog("Cash", "Pit Bull");
cash.bark();
cash.move(0);
// ABSTRACTION
class Car {
    // Implementing class must provide the drive method itself
    alarm() {
        console.log("BEEP BEEP BEEP");
    }
}
class Jeep extends Car {
    drive() {
        console.log("Fuel Burns, Pistons Turn, Exhaust is Created, Jeep moves forward");
    }
}
class Tesla extends Car {
    drive() {
        console.log("Drains electricity from the battery, car moves forward");
    }
}
let greenJeep = new Jeep();
// A Jeep is a TYPE of Car
greenJeep.drive();
let whiteTesla = new Tesla();
whiteTesla.drive();
