import { Link } from 'react-router-dom'
import './Nav.css'

/*
This component is going to be in charge of determining what the path of the web page is
This will be leveraged to dynamically render what content appears on the screen

We need the react router dom to control the DOM based off the router. React is a lightweight library so
you need to pull in different solutions to problems if you want them

HREF through an a tag will reload the entire page, this is a problem because we lose all the benefits of having
a single page application
*/

function Nav() {
  return (
    <nav>
        <ul>
            <li><Link to="/">About Me</Link></li>
            <li><Link to="/ttaal">TTAAL</ Link></li>
            <li><a href="https://google.com">Questions?</a></li>
        </ul>
    </nav>
  )
}

export default Nav
