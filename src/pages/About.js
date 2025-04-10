import React from 'react';
import NavBar from '../components/NavBar';
import './About.css';

function About() {
  return (
    <div className="page about-page">
      <NavBar />
      <div className="about-section">
        <h3 className="small-title">WHO AM I?</h3>
        <h1 className="about-title">ABOUT</h1>
        <div className="about-content">
          <img src="/images/profile.jpg" alt="Sonia Shah" className="profile-img" />
          <div className="bio">
            <h4>Sonia Shah</h4>
            <p className="subtitle">A CS student at UCLA,<br />interested in leading technology innovation</p>
            <p className="description">
              The sun dipped below the horizon, painting the sky in hues of orange and pink as a gentle breeze rustled through the trees. 
              A faint hum of cicadas filled the air, blending with the distant laughter of children playing in the park. The scent of fresh rain 
              lingered from the afternoon storm, mixing with the earthy aroma of damp soil...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;