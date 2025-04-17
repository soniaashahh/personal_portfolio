import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-links-left">
        <Link to="/">HOME</Link>
      </div>
      <div className="nav-links-right">
        <Link to="/about">ABOUT</Link>
        <Link to="/work">WORK</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </nav>
  );
}

export default NavBar;