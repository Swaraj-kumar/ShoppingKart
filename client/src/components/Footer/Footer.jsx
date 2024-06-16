import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="/" className="footer-link">
              Home
            </Link>
            <Link to="/cart" className="footer-link">
              Cart
            </Link>
            <Link to="/signin" className="footer-link">
              Sign In
            </Link>
            <Link to="/signup" className="footer-link">
              Sign Up
            </Link>
          </div>
          <div className="footer-text">
            <p>&copy; 2024 Your Shopping Site. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
