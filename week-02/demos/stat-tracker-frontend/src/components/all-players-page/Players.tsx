import { useEffect, useState } from "react"
import { Player } from "../../interfaces/Player"
import axios from "axios"
import { BASE_API_URL } from "../../App"

function Players() {
    const [allPlayers, setAllPlayers] = useState<Player[]>([])

    /*
    Inside of this component we want to call the backend and get all of the information regarding our 
    players. So when this component loads we need to make a call to the backend and go from there

    GOAL Populate table, then lunch

    How do we put the information from our backend on our frontend
    */

    // To do this we'll use a new hook called useEffect
    // useEffect is useful for when you have a function that needs to be executed when a component renders or
    // if the value of a state variable changes
    // Just be careful using this, sometimes you can create infinite loops which can cause problems
    useEffect(() => {
        // This will execute when the component mounts and on certain other conditions
        // Send an AXIOS request when the page loads
        axios.get<Player[]>(`${BASE_API_URL}/players`)
        .then((res) => {
            setAllPlayers(res.data)
        })
    }, [])
    // This means the function will execute when the page loads


  return (
    <div>
        <h1>All Players</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Passing Yards</th>
                    <th>Attempts</th>
                    <th>Completions</th>
                    <th>Touchdowns</th>
                    <th>Interceptions</th>
                </tr>
            </thead>
            <tbody>
                {/* If we keep this as is, we'll receive a warning in the console asking us to use a KEY
                A Key is an identifier used in looping creation of components, it just help react identify components
                easier and be more efficient
                */}
                {allPlayers.map((player) => {
                    return (
                        <tr key={player.playerId}>
                            <td>{player.name}</td>
                            <td>{player.passYards}</td>
                            <td>{player.attempts}</td>
                            <td>{player.completions}</td>
                            <td>{player.touchdowns}</td>
                            <td>{player.interceptions}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
      
    </div>
  )
}

export default Players
