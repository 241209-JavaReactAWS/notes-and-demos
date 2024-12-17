import { ChildProps } from '../ChildProps'
import GreatGrandchild from '../great-grandchild/GreatGrandchild'
import './Grandchild.css'

function Grandchild(props: ChildProps) {
  return (
    <div className="grandchild">
      <h3>Hello from the Grandchild Component!</h3>
      <h3>I do not care about having the name value</h3>
      <GreatGrandchild name={props.name} setName={props.setName}/>
    </div>
  )
}

export default Grandchild
