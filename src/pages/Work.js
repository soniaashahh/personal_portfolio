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
            <h3>✦ {exp}</h3>
            <div className="project-box">
              <p><strong>Project Name:</strong></p>
              <p><strong>Description:</strong></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;