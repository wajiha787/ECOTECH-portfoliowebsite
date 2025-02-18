import React from "react";
import "../styles/ServicesSection.css"; // Import the CSS file

const ServicesSection = () => {
  return (
    <div className="services-container1">
      <div className="service-box blue-box">
        <h2>RANGE OF OUR SERVICES</h2>
        <p>
        We offer a wide range of services to our clients, delivered by a team of skilled professionals working in a multidisciplinary environment. Their in-depth expertise enables us to provide high-quality, practical solutions along with value-added support to meet our clients' needs
        </p>
      </div>

      <div className="service-box green-box">
        <h2>STRENGTH & SKILLS</h2>
        <p>
        Our expertise is built on the experience, knowledge, best practices, and skills of our professional team. We are confident in our ability to enhance any business’s online visibility and presence through advanced marketing strategies
        </p>
      </div>
    </div>
  );
};

export default ServicesSection;
