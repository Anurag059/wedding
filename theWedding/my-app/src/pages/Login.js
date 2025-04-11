// src/pages/Login.js
import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Welcome Back</h2>
      <form className="login-form">
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signin">Sign Up</a></p>
    </div>
  );
}

export default Login;
