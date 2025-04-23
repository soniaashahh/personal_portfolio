import React from 'react';
import NavBar from '../components/NavBar';
import './Work.css';

function Work() {
  return (
    <div className="page work-page">
      <NavBar />
      <h1 className="work-title">WORK</h1>

      {/* Orbiting top-left planet */}
      <div className="planet-orbit">
        <div className="work-planet work-planet-top-left">
          <img src="/images/planet-icon.png" alt="Orbiting Planet" />
        </div>
      </div>

      <div className="experiences">
        {/* Experience 1 */}
        <div className="experience">
          <span className="experience-title">✦ Experience 1</span>
          <div className="project-box">
            <p>
              <strong className="project-label">Project Name:</strong> STEM Extern @ Cisco Systems
            </p>
            <p>
              <strong className="project-label">Description:</strong> I investigated topics such as 5G, data science, and cybersecurity. My team and I formulated a solution to the Capstone Project by designing an AI-based solution to increase sustainability in financial services.
            </p>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="experience">
          <span className="experience-title">✦ Experience 2</span>
          <div className="project-box">
            <p>
              <strong className="project-label">Project Name:</strong> AI Research
            </p>
            <p>
              <strong className="project-label">Description:</strong> I enhanced my coding knowledge by learning advanced Python and machine learning. I utilized CNN/KNN models to better detect pneumonia in X-rays and measured model accuracy.
            </p>
          </div>
        </div>

        {/* Experience 3 */}
        <div className="experience">
          <span className="experience-title">✦ Experience 3</span>
          <div className="project-box">
            <p>
              <strong className="project-label">Project Name:</strong> Website Developer (GWC Immersion Program)
            </p>
            <p>
              <strong className="project-label">Description:</strong> I furthered my skills in HTML/CSS and software creation platforms. I studied website features and frameworks to build sites addressing women’s stereotypes and the gender wage gap.
            </p>
          </div>
        </div>
      </div>

      {/* Orbiting bottom-right planet */}
      <div className="planet-orbit planet-orbit-2">
        <div className="work-planet work-planet-bottom-right">
          <img src="/images/planet7.png" alt="Orbiting Planet 2" />
        </div>
      </div>
    </div>
  );
}

export default Work;
