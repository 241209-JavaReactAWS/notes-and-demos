import axios from "axios"
import { SyntheticEvent, useContext, useState } from "react"
import { authContext, BASE_API_URL } from "../../App"
import { UserDTO } from "../../interfaces/UserDTO"

function Login() {
    
    const auth = useContext(authContext)

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    let login = () => {
        if (!username){
            alert("Please enter a username")
            return;
        }
        if(!password){
            alert("Please enter a password")
            return;
        }
        axios.post<UserDTO>(`${BASE_API_URL}/auth/login`, 
            {username, password}
        ).then((res) => {
            console.log(res.data)
            auth?.setUsername(res.data.username)
            auth?.setRole(res.data.role)
            localStorage.setItem("token", res.data.token)
        }).catch((err) => {
            console.log(err) 
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
