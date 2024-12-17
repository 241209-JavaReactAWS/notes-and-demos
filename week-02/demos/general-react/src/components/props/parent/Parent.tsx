
/*
As mentioned before, to have the state variable in multiple locations, we need to find the common ancestor
between the components and define the state there. From there the variable and sometimes setter function
are passed down through props to the desired component
*/

import { createContext, useState } from "react"
import './Parent.css'
import Child from "../child/Child"

export const valueContext = createContext(0)

function Parent() {
    const[nameValue, setNameValue] = useState('Bryan')

    let toggleName = () => {
        // if (nameValue === "Bryan"){
        //     setNameValue("John")
        // } else {
        //     setNameValue("Bryan")
        // }
        setNameValue(nameValue === "Bryan" ? "John" : "Bryan")

        // Ideally, when we have the nameValue state variable change, we'll see updates in our rerender components
    }

  return (
    <valueContext.Provider value={42} >
        <div className="parent">
            <h1>Hello from our Parent Component!</h1>
            <h1>The value stored in nameValue is {nameValue}</h1>
            <button onClick={toggleName}>Toggle Name!</button>
            <Child name={nameValue} setName={setNameValue}/>
        </div>
    </valueContext.Provider>
  )
}

export default Parent
