/*
Getting started with MUI is as simple as finding a component that you like and pulling the example code into
your project
*/

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
        axios.post(`${BASE_API_URL}/users/logout`, {}, {withCredentials: true})
        .then((res) => {
            // If we successfully log out we should let all the components know that the username is now null
            // and the role is unauthenticated
            auth?.setUsername('')
            auth?.setRole('unauthenticated')

            // After logging out it might make sense to have the user navigated to the login view 
            navigate('/login')
        })
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
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}
            <Button color="inherit" onClick={() => navToPage('/')}>All Players</Button>
            <Button color="inherit" onClick={() => navToPage('/favorites')}>Favorites</Button>
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
