import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Company Section */}
        <div className="footer-company">
          <h2>ECOTECH FUSION</h2>
          <p>
          A premier IT powerhouse leveraging cutting-edge technology to deliver integrated ICT infrastructure, applications, and services that drive your business success.
          </p>
        </div>

        {/* Company Links */}
        <div className="footer-links">
          <h3>Company</h3>
          <ul>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
              <li><Link to="/clients">Clients</Link></li>
              <li><Link to="/">Home</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="footer-links">
          <h3>Solutions</h3>
          <ul>
            <li><Link to="/data-wired-wireless">Data Wired and Wireless Solutions</Link></li>
            <li><Link to="/structured-cabling">Structured Cabling Solutions</Link></li>
            <li><Link to="/data-center-solution">Data Center Solutions</Link></li>
            <li><Link to="/ict-elv-solutions">ICT / ELV </Link></li>
            <li><Link to="/unified-voice-solution">Unified Voice Solution</Link></li>
            <li><Link to="/town-planners-and-builders">Town Planners and Builders</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div className="footer-links">
          <h3>Help</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Conditions</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2024 All Rights Reserved For <span>ECOTECH FUSION Pvt. Ltd</span></p>
      </div>
    </footer>
  );
}
