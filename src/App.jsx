import React from 'react'
import './App.css'
import {BrowserRouter as  Router, Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/SignUp'
import LoginForm from './components/SignupAndSignInComponent/LoginForm'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/Profile'

function App() {
 
  return (
    <div className='App'>
      <ToastContainer/>
      <Router>
            <Routes>
              <Route path="/" element={<SignUpPage/>}/>
              <Route path="/profile" element={<Profile/>}/> 
            </Routes>
      </Router>
    </div>
  
  )
}

export default App
