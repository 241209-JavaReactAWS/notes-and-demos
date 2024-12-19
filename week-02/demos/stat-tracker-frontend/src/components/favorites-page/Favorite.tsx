
/*
This component will render each individual Favorite player so it needs the information about the player passed 
to it. We do this through readonly variables known as props
*/

import { Player } from "../../interfaces/Player"

function Favorite(props: Player) {
  return (
    <div style={{
        border: "2px black solid",
        margin: "10px"
    }}>
      <h2>{props.name}</h2>
      <p>Passing Yards: {props.passYards}</p>
      <p>Touchdowns: {props.touchdowns}</p>
      <p>Interceptions: {props.interceptions}</p>
    </div>
  )
}

export default Favorite
