/*
Arrays are most similar to Lists in Java
In Java arrays are of a fixed size, ordered/indexable, and allow duplicates
In JS arrays are dynamically sized, ordered/indexable, and allow duplicates
*/

let simpleArray = [1, "two", false, {property: "value"}, 1]

// We saw earlier that we can iterate over this structure with a for-of

// To add new items to the array use the push method
simpleArray.push('2')

// To insert at a specific index let's splice
// Splice takes 3 arguements: index, number of elements to delete, and what to replace it with
simpleArray.splice(1, 0, "Spliced in!")

// Next let's look at the foreach function
// The foreach method takes something in called a callback function
// A callback function is just a function passed to another function
// This particular callback function is an ANONYMOUS function
simpleArray.forEach(function(x){
    console.log(x)
});

console.log("-----------------")

// Removal of elements
// To remove from the beginning of the array you'll shift
// To remove from the end, you'll pop
let x = simpleArray.shift()
let y = simpleArray.pop()

console.log(x)
console.log(y)

// Other functions that are useful are map and filter