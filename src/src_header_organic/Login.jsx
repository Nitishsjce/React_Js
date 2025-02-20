import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import '../../css_organic/css_header_organic/Login.css';


const Login = ({ onClose }) => {
   
  return (
    <div className="modal-overlay">
      <div className="auth-container">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2 style={{color:'black'}}>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <Link to="/forgot-password">Forgot Password?</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;