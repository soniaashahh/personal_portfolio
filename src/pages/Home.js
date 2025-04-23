import React, { useRef } from 'react';
import NavBar from '../components/NavBar';
import './Home.css';

function Home() {
  const topPlanetRef = useRef(null);
  const bottomPlanetRef = useRef(null);

  const handleRotate = (ref, animationClass) => {
    if (ref.current) {
      ref.current.classList.remove(animationClass);
      void ref.current.offsetWidth;
      ref.current.classList.add(animationClass);
    }
  };

  return (
    <div className="home-page">
      <NavBar />

      {/* Rocket - visually behind everything else */}
      <div className="rocket">
        <img src="/images/rocket.png" alt="Rocket" />
      </div>

      {/* This wrapper forces text to be on top */}
      <div className="text-layer">
        <div className="hero">
          <h2 className="welcome">HELLO, WELCOME TO</h2>
          <h1 className="title">SONIA'S SPACE</h1>
        </div>
      </div>

      {/* Top Right Planet */}
      <div className="orbit-center-home top-right">
        <div className="orbiting-planet-home" ref={topPlanetRef}>
          <img 
            src="/images/planet1.png" 
            alt="Planet 1" 
            className="large-planet" 
          />
        </div>
      </div>

      {/* Bottom Left Planet */}
      <div className="orbit-center-home bottom-left">
        <div className="orbiting-planet-home reverse" ref={bottomPlanetRef}>
          <img 
            src="/images/planet2.png" 
            alt="Planet 2" 
            className="large-planet" 
          />
        </div>
      </div>
    </div>
  );
}

export default Home;