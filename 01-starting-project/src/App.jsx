import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Netflix from './pages/Netflix'
import SignUp from './pages/SignUp'
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<SignUp/>}/>
      <Route exact path="/" element={<Netflix/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App