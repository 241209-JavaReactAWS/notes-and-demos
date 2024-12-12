/*
GOAL: When we click the record customer button we should send a request to our backend, which save the user in
the database and then returns the appropriate result
*/

let firstNameInput = document.getElementById('firstNameInput')
let lastNameInput = document.getElementById('lastNameInput')
let purchaseAmountInput = document.getElementById('purchaseAmountInput')
let createCustomerButton = document.getElementById('recordCustomerButton')

// Process
// Create the function

/*
One of the other changes added in ES6 was the use of async and await
Using async on a function marks it as asynchronous, meaning any time it's called it's passed off the the web api
    and handled/resolved in the background and JS will continue until it finds the time to finish the call

Await is a fun keyword that can only be used inside of an async function. It tell JS to halt the operation of that
function until a promise is resolved or rejected
*/

async function submitNewCustomer(){

    let firstNameValue = firstNameInput.value;
    let lastNameValue = lastNameInput.value;
    let purchaseAmountValue = purchaseAmountInput.value;

    // Let's create a customer object
    let customer = {
        //It's important that the PROPERTY NAMES match with the JAVA VARIABLES
        firstName: firstNameValue,
        lastName: lastNameValue,
        purchaseAmount: purchaseAmountValue
    }

    // The customer object is now packaged and ready to ship in a POST request to our backend
    let data = await fetch("http://localhost:8080/customers", {
        // Inside of here I will add any additional info required for my request to work
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        // Stringify takes a JS object and turns it into a JSON String
        body:JSON.stringify(customer)
    })

    // Let's try something really quick
    // Let's convert the whole response from the HTTP request to a JS object so we can print it
    let response = await data.json();

    console.log(response)
    console.log("Method finished")

    // If we need to wait for the body to come back BEFORE printing, how do we do that?
    // What is the unsupported media type issue?
}

// Add event Listener
createCustomerButton.addEventListener('click', submitNewCustomer)