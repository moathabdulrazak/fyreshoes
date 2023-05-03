import React from 'react';
import './LoginPage.css';

export const LoginPage = () => {
  return (
    <div className="login-page-container">
      <div className="login-form-container">
        <h1 className="login-heading">Welcome Back!</h1>
        <form className="login-form">
          <label htmlFor="email" className="login-label">Email:</label>
          <input type="email" id="email" className="login-input" required />

          <label htmlFor="password" className="login-label">Password:</label>
          <input type="password" id="password" className="login-input" required />

          <button type="submit" className="login-button">Log In</button>
        </form>
        <p className="signup-link">Don't have an account? <a href="/signup">Sign up here</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
