/*
TS is an OOP language, why havent we made any classes?

NOTE: Classes also exist in JS, but the TS classes are more robust and offer solutions for the different pillar
of OOP
*/

class Animal{
    // Fields
    // Readonly is like final in Java, once it's set it cannot be changed
    readonly name: string;
    private species: string

    // Static Variable
    // Static members belong to the CLASS and not the object
    static sampleVariable = 3

    // Constructors
    constructor(name:string, species:string){
        this.name = name;
        this.species = species
    }

    // Getters and Setters
    // So with classes in Java, we use ENCAPSULATION to protect our variables by marking them as private
    // and creating getters and setters. TS has 3 access modifiers: public, protected, and private

    get getSpecies(): string {
        return this.species
    }

    set setSpecies(species:string){
        this.species = species
    }

    // Methods
    move(feet: number){
        console.log(`${this.name} moved a total of ${feet} feet`)
    }
}

// Let's create an object of that type
let perry = new Animal("Perry", "Platypus")

// check our variables
console.log(perry.name)
console.log(perry.getSpecies); // Getters are called like variables

perry.move(5)

console.log(Animal.sampleVariable)

Animal.sampleVariable = 4;

console.log(Animal.sampleVariable)

// PILLARS OF OOP
// INHERITANCE

// POLYMORPHISM

// ABSTRACTION