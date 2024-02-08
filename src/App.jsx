import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import MessageView from './pages/MessageView'
import Login from './pages/Login'
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/MessageView' element={<MessageView/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  )
}

export default App