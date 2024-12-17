/*
This class will be a container class to showcase off lifting state and how each component manages it's own state
*/

import { useState } from "react"
import Counter from "../counter/Counter"
import SharedCounter from "../shared-counter/SharedCounter";

function CounterContainer() {
    // When lifting state, define the state variable inside of the common ancestor component and pass both the
    // value and update function to the child
    const [sharedCounterValue, setSharedCounterValue] = useState(0);

    return (
        <div>
            {/* In this initial implementation, the counters keep track of their own state individually
            This means they can separate values for each individual counter.

            What if we want to change that? 
            What if I wanted to hold the current value inside of this container class and any time either button
            is clicked, we'll update the value

            Recall that data flows one-way in React: parent component -> child component
            How do I tell a parent component to update its state when the data only flows downward

            SOLUTION: Lifting state.

            If you have multiple components sharing the same state variable, you need to "lift" the state to their
            common ancestor component
        */}
            <h1>Non Shared state:</h1>
            <Counter />
            <Counter />

            <h1>Shared state via lifted state in parent component:</h1>
            <SharedCounter counterValue={sharedCounterValue} setCounterValue={setSharedCounterValue}/>
            <SharedCounter counterValue={sharedCounterValue} setCounterValue={setSharedCounterValue}/>
        </div>
    )
}

export default CounterContainer
