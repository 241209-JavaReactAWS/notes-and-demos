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

populateCustomers(customers)
// Later this will be performed during an API call