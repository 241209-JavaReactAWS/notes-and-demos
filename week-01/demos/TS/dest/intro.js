"use strict";
/*
Welcome to our first TypeScript file, not the .ts extension instead of the .js extension

Recall, we talked that TypeScript is a TYPED SUPERSET of JavaScript
    It can do everything JS can do and more
    It supports strong and static typing for compile time type safety
    It's an OOP language developed by Microsoft
*/
let sampleVariable = "Hello World!";
// At this point sample variable is ONLY a string and cannot be changed to another type
// sampleVariable = 6
// sampleVariable = false
sampleVariable = "Another string";
/*
Datatypes In TS

boolean -> true/false
string -> collection of characters
number -> any number
null -> intentional absence of a value
undefined -> declaring a variable without assignment

Any
Unknown
Void
Enums
Tuples
Union Types
Arrays
Never
*/
// Explicit Type declaration
let x = 5;
console.log(x);
// Implicit type declaration
let bool = true;
console.log(bool);
// bool = "Something else"
/*
Why do we care about type safety?

The main idea of TS is to preserve the functionality of JS but give you the strong/static type checking
    - Reduces the amount of "quirks" JS has due to implicit type coercion
    - Better for larger groups working together or larger codebases that can't be kept track of by one person
    - Better Intellisense, basically the IDE can help you more by providing correct fill-ins because it knows
    what type you're working with and by extension, what's available to that type
*/
// Any is used for when you want a variable to behave like a JS one, so anything can happen
let y = true;
y = "String";
y = 6;
// Unknown type
// Behaves similarly to the any type, but this is used when the type of a variable is not known
let z = true;
z = "String";
z = 6;
// What exactly is the difference? Any will allow ANY operation to occur whereas unknown is a little more safe
// and prevents unknown operations from executing
// y.someFunction();
// z.someFunction(); 
// z would have to be cast to some datatype before trying to call a function on it
// COME BACK TO ME LATER: Can we have a datastructure that accepts any type
// Union Types
// Union types live in the middle of both regular datatypes and any. So you can provide a list of various types
// that a variable is allows to be 
let boolOrString = true;
boolOrString = "A String";
// We may use this for arrays of different types
// Void is pretty simple, it's a return type for a function that doesn't return a value
function myFirstFunction(message) {
    console.log(message);
}
myFirstFunction("Hello from inside a function");
// myFirstFunction(16);
// Different shapes of data
// Let's create a function that takes in a parameter thats more complex than what we've done so far
function sendOfferletter(emailObject) {
    console.log(`Hello ${emailObject.email}, we'd like to offer you the position of ${emailObject.position}.
        We're placing a tentative offer with a starting salary of $${emailObject.salary}`);
}
// To utilize the function above I need to pass an object with certain fields
let sampleEmailObject = {
    email: "bryan.serfozo@revature.com",
    position: "Java Full Stack Trainer",
    salary: 10
};
// Here I can pass the whole email object to the function as so
sendOfferletter(sampleEmailObject);
// Let's look at an object of the wrong shape
let wrongEmailObject = {
    email: "ethan@revature.com",
    opportunity: "Java full stack trainer",
    compensation: 10
};
// We can leverage this email type to allow us to create objects with the right shape
let emailTypeAlias = {
    email: "sample@example.com",
    salary: 1234,
    position: "whatever"
};
function sendBetterOfferLetter(emailObject) {
}
let p1 = {
    firstName: "John",
    lastName: "Smith",
    age: 36,
    isMarried: true
};
// I was always told it's rude to ask someone's age so maybe let's remove that as a REQUIRED field
let p2 = {
    firstName: "Jane",
    lastName: "Doe",
    isMarried: false
};
