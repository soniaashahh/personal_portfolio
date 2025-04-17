import React from 'react';
import NavBar from '../components/NavBar';
import './About.css';

function About() {
  return (
    <div className="page about-page">
      <NavBar />
      <div className="about-section">
        <div className="about-content">
          {/* Left side: image and name */}
          <div className="image-container">
            <h3 className="small-title">WHO AM I?</h3>
            <h1 className="about-title">ABOUT</h1>
            <img src="/images/profile.jpg" alt="Sonia Shah" className="profile-img" />
            <h2 className="bio-name">Sonia Shah</h2>
            <p className="bio-subtitle">
              A CS student at UCLA,<br />
              interested in leading <br />
              technology innovation
            </p>
          </div>

          {/* Right side: paragraph */}
          <div className="bio">
            <p className="bio-description">
              I am a Computer Science and Linguistics student at UCLA, with a passion for using technology to solve complex problems. Through my experiences, including working on a CAD project with Engineers Without Borders and an internship at Cisco where I applied AI for sustainability, I have developed a positive outlook on how technology can drive innovation and progress in various fields. Additionally, I utilized AI algorithms to detect pneumonia in X-rays, further fueling my interest in AI/ML. These experiences continue to shape my vision of using technology to create meaningful impact, and I am eager to build my passion not only for software but more specifically for AI/ML, while seeking out opportunities that expand my technical skills.
            </p>
          </div>
        </div>
      </div>
      <div className="about-planet about-planet-top-right">
        <img src="/images/planet3.png" alt="Planet" />
      </div>
      <div className="about-planet about-planet-bottom-right">
        <img src="/images/planet4.png" alt="Planet" />
      </div>
    </div>
  );
}

export default About;
