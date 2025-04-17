// Work.js
import React from 'react';
import NavBar from '../components/NavBar';
import './Work.css';

function Work() {
  return (
    <div className="page work-page">
      <NavBar />
      <h1 className="work-title">WORK</h1>
      <div className="experiences">
        {['Experience 1', 'Experience 2', 'Experience 3'].map((exp, index) => (
          <div key={index} className="experience">
            <span className="experience-title">✦ {exp}</span>
            <div className="project-box">
              <p><strong>Project Name:</strong></p>
              <p><strong>Description:</strong></p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Decorative planets */}
      <div className="work-planet work-planet-top-left">
        <img src="/images/planet-icon.png" alt="Planet Sonia" />
      </div>
      <div className="work-planet work-planet-bottom-right">
        <img src="/images/planet7.png" alt="Planet 7" />
      </div>
    </div>
  );
}

export default Work;