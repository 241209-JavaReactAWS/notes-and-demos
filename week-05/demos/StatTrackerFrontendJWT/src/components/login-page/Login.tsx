import axios from "axios"
import { SyntheticEvent, useContext, useState } from "react"
import { authContext, BASE_API_URL } from "../../App"
import { UserDTO } from "../../interfaces/UserDTO"
import { useNavigate } from "react-router-dom"

function Login() {
    
    const auth = useContext(authContext)
    const navigate = useNavigate()
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
            auth?.setRole(res.data.role)
            if (!res.data.token){
              alert("Unable to log in")
            } else{
              localStorage.setItem("token", res.data.token)
              navigate("/")
            }
        }).catch((err) => {
            console.log(err) 
        })
    }

    let register = () => {
      if (!username){
          alert("Please enter a username")
          return;
      }
      if(!password){
          alert("Please enter a password")
          return;
      }
      axios.post<UserDTO>(`${BASE_API_URL}/auth/register`, 
          {username, password}
      ).then((res) => {
          console.log(res.data)
          auth?.setRole(res.data.role)
          localStorage.setItem("token", res.data.token)
          alert("Successfully Registered")
          navigate("/")
      }).catch((err) => {
          console.log(err)
          alert("Something went wrong!")
      })
  }

  let registerAdmin = () => {
    if (!username){
        alert("Please enter a username")
        return;
    }
    if(!password){
        alert("Please enter a password")
        return;
    }
    axios.post<UserDTO>(`${BASE_API_URL}/auth/register-admin`, 
        {username, password}
    ).then((res) => {
        console.log(res.data)
        auth?.setRole(res.data.role)
        localStorage.setItem("token", res.data.token)
        alert("Successfully Registered")
        navigate("/")
    }).catch((err) => {
        console.log(err)
        alert("Something went wrong!")
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
      <button onClick={register}>Register!</button>
      <button onClick={registerAdmin}>Register as Admin!</button>
    </div>
  )
}

export default Login
