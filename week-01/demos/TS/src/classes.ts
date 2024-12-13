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
// We're going to inherit the Animal class and make a child class called
class Dog extends Animal{
    // Dogs are Animals, meaning they have access to the fields and methods from the Animal class

    bark(): void {
        console.log("ARF ARF ARF")
    }

    // POLYMORPHISM
    // Generally happens in extended classes. So there are two ways to achieve polymorphism
    // Overriding
    move(feet: number){
        console.log(`The dog ${this.name} moved a total of ${feet} feet. What a good boy!`)
    }
    // Overloading
    // someMethod(a: string): void
    // someMethod(a : number) : void;
    // someMethod(a: number, b: string) : void;
    // someMethod(a : number |string, b?: string): void{
    //     // So this might work for overloading, not entirely sure
    // }
}

let cash = new Dog("Cash", "Pit Bull")
cash.bark()
cash.move(0)



// ABSTRACTION
abstract class Car{
    // This can contain both abstract and concrete methods
    abstract drive():void;
    // Implementing class must provide the drive method itself

    alarm():void{
        console.log("BEEP BEEP BEEP")
    }
}

class Jeep extends Car{
    drive(): void {
        console.log("Fuel Burns, Pistons Turn, Exhaust is Created, Jeep moves forward")
    }
}

class Tesla extends Car{
    drive(): void {
        console.log("Drains electricity from the battery, car moves forward")
    }
}

let greenJeep: Car = new Jeep();
// A Jeep is a TYPE of Car
greenJeep.drive()

let whiteTesla: Car = new Tesla();
whiteTesla.drive()