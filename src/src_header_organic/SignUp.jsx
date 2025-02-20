import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import '../../css_organic/css_header_organic/Login.css';

const Signup = () => {
    return (
        <div className="modal-overlay">
      <div className="auth-container">
      <button className="close-button" >&times;</button>
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <Link to="/login">Back to Login</Link>
      </div>
      </div>
    );
  };

  export default Signup;