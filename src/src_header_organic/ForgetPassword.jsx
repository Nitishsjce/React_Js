import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import '../../css_organic/css_header_organic/Login.css'

const ForgetPassword = () => {
  return (
    <div className="modal-overlay">
      <div className="auth-container">
      <button className="close-button" >&times;</button>
      <h2>Forgot Password</h2>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Reset Password</button>
      </form>
      <Link to="/login">Back to Login</Link>
      </div>
    </div>
  )
}

export default ForgetPassword