import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/work">WORK</Link>
      <Link to="/contact">CONTACT</Link>
    </nav>
  );
}

export default NavBar;
