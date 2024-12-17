import { useContext } from "react"
import { stringContext } from "./ContextProvider"


function ContextConsumer1() {
    // In this class I'll consume the value of the context and render it on the screen

    // To consume the value from the context I'll use the useContext hook to reference the stringContext
    const stringContextReference = useContext(stringContext)

  return (
    <div>
      <h1>1: String value is {stringContextReference}</h1>
    </div>
  )
}

export default ContextConsumer1
