import React from 'react';
import NavBar from '../components/NavBar';
import './Home.css';

function Home() {
  return (
    <div className="page home-page">
      <NavBar />
      <div className="hero">
        <h2 className="welcome">HELLO, WELCOME TO</h2>
        <h1 className="title">SONIA’S SPACE</h1>
      </div>
      <div className="rocket">
        <img src="/images/rocket.png" alt="Rocket" />
      </div>
      <div className="planet planet-top-right">
        <img src="/images/planet1.png" alt="Planet" />
      </div>
      <div className="planet planet-bottom-right">
        <img src="/images/planet2.png" alt="Planet" />
      </div>
    </div>
  );
}

export default Home;
