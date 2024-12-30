import { useEffect, useState } from "react"
import { Player } from "../../interfaces/Player"
import axios from "axios"
import { User } from "../../interfaces/User"
import FavoriteMUI from "./FavoriteMUI"
import { Button, Fab } from "@mui/material"
import NewPlayerFormMUI from "../all-players-page/NewPlayerFormMUI"
import { BASE_API_URL } from "../../App"


function FavoriteContainerMUI() {
    
    const [favorites, setFavorites] = useState<Player[]>([])

   
    useEffect(() => {
        
        axios.get<User>(`${BASE_API_URL}/users`, {withCredentials:true})
        .then((res) => {
            setFavorites(res.data.favorites)
        })
        .catch((err) => {
            
            
        })
    }, [])

  return (
    <div>
        <h1>Favorite Players</h1>

        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly"
        }}>
        {favorites.map((player) => {
            return (
                
                <FavoriteMUI {...player} key={"player-" + player.playerId}/>
            )
        })}
        </div>

        
      
    </div>
  )
}

export default FavoriteContainerMUI
