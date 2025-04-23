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

        <div className="social-star">
          <svg className="star-svg" viewBox="0 0 120 120">
            <polygon
              points="60,10 73,45 113,45 80,70 93,110 60,85 27,110 40,70 7,45 47,45"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
            />
          </svg>

          {/* Icons positioned on star points */}
          <a href="https://www.instagram.com/soniaa.shahh/" target="_blank" rel="noopener noreferrer" className="social-link icon1">
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
          <a href="https://github.com/soniaashahh" target="_blank" rel="noopener noreferrer" className="social-link icon2">
            <img src="/images/github.png" alt="GitHub" />
          </a>
          <a href="mailto:soniashah004@gmail.com" className="social-link icon3">
            <img src="/images/gmail.png" alt="Gmail" />
          </a>
          <a href="https://www.linkedin.com/in/sonia-shahh/" target="_blank" rel="noopener noreferrer" className="social-link icon4">
            <img src="/images/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100054696834944" target="_blank" rel="noopener noreferrer" className="social-link icon5">
            <img src="/images/facebook.png" alt="Facebook" />
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      {/*
      <div className="phone-icon">
        <img src="/images/phone.png" alt="Phone" />
      </div>
      */}
      <div className="planet planet-top-right-contact">
        <img src="/images/planet6.png" alt="Planet" />
      </div>
      <div className="planet planet-bottom-left-contact">
        <img src="/images/planet4.png" alt="Planet" />
      </div>
      <div className="rocket rocket2">
        <img src="/images/rocket2.png" alt="Rocket" />
      </div>
    </div>
  );
}

export default Contact;
