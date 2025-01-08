import { useEffect, useState } from "react"
import { Player } from "../../interfaces/Player"
import axios from "axios"
import { User } from "../../interfaces/User"
import FavoriteMUI from "./FavoriteMUI"
import { Button, Fab } from "@mui/material"
import NewPlayerFormMUI from "../all-players-page/NewPlayerFormMUI"
import { BASE_API_URL } from "../../App"
import { useNavigate } from "react-router-dom"


function FavoriteContainerMUI() {
    
    const [favorites, setFavorites] = useState<Player[]>([])
    const [shouldUpdate, setShouldUpdate] = useState<boolean>(false)
    const navigate = useNavigate();

   
    useEffect(() => {

        if (localStorage.getItem("token")){
            axios.get<User>(`${BASE_API_URL}/users`, 
                {headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }}
            )
            .then((res) => {
                setFavorites(res.data.favorites)
            })
            .catch((err) => {    
                navigate("/")
            })
        } else{
            navigate("/players")
        }
        
        
    }, [shouldUpdate])

    let toggleUpdate = () => {
        setShouldUpdate(!shouldUpdate)
    }

  return (
    <div>
        <h1>Favorite Players</h1>

        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly"
        }}>
        {favorites.map((player) => {
            let propObject = {
                player: player,
                toggleUpdate: toggleUpdate
            }
            return (
                
                
                <FavoriteMUI {...propObject} key={"player-" + player.playerId}/>
            )
        })}
        </div>

        
      
    </div>
  )
}

export default FavoriteContainerMUI
