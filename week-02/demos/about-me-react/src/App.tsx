import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import TTAAL from './components/ttaal/TTAAL'

/*
This is our very first React Component. Mainly known as the App component, this page directly controls what we
see rendered on the final screen.

What on earth is this file extension? 
Last week we saw JS and TS, with extensions .js and .ts respectively but now we have .tsx

What is TSX?
TSX and JSX stand for TypeScript XML and JavaScript SML, what they do is allow you to combine your HTML and 
JS/TS into one single page and inject directly onto the screen.

What is React?
React is a component-based UI LIBRARY used to create SPAs that are production quality and have a variety of
features. Why is React called a library and not a framework? Libraries are generally lighter weight and have 
limited functionality from the start, you add on extra pieces as you need them. Frameworks offer a large variety
of features, which can sometimes make them bloated but they'll contain everything you need from the jump.

Libraries are used *at will* so you can use it as much or as little as you want throughout your project
Frameworks REQUIRE that you adhere to their standards to give you the functionality
*/

function App() {

  return (
    /*
    React requires that for these JSX/TSX render methods, we return ONE parent element and then have everything
    else be a child element of that. So you could wrap everything in a DIV if you wanted but this can
    create a lot of extra elements so we'll use a React Fragment, which is like a blank HTML element
    */
    // React Components BEGIN WITH A CAPITAL LETTER
    // HTML Elements are all lowercase
    <>
      <Header></Header>

      <BrowserRouter>
        <Nav></Nav>
        {/* Before, we'd be rending one thing at a time, now we want to render both and show/hide them
      based off the path of the page we're on */}
        {/* <Home></Home>
        <TTAAL></TTAAL> */}

          <Routes>
            {/* The Routes tag will be used to define ALL of the routes/views we can see */}
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/ttaal' element={<TTAAL></TTAAL>}></Route>
          </Routes>

      </BrowserRouter>

      {/* 
      
      When React recognizes that the path has changed, what is the process to rerender the screen?
      React holds a Virtual DOM which is a lighter weight version of the actual DOM.
      Any operations to change the page will first happen to the virtual DOM, then React will reconcile the 
      virtual dom and the regular dom is the most efficient way possible. So unchanged components DO NOT rerender

      */}

      <Footer></Footer>
    </>
  )
}

export default App
