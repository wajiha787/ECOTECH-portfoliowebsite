import React from 'react';
import '../App.css'; 

function Services() {
  return (
    <><p className='service'>Services For Our Clients</p><div className="services-container">
      <div className="card">
        <div className="card-content front">
          <h3>Support and Maintenance</h3>
        </div>
        <div className="card-content back">
          <p>We don't just solve problems; we prevent them. With regular updates and system checks, we ensure your operations run at peak efficiency.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-content front">
          <h3>Contact Center Consultation</h3>

        </div>
        <div className="card-content back">
          <p>Enhance efficiency, elevate customer satisfaction, and drive success with tailored solutions designed for your needs</p>
        </div>
      </div>

      <div className="card">
        <div className="card-content front">
          <h3>Smart Automation </h3>

        </div>
        <div className="card-content back">
          <p>Streamline repetitive tasks and workflows to enhance productivity and reduce errors</p>
        </div>
      </div>
    </div></>
  );
}
export default Services;
