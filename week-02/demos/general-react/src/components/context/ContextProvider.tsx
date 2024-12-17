
/*
So before we had to perform PROP DRILLING, this is a process of passing props down through related components
that don't require the value to get to one that does.

To resolve this we can use the useContext hook to declare a value that can be shared amongst different components
without prop drilling
*/

import { createContext } from "react"
import ContextConsumer1 from "./ContextConsumer1"
import ContextConsumer2 from "./ContextConsumer2"

// This context object behave a lot like a shared variable
export const stringContext = createContext("default String")


function ContextProvider() {
    
    // We take the context and provide to the required components
  return (
    <div>
        <stringContext.Provider value={"Initial String"}>
            {/* Inside of this provider tag, we'll have ALL of the components that we want to receive this
            value, it will also be accessible by child components */}
            <ContextConsumer1 />
            <ContextConsumer2 />
            {/* NOTICE: The value is not being passed as props */}

        </stringContext.Provider>
      
    </div>
  )
}

export default ContextProvider
