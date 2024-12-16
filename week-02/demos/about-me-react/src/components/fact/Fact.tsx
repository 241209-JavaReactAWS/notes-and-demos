
/*
The idea here is thaty since all 3 of the facts contain similar formatting but just different internal info
We can extract it to a component that can be REUSED

To get the information INTO this component I need to declare that this component takes in props
Props -> Properties passed from a parent component to a child component. The data flow is ONE WAY. Props are 
usually used for initialization info
*/

interface FactProps{
    id: number,
    fact: string,
    isTrue: boolean
}

function Fact(props: FactProps) {
  return (
    // Similar to template literals in plain JS, we can INJECT JS/TS directly by using {}
    // Ternary operator is used in place of an if statement
    <tr className={props.isTrue ? 'truth' : 'lie'}>
        <th>{props.id}</th>
        <td>{props.fact}</td>
    </tr>
  )
}

export default Fact
