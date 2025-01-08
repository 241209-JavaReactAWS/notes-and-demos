import { useEffect, useState } from "react"
import { Player } from "../../interfaces/Player"
import axios from "axios"
import { User } from "../../interfaces/User"
import FavoriteMUI from "./FavoriteMUI"
import { Button, Fab, IconButton, Snackbar } from "@mui/material"
import NewPlayerFormMUI from "../all-players-page/NewPlayerFormMUI"
import { BASE_API_URL } from "../../App"
import { useNavigate } from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';


function FavoriteContainerMUI() {
    
    const [favorites, setFavorites] = useState<Player[]>([])
    const [shouldUpdate, setShouldUpdate] = useState<boolean>(false)
    const [openSnackBar, setOpenSnackbar] = useState(false)
    const navigate = useNavigate();

   
    useEffect(() => {

        if (localStorage.getItem("token")){
            axios.get<User>(`${BASE_API_URL}/users`, 
                {headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }}
            )
            .then((res) => {
                let favorites = res.data.favorites

                favorites.sort((a, b) => {
                    if (a.name< b.name){
                        return -1
                    } else if (b.name > a.name){
                        return 1
                    } else{
                        return 0
                    }
                })

                setFavorites(favorites)
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

    let handleOpenSnackbar = () => {
        setOpenSnackbar(true)
    }

    let handleCloseSnackbar = () => {
        setOpenSnackbar(false)
    }

    let action = (
        <>
         
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseSnackbar}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      );

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
                toggleUpdate: toggleUpdate,
                handleOpenSnackbar: handleOpenSnackbar
            }
            return (
                
                
                <FavoriteMUI {...propObject} key={"player-" + player.playerId}/>
            )
        })}
        </div>

        <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Player Removed From Favorites"
        action={action}
        anchorOrigin={{vertical: "bottom",  horizontal: "right"}}
        />
      
    </div>
  )
}

export default FavoriteContainerMUI
