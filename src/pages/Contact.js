import React from 'react';
import NavBar from '../components/NavBar';
import './Contact.css';

function Contact() {
  return (
    <div className="page contact-page">
      <NavBar />
      
      <div className="contact-content">
        <h2 className="contact-heading">HOW TO CONTACT?</h2>
        <h1 className="contact-title">REACH OUT!</h1>
        
        <div className="social-links">
          <div className="social-star">
            {/* Diagonal lines for the star */}
            <div className="diagonal-1"></div>
            <div className="diagonal-2"></div>
            
            {/* Social media icons */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <img src="/images/instagram.png" alt="Instagram" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link github">
              <img src="/images/github.png" alt="GitHub" />
            </a>
            <a href="https://gmail.com" target="_blank" rel="noopener noreferrer" className="social-link gmail">
              <img src="/images/gmail.png" alt="Gmail" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="phone-icon">
        <img src="/images/phone.png" alt="Phone" />
      </div>
      <div className="planet planet-top-right">
        <img src="/images/planet3.png" alt="Planet" />
      </div>
      <div className="planet planet-bottom-left">
        <img src="/images/planet4.png" alt="Planet" />
      </div>
    </div>
  );
}

export default Contact;