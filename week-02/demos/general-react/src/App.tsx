import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/Nav'
import Counter from './components/state-intro/counter/Counter'
import CounterContainer from './components/state-intro/counter-container/CounterContainer'
import Parent from './components/props/parent/Parent'

function App() {
  

  return (
    <>
      {/* Recall, to use the nav bar we need to place it inside of the browser router and add in specific 
      routes */}

      <BrowserRouter>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Counter />}/>
        <Route path='/counter-container' element={<CounterContainer />} />
        <Route path="/props" element={<Parent />}/>
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
