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
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
              <li><Link to="/clients">Clients</Link></li>
              <li><Link to="/">Home</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="footer-links">
          <h3>Solutions</h3>
          <ul>
            <li><a href="#">Data Wired and Wireless Solutions</a></li>
            <li><a href="#">Structured Cabling Solutions</a></li>
            <li><a href="#">Data Center Solutions</a></li>
            <li><a href="#">ICT / ELV Solutions</a></li>
            <li><a href="#">Unified Voice Solution</a></li>
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
