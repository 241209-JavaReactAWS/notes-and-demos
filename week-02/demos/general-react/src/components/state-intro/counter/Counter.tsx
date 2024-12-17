import { useState } from "react";


function Counter() {
    /*
    To achieve state in our functional component, we'll use the useState Hook, what exactly is a hook?
    Hooks are special methods that start with "use" and are leveraged by functional components to "hook" into
    various lifecycle methods for the component
    */

    // We'll get started by using useState to add in a variable to control the state of the component
    const [counterValue, setCounterValue] = useState(0);
    /*
    First the right side of this statement leverages useState to declare a new state variable and give it a 
    base value. The second thing the right gives is a setter function. We'll leverage the setCounterValue function
    to manipulate the state

    What is []=useState()? Well since useState returns 2 things, we can destructure them into 2 separate variables
    using this syntax
    */


    /*
    Inside of this component I want to do several things. First thing is going to be creating a button that 
    increments the value of a counter
        - Event Handle
        - Keep track of the value itself
    */

    // The component will rerender, calling this statement again, meaning the variable will be reinitialized to zero
    let counter = 0

    let doSomething = () => {
        console.log("Did Something!")
        counter++; // counter = counter + 1
        console.log(counter)

        // Use the state setter to update the state
        setCounterValue(counterValue + 1)
    }

    

    /*
    What's going on up here? We're changing the value of counter but the page is still showing that the counter 
    is at zero. The console clearly shows the value increasing so we get this to render on the page?
    SOLUTION: Use STATE

    What is State?
    State is a representation of the data held inside a component, it can be used to dynamically rerender things
    as the value changes
    */

    
  return (
    <div>
        {/* <p>Button Has Been Clicked {counter} times</p> */}
        <p>(Stateful) Button has been clicked {counterValue} times </p>
        {/* Basic event handling can be done by using the "on..." notation and adding in the function to be
        executed */}
      <button onClick={doSomething}>Click me to do something!</button>
    </div>
  )
}

export default Counter
