import { Link } from "react-router-dom"
import "./Nav.css"

function Nav() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Counter Component</Link></li>
            <li><Link to="/counter-container">Counter Container</ Link></li>
            <li><Link to="/props">Prop Drilling</ Link></li>
            <li><a href="https://google.com">Questions?</a></li>
        </ul>
    </nav>
  )
}

export default Nav
