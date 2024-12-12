/*
GOAL: Make something happen when we click the button or perform other events
Eventually we'll turn this into an HTTP request and go from there
*/

// First step: Grab the elements from the DOM
let usernameInput = document.getElementById("usernameInput")
let passwordInput = document.getElementById("passwordInput")
let registerButton = document.getElementById("createUserButton")

// Next we'll create a function that we expect to be called when the button is clicked
// Right now, we just want to print the username and password to the console
function submitNewUser(){
    
    // Grab the CURRENT value from the usernameInput and passwordInput
    let usernameValue = usernameInput.value;
    let passwordValue = passwordInput.value;

    // Now let's create an object to hold the info for this user
    let user = {
        username: usernameValue,
        password: passwordValue
    }

    // Pretend this sends an HTTP Request
    console.log(user)
}

// We have the function, why does nothing happen when we click the button?
// We need to register the click event on the button and associate with this function
// This is done through an Event Listener which tracks each element and records the events that occur, if the 
// right event happens it will execute the function

registerButton.addEventListener('click', submitNewUser)

// Hoisting (This is another fun thing about JS)
// Functions and variable DECLARATIONS (not assigned value) get HOISTED to the 
// top of their scope before executing the file

printMessage('hello')

function printMessage(message){
    console.log(message)
}

// Let's look at a slightly more dubious use case for events in JS
// We're going to make a simple keylogger

// The event object is something that JS creates that keeps track of information about the specific event that
// occurred. There are several different kinds of events so different pieces of information will be available

function printPressed(event){
    // This function will take in the event object and it will allows us to access different elements of the event
    // Since we plan on having this be used for a KeyboardEvent, we can get the key that was interacted with

    console.log(`The key pressed was ${event.key}`)
}

passwordInput.addEventListener('keydown', printPressed)

// We can directly add event listeners on the HTML side by using different attributes that look like "on..."

function usernameMouseOver(){
    console.log("Someone moused over the username field!")
}
