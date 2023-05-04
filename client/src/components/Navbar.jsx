import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import newRequest from '../utils/newRequest.js';
import './Navbar.css';

const Navbar = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post('/auth/logout');
      localStorage.setItem('currentUser', null);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">Fyre</span>
          </Link>
          <Link className="link" to="/shoes">
            <span className="text">Shoes</span>
          </Link>
        </div>
        <div className="links">
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                className="profile-picture"
                src={
                  currentUser.img ||
                  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                }
                alt="Profile"
              />
              <span className="username">{currentUser?.username}</span>
              {open && (
                <div className="options">
                  <Link className="link" to="/mygigs">
                    My Shoes
                  </Link>
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link to={'/'} className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">
                Sign In
              </Link>
              <Link className="link" to="/register">
                <button className="join-button">Join</button>
              </Link>
            </>
          )}
          {currentUser && (
            <Link className="link" to="/add">
              <button className="upload-button">Upload</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
