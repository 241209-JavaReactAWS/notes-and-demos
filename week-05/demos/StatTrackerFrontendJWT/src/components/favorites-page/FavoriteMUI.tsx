import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material"
import { Player } from "../../interfaces/Player"
import axios from "axios"
import { BASE_API_URL } from "../../App"
import { User } from "../../interfaces/User"
import { useNavigate } from "react-router-dom"

interface FavoritesProps{
  player: Player;
  toggleUpdate: () => void;
  handleOpenSnackbar: () => void;
}

function FavoriteMUI(props: FavoritesProps) {
  const navigate = useNavigate()

  let removeFromFavorites = (playerId : number) => {
    axios.delete<User>(`${BASE_API_URL}/users/favorites/${playerId}`, 
      {headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
      }}
  ).then((res) => {
      console.log(res.data)
      // alert("Player removed!")
      props.handleOpenSnackbar()
      props.toggleUpdate()
  }).catch((err) => {
      console.log(err)
      alert("Something went wrong!")
  })
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.player.picUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.player.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Passing Yards: {props.player.passYards}
          <br />
          Touchdowns: {props.player.touchdowns}
          <br />
          Interceptions: {props.player.interceptions}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="error" onClick={()=> removeFromFavorites(props.player.playerId)}>Remove From Favorites</Button>
      </CardActions>
    </Card>
  )
}

export default FavoriteMUI
