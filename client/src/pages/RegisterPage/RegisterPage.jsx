import React from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
  return (
    <div className="register-page-container">
      <h1 className="register-page-heading">Join the Hype!</h1>
      <form className="register-page-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="register-page-button">Register Now</button>
      </form>
      <p className="register-page-cta">Already have an account? <a href="/login">Log In</a></p>
    </div>
  )
}

export default RegisterPage;
