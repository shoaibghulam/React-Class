import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/layout/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/auth/Login'

function App() {
 

  return (
<>
<Router>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/login' element={<Login />}/>
  </Routes>
</Router>
</>

  )
}

export default App
