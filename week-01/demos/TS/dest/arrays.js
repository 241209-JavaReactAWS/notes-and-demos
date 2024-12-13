"use strict";
// Arrays in TS are almost identical to the ones you see in JS 
// (ordered/indexable, dynamic in length, allow duplicates)
// The major difference is that you have to specify the type for the array contents
let numArray = [1, 2, 3, 4, 5];
// All of the same data types from before do follow here
let stringOrBoolArray = [true, false, true, "string"];
// We also have access to Generics in TS like those in Java, <>
let genericArray = [1, 2, 3, 4, true, false];
// TUPLES
// Tuples will LOOK similar to Arrays
// THEY ARE NOT THE SAME
// Tuples are FIXED LENGTH, where we specify the TYPE of data returned at EVERY INDEX
// Let's use an HTTP response as an example
// HTTP Responses have 3 primary components: status code, http headers, body (JSON String)
let httpResponse;
// This creates a data structure with ONLY 3 elements and they must adhere to these types
httpResponse = [201, ["Content-Type=application/json", "Authorization=username"], "{'username': 'Janedoe'}"];
// Very useful for retruning out of functions, especially when you have multiple values to return at once
console.log(httpResponse[2]);
