/*
This component should encapsulate our login form and allos us to send a request from the frontend to the backend
and receive information about the person who is logged in
*/

import axios from "axios"
import { SyntheticEvent, useContext, useState } from "react"
import { authContext } from "../../App"

function Login() {
    // This line below gives this component the ability to access who is logged in
    const auth = useContext(authContext)

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    let login = () => {
        // Here is where the logic for our login method will live
        // The main thing will be sending an axios request and interpreting the results
        console.log("Login clicked!")

        // So we can do some validation to make sure the username and password fields are actually filled out
        if (!username){
            alert("Please enter a username")
            return;
        }

        if(!password){
            alert("Please enter a password")
            return;
        }

        // Next thing is sending the actual request
        axios.post("http://localhost:8080/users/login", 
            {username, password},
            {withCredentials: true}
            // WithCredentials allows the JSESSION cookie to be set and sent with requests so we need to include
            // this on any methods that require the session
        ).then((res) => {
            console.log(res.data)
            // We'll add onto this in a few minutes
            auth?.setUsername(res.data.username)
            auth?.setRole(res.data.role)
        }).catch((err) => {
            console.log(err)
            // Inside of this we could make certain error message appear on the screen 
        })
    }

  return (
    <div>
      <label>
        Username: 
        <input 
        id="username-input" 
        type="text"
        value={username}
        onChange={(e:SyntheticEvent) => { setUsername((e.target as HTMLInputElement).value)}}
        />
      </label>

      <label>
        Password: 
        <input 
        id="password-input" 
        type="password"
        value={password}
        onChange={(e:SyntheticEvent) => { setPassword((e.target as HTMLInputElement).value)}}
        />
      </label>

      <button onClick={login}>Login!</button>
    </div>
  )
}

export default Login
