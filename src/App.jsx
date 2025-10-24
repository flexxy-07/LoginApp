import React from 'react'
import Signup from './Components/Signup'
import './index.css'  
import LogIn from './Components/LogIn'
import Dashboard from './Components/dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute'

const App = () => {
  return (
    
      <Routes>
        <Route path='/' element = {<Signup/>} />
        <Route path='/login' element={<LogIn />} />
        <Route
          path='/dashboard'
          element = {
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
          />
      </Routes>
    
  )
}

export default App