import { useState } from 'react'
import './App.css'
import Signup from './Components/Signup'
import Signin from './Components/Signin/Signin'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Signup />}/>
      <Route path='login' element={<Signin  />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
