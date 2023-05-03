import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Fyre</a>
      </div>
      <ul className="nav-links">
        <li><a href="/" className="nav-link">Home</a></li>
        <li><a href="/shoes" className="nav-link">shoes</a></li>
      </ul>
      <div className="auth-buttons">
      <a href="/login">  <button className="register-button">Login</button></a>
      <a href="/register">  <button className="register-button">Register</button></a>
      </div>
    </nav>
  )
}

export default Navbar;
