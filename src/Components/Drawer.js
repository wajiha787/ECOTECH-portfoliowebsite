import React from "react";
import { FaTimes } from "react-icons/fa"; // Using the close icon from React Icons
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Drawer({ toggleDrawer }) {
  return (
    <div className="drawer">
      <div className="drawer-links">
        <Link to="/" className="drawer-link" onClick={toggleDrawer}>
          Home
        </Link>
        <Link to="/clients" className="drawer-link" onClick={toggleDrawer}>
          Clients
        </Link>
        <Link to="/aboutus" className="drawer-link" onClick={toggleDrawer}>
          About Us
        </Link>
        <Link to="/contactus" className="drawer-link" onClick={toggleDrawer}>
          Contact Us
        </Link>
        <h3>Solutions</h3>
        <Link
          to="/structured-cabling"
          className="drawer-link"
          onClick={toggleDrawer}
        >
          Structured Cabling
        </Link>
        <Link
          to="/data-center-solution"
          className="drawer-link"
          onClick={toggleDrawer}
        >
          Data Center Solution
        </Link>
        <Link
          to="/ict-elv-solutions"
          className="drawer-link"
          onClick={toggleDrawer}
        >
          ICT & ELV Solutions
        </Link>
        <Link
          to="/unified-voice-solution"
          className="drawer-link"
          onClick={toggleDrawer}
        >
          Unified Voice Solution
        </Link>
       
      </div>
      <button className="close-btn" onClick={toggleDrawer}>
        <FaTimes /> {/* Close button with React Icon */}
      </button>
    </div>
  );
}

export default Drawer;