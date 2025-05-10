import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <h1>Blogverse</h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/design" className="nav-link">Design</Link>
          <Link to="/technology" className="nav-link">Technology</Link>
          <Link to="/travel" className="nav-link">Travel</Link>
        </div>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
