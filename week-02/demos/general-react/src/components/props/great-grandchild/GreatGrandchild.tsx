import { ChildProps } from "../ChildProps"
import "./GreatGrandchild.css"

function GreatGrandchild(props: ChildProps) {
  return (
    <div className="great-grandchild">
      <h4>Hello from the great grandchild component!</h4>
      <h4>I care about having the name value</h4>
      <h4>The name I have received is {props.name}</h4>
      <button onClick={() => {props.setName(props.name === "Bryan" ? "John": "Bryan")}}>Toggle Name</button>
    </div>
  )
}

export default GreatGrandchild
