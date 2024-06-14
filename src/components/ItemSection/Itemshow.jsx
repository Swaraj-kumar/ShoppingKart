import React from 'react';
import { Link } from 'react-router-dom';
import './Itemshow.css'; // Import CSS file for styling (you can create this file if it doesn't exist)

const HeroSection = () => {
    return (
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Shop</h1>
          <p>Discover amazing products for your needs</p>
          <Link to="/shopNow" className="btn shop-now-btn">Shop Now</Link>
        </div>
      </div>
    );
  }
  
  export default HeroSection;
