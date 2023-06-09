import React from 'react';
import './HomePage.css';


const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Fyre</h1>
        <p className="hero-text">Find the perfect pair of shoes for every occasion.</p>
      <a href="/shoes">  <button className="shop-now-button">Shop Now</button></a>
      </div>
    </div>
  );
}

export default HomePage;
