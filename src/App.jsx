import './App.css'
import { React, useState }  from 'react'
import Footer from './src_footer_organic/Footer.jsx'
import Home from './src_body_organic/Home.jsx'  
import Header from './src_header_organic/Header.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Signup from './src_header_organic/SignUp.jsx';
import ForgotPassword from './src_header_organic/ForgetPassword.jsx';

function App() {
  
  return (
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} /> 
        </Routes>
        <Home/>
        <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App