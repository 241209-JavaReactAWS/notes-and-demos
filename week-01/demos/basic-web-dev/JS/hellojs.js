/*
This is a multiline comment in JavaScript

What is JavaScript (JS)?
If HTML is the structure of our webpage and CSS is the styling, JS is in charge of the functionality
    - Click a button
    - Type something in
    - Dragging items across the screen

The most common use case for JS is this frontend functionality though some use it in conjuction with 
other enviroments for server-side coding.

Notes about JS:
High-Leveled: This means it has automatic memory management and garbage collection, it's farther away
    from machine code and more human readble
Dynamically typed and weakly typed: 
    Dynamic Typing vs Static Typing: In a statically typed language like Java, datatypes are determined
    at compile time. Dynamic typing is different, the assignment of a datatype happens at runtime. 
    Strong vs Weak typing: In a strongly typed language, you'd expect the datatype of a variable to NOT
    change during operations unless explicitly told to.
Single-Threaded:
    Can only have one execution state at a time. So it can't achieve true multithreading like a language 
    like Java
Multi-Paradigmed:
    JS can be used for OOP, or functional programming, or procedural programming 
Interpreted:
    In a compiled language, the entire program or file is compiled BEFORE the execution ever starts,
    whereas in an Interpreted language the code gets compiled one line at a time as needed.
*/

// Whenever you start with a new language, usually you want to check the tools you already have access to
var x = 10;
// Notice that I didn't provide a datatype
x = "Ten"
x = false
x = true
x = {
    name: "bryan"
}
x = 10
// All of these are valid statement since the datatype is determined at runtime

// How do I go about seeing this in any capacity?
console.log(x)
console.log("Hello, World!")

// Let and Const 
/*
What are let and const? 
Let and const are different ways to declare variables beyond just var
    - Let operates almost the exact same as var
    - Const allows for the creation of constant variable
Why are there different ways to declare variables?
Var is globally scoped so this can cause various namespace issue especially when declaring variables in
block scope or method scope, so in ES6, let and const were introduced to remedy this problem

What is ES6? This is from ECMAScript which is a standrad for JS and other scripting languages 
*/

let y = 5

y = "Five"

const z = 6

// z = "Six"

console.log(y)
console.log(z)


/*
Datatypes

Just because we're not defining the datatypes on each variable does not mean they don't exist

Primitives: number, boolean, string, undefined, null, BigInt, and Symbol

Number: Any number, whether positive, negative or a decimal
Boolean: true/false
Strings: Collection of text (Defined by "", '', ``)
Undefined: Declaring a variable but not assigning a value
Null is the intentional absence of a value

Objects
Objects in JavaScript are created by using key-value pairs and should look familiar
JSON strings look just this when we use HTTP?
JSON stands for JavaScript Object Notation
*/

let sampleObject = {
    username: "bryanserfozo",
    password: "password",
    empId: 51,
    isMarried: false
}

// Control Flow
// Control flow is a collection of coding structures that control the flow

// If-Else Statements

let a = 0

if (a > 0){
    console.log("A is positive!")
} else if (a == 0) {
    console.log("A is zero")
} else {
    console.log("A is negative")
}

// For Loops
for(let i = 0; i < 5; i++){
    console.log("The number is " + i)
}

// The are a couple other for loops in JS that we'll get to

// While Loops
let day = "Thursday"

while (day != "Friday"){
    console.log("The current day is " + day)
    if (day == "Monday"){
        day = "Tuesday"
    } else if (day == "Tuesday"){
        day = "Wednesday"
    } else if (day == "Wednesday"){
        day = "Thursday"
    } else if (day == "Thursday"){
        day = "Friday"
    } else if (day == "Friday"){
        day = "Saturday"
    } else if (day == "Saturday"){
        day = "Sunday"
    } else {
        day = "Monday"
    }
}

console.log("The day is friday, go enjoy your weekend!")

console.log('--------------------------')

// We have a couple more niche pieces of controls
// Do while loops
// DO statements execute BEFORE while conditional is checked
do{
    console.log("The current day is not friday!")
} while (day != "Friday")

// For-of Loops
// Used for iterable objects like arrays
let simpleArray = [1,2,3,4,5,15]

for(let num of simpleArray){
    console.log(num)
}

// For-in loops
// These are used for iterating over OBJECTS
let person = {
    name: "Kaitlyn",
    age: 25,
    isMarried: false
}

for(let prop in person){
    console.log(person[prop])
}

console.log(person["name"])