// This is our very first React component

import React from "react";
import "./Header.css"

// We're going to start by making a class component

// Class components are regular TS class, but they contain a render method that returns TSX to be shown on the 
// screen. NOTE: Components always begin with a capital letter, PascalCase

class Header extends React.Component{
    
    // This is a normal TS class
    // The most important thing in this class is going to be the render method
    

    render(){
        return (
            <header>
                <h1>Bryan Serfozo</h1>
            </header>
        )
    }
}

export default Header;
// This allows this class to be a usable Component in other places so we can leverage the header