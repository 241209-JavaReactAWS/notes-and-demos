import { createContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/login-page/Login'
import Players from './components/all-players-page/Players';
import FavoriteContainer from './components/favorites-page/FavoriteContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import NavMUI from './components/nav/NavMUI';
import PlayersMUI from './components/all-players-page/PlayersMUI';
import FavoriteContainerMUI from './components/favorites-page/FavoriteContainerMUI';
import axios from 'axios';
import { User } from './interfaces/User';
import LoginMUI from './components/login-page/LoginMUI';

/*
Inside of the App.tsx I'm going to create a context to hold information about WHO is logged in and I'm going to 
store their ROLE
*/
export interface AuthContextType{
  username: string,
  setUsername: (username: string) => void,
  role: "unauthenticated" | "USER" | "ADMIN",
  setRole: (role: "unauthenticated" | "USER" | "ADMIN") => void
}

export const authContext = createContext<AuthContextType | null>(null);

function App() {
  const [username, setUsername] = useState<string>('')
  // Using as const in Typescript gives us direct options for what we want the values to be
  const [role, setRole] = useState<"unauthenticated" | "USER" | "ADMIN">('unauthenticated')

  /*
  Information below was added during optional lecture to polish our navbar and make sure the state stays 
  consistent throughout refreshes
  */

  useEffect(()=>{
    // So whenever the page loads I want to send an axios request to make sure we're still logged in, if we are
    // we should have the proper nav bar and if we are we should also see "log out" as an option
    axios.get<User>('http://localhost:8080/users', {withCredentials: true})
    .then((res) => {
      setUsername(res.data.username)
      setRole(res.data.role)
    })
    .catch((err) => {
      console.log(err)
      // If we are NOT logged in, make sure it's set appropriately
      setUsername('')
      setRole('unauthenticated')
    })
  }, [])

  return (
    <authContext.Provider value={
      {
        username,
        setUsername,
        role,
        setRole
      }
    }>
      <BrowserRouter>
      {/* <Nav /> */}
      <NavMUI />
      <Routes>
        {/* <Route path='/' element={<Players />}/> */}
        <Route path='/' element={<PlayersMUI />}/>
        {/* <Route path='/favorites' element={<FavoriteContainer />}/> */}
        <Route path='/favorites' element={<FavoriteContainerMUI />}/>
        <Route path='/login' element={<Login />}/>
        {/* <Route path='/login' element={<LoginMUI />}/> */}
      </Routes>
      
      </BrowserRouter>
      
    </ authContext.Provider>
  )
}

export default App
