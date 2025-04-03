
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import '../App.css'; 

function NavBar() {
  return (
    <nav className="NavBar">
      <div className="NavBar-container">
        <div className="NavBar-logo">
          <Link to="/">YourName</Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/work" className="nav-links">Work</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;