import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';  // Make sure you're using Link from react-router-dom
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <div className="nav-bar">
        <Link to="/" className="nav-link left">Home</Link> {/* Home Link */}
        <div className="nav-links-right">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/work" className="nav-link">Work</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
