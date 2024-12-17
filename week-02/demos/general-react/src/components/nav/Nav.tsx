import { Link } from "react-router-dom"
import "./Nav.css"

function Nav() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Counter Component</Link></li>
            <li><Link to="/counter-container">Counter Container</ Link></li>
            <li><Link to="/props">Prop Drilling</ Link></li>
            <li><Link to="/context">useContext Hook</ Link></li>
            <li><Link to="/events">Events</ Link></li>
            <li><Link to="/axios-fetch">Axios and Fetch Request</ Link></li>
            <li><a href="https://google.com">Questions?</a></li>
        </ul>
    </nav>
  )
}

export default Nav
