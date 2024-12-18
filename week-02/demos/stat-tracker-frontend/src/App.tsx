import { createContext, useState } from 'react'
import './App.css'
import Login from './components/login-page/Login'
import Players from './components/all-players-page/Players';

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

  return (
    <authContext.Provider value={
      {
        username,
        setUsername,
        role,
        setRole
      }
    }>
      {/* <Login /> */}
      <Players />
    </ authContext.Provider>
  )
}

export default App
