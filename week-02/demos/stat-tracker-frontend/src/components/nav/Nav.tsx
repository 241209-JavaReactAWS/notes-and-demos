import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { authContext } from "../../App"
import axios from "axios"


function Nav() {
    // GOAL is a bit of polish
    // Users that are LOGGED OUT should see the option to log in
    // Users that are LOGGED IN should see the option to log out
    // First this I need is information about the current user
    // We can retrieve it from the authContext
    const auth = useContext(authContext)
    //useNavigate hook is a simple way to change the view rendered on the screen
    const navigate = useNavigate();


    let logOut = () => {
        axios.post('http://localhost:8080/users/logout', {}, {withCredentials: true})
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
    <div>
        <ul>
            <li><Link to={"/"}>All Players</Link></li>
            <li><Link to={"/favorites"}>Favorites</Link></li>

            {
                auth?.role == "unauthenticated" ?
                <li><Link to={"/login"}>Login</Link></li>
                :
                <li><button onClick={logOut}>Log out!</button></li>
            }

            
        </ul>
      
    </div>
  )
}

export default Nav
