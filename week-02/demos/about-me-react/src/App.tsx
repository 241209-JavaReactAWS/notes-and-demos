import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
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
      <Home></Home>
      <TTAAL></TTAAL>

      <Footer></Footer>
    </>
  )
}

export default App
