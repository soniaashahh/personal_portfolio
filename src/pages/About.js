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
              Hi! I am a Computer Science and Linguistics student at UCLA, with a passion for using technology to solve complex problems. Through my technical experiences, including numerous clubs and a technology internship, I have developed a positive outlook on how technology can drive innovation and progress in various fields. My projects/background further fueled my interest in CS, specifically AI/ML. These experiences continue to shape my vision of using technology to create meaningful impact, and I am eager to build my passion not only for software but more specifically utilizing AI/ML tools to apply to fields ranging from healthcare to criminal justice.
            </p>
          </div>
        </div>
      </div>

      {/* Planet Orbit Centers */}
      <div className="orbit-center top-right">
        <div className="orbiting-planet">
          <img src="/images/planet3.png" alt="Orbiting Planet 1" />
        </div>
      </div>
      <div className="orbit-center bottom-right">
        <div className="orbiting-planet reverse">
          <img src="/images/planet4.png" alt="Orbiting Planet 2" />
        </div>
      </div>
    </div>
  );
}

export default About;
