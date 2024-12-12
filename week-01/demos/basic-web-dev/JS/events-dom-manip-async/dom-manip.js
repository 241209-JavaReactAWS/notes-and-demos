/*
DOM Manipulation is the practice of using JS to dynamically modify the DOM
What is the DOM?
    - Document Object Model -> A Tree structure that gets generated every an html page is loaded and it
    contains all of the elements, their child elements and associated attributes

We can hook into the DOM and update it dynamically using JS

GOAL: Target a specific HTML element and add child elements to it
*/

let customers = [
    {
        customerId: 1,
        firstName: 'John',
        lastName: 'Smith',
        purchaseAmount: 123.45
    },
    {
        customerId: 2,
        firstName: 'Terra',
        lastName: 'Dactyl',
        purchaseAmount: 12.43
    },
    {
        customerId: 3,
        firstName: 'Valerie',
        lastName: 'Frizzle',
        purchaseAmount: 36.87
    }
]

// Normally all this information would come from some API

// First we need to target an element
let customerContainer = document.getElementById('customer-container')
// Here we looked up the customer container by using its id, you can also use class, tag or any other
// CSS selector

function populateCustomers(customers){

    // So what we want to do is iterate over the list of customers and add elements for each one
    for (customer of customers){


        // Now that we're iterating over each customer, let's create an HTML element to store the customer
        // info

        let cDiv = document.createElement('div')

        // Fill the div with info
        // cDiv.innerHTML = "<h2>" + customer.firstName + "</h2>"

        // Let's add the rest of the customer info
        /*
        Template literals were introduced in ES6 and are used for directly inject JS into your strings
        Uses `` and ${}
        */
        cDiv.innerHTML = `
        <h2>${customer.firstName} ${customer.lastName}</h2>
        <p>Customer Id: ${customer.customerId} </p>
        <p>Purchase Amount: ${customer.purchaseAmount} </p>
        `

        // Before appending, since I want to update the styling using the customer class I need to
        // add the customer class to the cDiv itself
        cDiv.setAttribute('class', 'customer')
        cDiv.setAttribute('id', `customer-${customer.customerId}`)

        // Append the div to the existing container
        customerContainer.append(cDiv)
    }
}

// populateCustomers(customers)
// Later this will be performed during an API call


/*
PROMISES IN JS

A Promise in JS is a special kind of object that represents the promise of a future value
Since JS is single-threaded it has certain operations are performed async via the web api
So instead of waiting for a specific response JS passes off the responsibility to the event loop and continues
working for now

TLDR: HTTP Calls take time, JS doesn't want to wait

Since promises are the promise of a future value they need to be able to handle all possibilities: 
success or a failure

*/

let promise = new Promise(function (resolve, reject){
    // A promise takes in 2 functions, and once it receives a value it will execute them

    let x = 2
    let y = 3

    if (x >= y){
        resolve(x)
    } else{
        reject(x)
    }
})

// We can view the value of a promise through the use of consumer function
// The resolve function is handled with the .then syntax and reject is handled with .catch
// Arrow functions are used all the time here, basically a shorthand way to write out a function

// promise
//     .then((x) => x = x * 2)
//     .then((x)=> console.log(x))

// promise.then(function (x) {x = x*2})

promise
    .then((x) => console.log("The promise resolved, this is like receiving a 200 status HTTP response"))
    .catch((err) => console.log("The promise rejected, meaning there was an error like a 400 or 500 status code"))
    .finally(() => console.log("This happens regardless of the result"))


// Let's actually use this for something useful

// JS classifies API calls via fetch as async, so they will always implicitly return promises

/*
The Fetch API is built into JS and it a simple way to send Http Requests that are fully customizable and easier
to work with that traditional AJAX requests

The default fetch request is a GET request so let's send one of those to our backend
*/

let data = fetch("http://localhost:8080/customers")

// Once the response is retrieved, we need to execute the populateCustomers function

data
    .then((data)=> data.json()) // Converts to JS Object
    .then((data) => populateCustomers(data))
    .catch((err) => console.log(err))


/*
We ran into 2 CORS issues when executing this:
    - The request was coming from a null origin, this is because we ran this as a file and it's not coming from
    an actual website, resolved this by hosting the site with Live Server extension
    - The backend is not ready to accept requests from the specified origin. We resolved this by adding the 
    @CrossOrigin annotation on our controller classes and marking the specific origin
*/