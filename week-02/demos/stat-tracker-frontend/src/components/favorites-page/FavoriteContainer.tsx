import { useEffect, useState } from "react"
import { Player } from "../../interfaces/Player"
import Favorite from "./Favorite"
import axios from "axios"
import { User } from "../../interfaces/User"

/*
This component controls the view for the favorites page. So we should be able to call the API to get all of a 
person's favorites and list them here. I plan to turn the favorites into Cards later so I have a separate 
component called 'Favorite' that will store their info
*/
function FavoriteContainer() {
    // As a reminder state is data controlled by the component and we can leverage it to rerender components
    // and values on the screen by changing the state variable (via the setter)
    const [favorites, setFavorites] = useState<Player[]>([])

    //Whenever the page loads up I want to make a call to the backend and get the information for the user
    useEffect(() => {
        // I will make an axios call to the backend to receive the info for the user
        axios.get<User>('http://localhost:8080/users', {withCredentials:true})
        .then((res) => {
            setFavorites(res.data.favorites)
        })
        .catch((err) => {
            // In just a minute, I'll send the user to the login page
            
        })
    }, [])

  return (
    <div>

        <h1>Favorite Players</h1>

        {/* We need to iterate over the list of favorites and create a component for each of them */}

        {favorites.map((player) => {
            return (
                // In here we'll call our favorite component
                <Favorite {...player} key={"player-" + player.playerId}/>
            )
        })}
      
    </div>
  )
}

export default FavoriteContainer
