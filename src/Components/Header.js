import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Drawer from "./Drawer";
import imglogo from "../images/ecologo.png";
import { FaBars } from "react-icons/fa";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <header className="sticky-header" style={{ padding: "2rem" }}>
      <div className="logoWrapper">
        <img className="ecologo" src={imglogo} alt="ECO Tech Fusion Logo" />
        <div className="logo">
          <span className="ECO">ECO</span>
          <span className="TECH">TECH</span>
          <span className="FUSION">FUSION</span>
          <span className="innovations">Serving Innovations</span>
        </div>
      </div>
      <nav className="desktop-nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
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
              <Link to="/town-planners-and-builders" className="dropdown-item">Town Planners and Builders</Link>

            </div>
          )}
        </div>

        <Link to="/clients" className="nav-link" >Clients</Link>
        <Link to="/aboutus" className="aboutus">About Us</Link>     
        <Link to="/contactus" className="contactus">Contact Us</Link>
      </nav>
       {/* Mobile Nav - Bar Icon */}
       <div className="mobile-nav">
        <button className="bar-icon" onClick={toggleDrawer}>
          <FaBars /> {/* React Icon for Hamburger */}
        </button>
      </div>

      {/* Drawer Component for Mobile */}
      {isDrawerOpen && <Drawer toggleDrawer={toggleDrawer} />}
    </header>
  );
}

export default Header;
