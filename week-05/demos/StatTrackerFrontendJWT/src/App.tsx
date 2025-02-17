import { createContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/login-page/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMUI from './components/nav/NavMUI';
import PlayersMUI from './components/all-players-page/PlayersMUI';
import FavoriteContainerMUI from './components/favorites-page/FavoriteContainerMUI';
import axios from 'axios';
import { User } from './interfaces/User';


export interface AuthContextType{
  role: "unauthenticated" | "USER" | "ADMIN",
  setRole: (role: "unauthenticated" | "USER" | "ADMIN") => void
}

export const authContext = createContext<AuthContextType | null>(null);

// export const BASE_API_URL="http://localhost:8080"
export const BASE_API_URL="http://ec2-3-91-57-118.compute-1.amazonaws.com"

function App() {
  const [role, setRole] = useState<"unauthenticated" | "USER" | "ADMIN">('unauthenticated')

  useEffect(()=>{
    if (localStorage.getItem("token")){
      axios.get<User>(`${BASE_API_URL}/users`, 
        {headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
      }}
      )
      .then((res) => {
        setRole(res.data.role)
      })
      .catch((err) => {
        console.log(err)
        setRole('unauthenticated')
      })
    } else{
      setRole('unauthenticated')
    }
    
  }, [])

  return (
    <authContext.Provider value={
      {
        role,
        setRole
      }
    }>
      <BrowserRouter>
      <NavMUI />
      <Routes>
        <Route path='/' element={<PlayersMUI />}/>
        <Route path='/favorites' element={<FavoriteContainerMUI />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      
      </BrowserRouter>
      
    </ authContext.Provider>
  )
}

export default App
