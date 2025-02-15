import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import imglogo from "../images/ecologo.png";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="sticky-header">
      <img className="ecologo" src={imglogo} alt="ECO Tech Fusion Logo" />
      <div className="logo">
        <span className="ECO">ECO</span>
        <span className="TECH">TECH</span>
        <span className="FUSION">FUSION</span>
        <span className="innovations">Serving Innovations</span>
      </div>
      <nav>
        <Link to="/" className="nav-link">Home</Link>

        {/* Dropdown for Solutions */}
        <div 
          className="solutions-container" 
          onMouseEnter={() => setShowDropdown(true)} 
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span className="solutions">Solutions ▾</span>
          {showDropdown && (
            <div className="dropdown">
              <Link to="/data-wired-wireless" className="dropdown-item">Data Wired & Wireless</Link>
              <Link to="/structured-cabling" className="dropdown-item">Structured Cabling</Link>
              <Link to="/data-center-solution" className="dropdown-item">Data Center Solution</Link>
              <Link to="/ict-elv-solutions" className="dropdown-item">ICT & ELV Solutions</Link>
              <Link to="/unified-voice-solution" className="dropdown-item">Unified Voice Solution</Link>
            </div>
          )}
        </div>

        <Link to="/clients" className="nav-link" >Clients</Link>
        <Link to="/aboutus" className="aboutus">About Us</Link>
        
        {/* ✅ Fixed Contact Us Button */}
        <Link to="/contactus" className="contactus">Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;
