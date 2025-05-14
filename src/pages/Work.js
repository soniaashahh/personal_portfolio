// Work.js
import React from 'react';
import NavBar from '../components/NavBar';
import './Work.css';

const projects = [
  {
    title: 'AI for Financial Sustainability (Capstone)',
    tech: ['Data Science', 'AI', 'Sustainability'],
    description:
      'Investigated topics such as 5G, data science, and cybersecurity. My team and I formulated a solution to the Capstone Project by designing an AI-based solution to increase sustainability in financial services through hologram technology and prototyping an app to track employees.',
  },
  {
    title: 'Medical AI Research: Pneumonia Detection"',
    tech: ['Python', 'CNN', 'KNN'],
    description:
      'Utilized CNN/KNN models to better detect pneumonia in X-rays and measured model accuracy, while evaluating the ethicality of the AI-implemented model',
  },
  {
    title: 'Website: The Gender Wage Gap',
    tech: ['HTML', 'CSS', 'React'],
    description:
      'Furthered skills in HTML/CSS and software creation platforms while studying website features and frameworks to build sites addressing issues such as women’s stereotypes and the gender wage gap.',
  },
  {
    title: 'Tree Savings',
    tech: ['React', 'Figma', 'UI Design'],
    description:
    "A mobile app built with React Native that tracks students' spending/saving to allow for better habits and increase financial literacy.",
  },
  {
    title: 'Wonky Kong',
    tech: ['C++', 'C', 'OOP'],
    description:
      'A game where the player faces obstacles such as barrels, fireballs, and platforms to reach the Kong and advance to the next level. ',
  },
  {
    title: 'Wesbite: Next Generation Innovators',
    tech: ['React', 'JavaScript', 'Figma'],
    description:
      'Designed the website for Next Generation Innovators, a nonprofit that introduces local middle school students to versatile STEM topics through engaging and accessible educational content.',
  },
];

function Work() {
  return (
    <div className="page work-page">
      <NavBar />
      <h1 className="work-title">PROJECTS</h1>

      {/* Planets */}
      <div className="planet-orbit">
        <img src="/images/planet6.png" alt="Planet Left" className="work-planet" />
      </div>
      <div className="planet-orbit-2">
        <img src="/images/planet7.png" alt="Planet Right" className="work-planet" />
      </div>

      <div className="card-grid">
        {projects.map((project, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>{project.title}</h2>
                <div className="tech-badges">
                  {project.tech.map((t, i) => (
                    <span className={`tech-badge ${t.replace(/\s+/g, '')}`} key={i}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="flip-card-back">
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
