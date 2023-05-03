import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Fyre</a>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <button className="login-button">Log In</button>
      <button className="login-button">register </button>
    </nav>
  )
}

export default Navbar;
