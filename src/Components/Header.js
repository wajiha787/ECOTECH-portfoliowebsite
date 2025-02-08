import React from 'react';
import '../styles/Header.css'; 
import imglogo from '../images/ecologo.png'

function Header() {
  return (
    <header>
      <img className="ecologo" src={imglogo} alt="ECO Tech Fusion Logo" />
      <div className="logo">
        <span className="ECO">ECO</span>
        <span className="TECH">TECH</span>
        <span className="FUSION">FUSION</span>
        <span className="innovations">Serving Innovations</span>
      </div>
      <nav> 
        <span className="home">Home</span>
        <span className="solutions">Solution</span>
        <span className="clients">Clients</span>
        <span className="aboutus">About Us</span>
        <button className="contactus">Contact Us</button>
      </nav>
    </header>
  );
}

export default Header;
