/*
Functions in JS are very similar in nature to Java 
Basically just a block of repreatable code that can also be called with different parameters
*/

function simpleFunction(){
    // Notice that unlike java I don't have to declare anything besides the name of the function and the
    // parameters
    console.log("I'm inside a function!")
}

// Just like any language, you need to call a function for it to be run
simpleFunction();

// Let's create a function to see if a number is even

function isEven(num){
    if (num % 2 == 0){
        return "Even"
    } else {
        return "Odd"
    }
}

console.log(isEven(7))
console.log(isEven(4))


// Default values
// Very similar to an overloaded method in Java, you can create methods with default parameters so
// you can call the function with a different amount of arguments

function multiply(x, y=2){
    return x * y;
}

console.log(multiply(7,5))
console.log(multiply(9))

/*
Fun Quirks of JS
Truthy/Falsy and type coercion
*/

let str = ""

if (str){
    console.log("String is true!")
} else {
    console.log("String is false!")
}

/* What happens here?
// JS is attempting to convert the value of str to true/false
// 1. If the value is not falsy, it's truthy

Falsy Values:
null,
undefined,
false,
empty string,
0, 
NaN (Not a Number)
*/

// Why does this happen?
/*
JavaScript is weakly typed which means that when we attempt to perform an operation, if the datatypes
are not compatible, JS will attempt coerce variable into a different type to allow the operation to 
continue
*/

let x = "3" / 4
console.log(x)
// This converts "3" to 3 the number and then performs the operation

console.log(true + true + true)
// This prints out 3 since true converts to 1

/*
JavaScript has 2 equality operators:
== (loose equality) -> Attempts to perform type coercion if needed and checks if the VALUES are the same
=== (strict equality) -> Checks that both the DATATYPE AND VALUE are equal
*/

console.log("5" == 5);
console.log("5" === 5)

// If you're not sure what to use, default to ===