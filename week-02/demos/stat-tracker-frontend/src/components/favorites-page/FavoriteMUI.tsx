import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material"
import { Player } from "../../interfaces/Player"

// I already know this page is going to need at least player info so let's add that in
function FavoriteMUI(props: Player) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.picUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Passing Yards: {props.passYards}
          <br />
          Touchdowns: {props.touchdowns}
          <br />
          Interceptions: {props.interceptions}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="error">Remove From Favorites</Button>
      </CardActions>
    </Card>
  )
}

export default FavoriteMUI
