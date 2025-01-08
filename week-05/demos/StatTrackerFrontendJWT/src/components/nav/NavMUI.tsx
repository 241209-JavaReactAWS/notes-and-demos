import { AppBar, Toolbar, IconButton, Typography, Box, Button } from "@mui/material"
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { authContext, BASE_API_URL } from "../../App";

function NavMUI() {
    const navigate = useNavigate();
    const auth = useContext(authContext);

    let navToPage = (location:string) => {
        navigate(location)
    }

    let logOut = () => {
      localStorage.removeItem("token")
      auth?.setUsername('')
      auth?.setRole('unauthenticated')
      navigate('/login')
    }
    


  return (
    <>
    <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            NFL Stat Tracker
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button color="inherit" onClick={() => navToPage('/')}>All Players</Button>
          
            {
                auth?.role == "USER" ?
                <Button color="inherit" onClick={() => navToPage('/favorites')}>Favorites</Button>
                :
                <></>
            }
            {
                auth?.role == "unauthenticated" ?
                <Button color="secondary" variant="contained"  onClick={() => navToPage('/login')}>Login</Button>
                :
                <Button  color="secondary" variant="contained"  onClick={logOut}>Logout</Button>
            }
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      </>
  )
}

export default NavMUI
