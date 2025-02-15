import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import '../styles/Aboutus.css';
import CEOImage from '../images/CEO.png';

function AboutUs() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: 'mission',
      title: 'Our Mission',
      content: 'Our mission is to empower businesses through innovative digital solutions that drive growth and create meaningful connections with their audiences.'
    },
    {
      id: 'vision',
      title: 'Our Vision',
      content: 'Our vision is to be the global leader in transformative technology solutions, shaping a future where businesses thrive in an increasingly digital world.'
    },
    {
      id: 'history',
      title: 'Our History',
      content: 'Founded in 2015, we\'ve grown from a small startup to an award-winning digital agency serving clients across 15 countries.'
    }
  ];

  return (
    <div className="container">
      <div className="content-wrapper">
        <h1 className="main-heading">About Us</h1>

        <div className="sections-container">
          {sections.map((section) => (
            <div key={section.id} className="section">
              <button
                onClick={() => toggleSection(section.id)}
                className="section-button"
              >
                <h2 className="section-title">{section.title}</h2>
                {openSection === section.id ? (
                  <ChevronUp size={24} color="#4b5563" />
                ) : (
                  <ChevronDown size={24} color="#4b5563" />
                )}
              </button>
              {openSection === section.id && (
                <div className="section-content">
                  <p className="section-text">{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="ceo-section">
          <div className="ceo-container">
          <img src={CEOImage} alt="CEO" className="ceo-image" />
            <div className="ceo-content">
              <h2 className="ceo-heading">Message from our CEO</h2>
              <p className="ceo-message">
                Welcome to ECOTECH FUSION! At our core, we believe in innovation, collaboration, 
                and excellence. Our team is dedicated to creating impactful digital solutions 
                that help businesses thrive in today's competitive landscape. We are committed 
                to delivering technology-driven success and ensuring that our clients stay ahead 
                in the digital era.
              </p>
              <p className="ceo-signature">- Air Commodore Aziz-ur-Rehman, Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;