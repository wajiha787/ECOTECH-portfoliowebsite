import React, { useState } from 'react';
import '../styles/Contactus.css'; 
import contactbg from '../images/Contactus-bg.jpg';
import call from '../images/telephone.png'; 
import location from '../images/gps.png';
import email from '../images/circle.png';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    additionalInfo: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page" style={{ backgroundImage: `url(${contactbg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', color: '#fff' }}>
      
      {/* Heading Directly on Background */}
      <div className="header-content">
        <h1 className="contact-heading">We’d Love To Hear From You</h1>
        <p className="contact-description">
          We’re here to answer your questions and assist you with anything you need. 
          Feel free to reach out, and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <div className="contact-container">
        <div className="contact-form-container">
                <form onSubmit={handleSubmit} className="contact-form">
        <label className="form-contact">Contact Form</label>

        <label className="form-label" htmlFor="service">Select a Service</label>
        <select 
            id="service"
            className="dropdown-field"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            required
        >
            <option value="" disabled>Select a service</option>
            <option value="Data Wired & Wireless">Data Wired & Wireless</option>
            <option value="Structured Cabling">Structured Cabling</option>
            <option value="Data Center Solution">Data Center Solution</option>
            <option value="ICT & ELV Solutions">ICT & ELV Solutions</option>
            <option value="Unified Voice Solution">Unified Voice Solution</option>
        </select>

        <label className="form-label" htmlFor="firstName">First Name</label>
        <input 
            type="text" 
            id="firstName"
            className="input-field" 
            value={formData.firstName} 
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} 
            required 
        />

        <label className="form-label" htmlFor="lastName">Last Name</label>
        <input 
            type="text" 
            id="lastName"
            className="input-field" 
            value={formData.lastName} 
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} 
            required 
        />

        <label className="form-label" htmlFor="email">Your Email</label>
        <input 
            type="email" 
            id="email"
            className="input-field" 
            value={formData.email} 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
            required 
        />

        <label className="form-label" htmlFor="additionalInfo">Additional Information</label>
        <textarea 
            id="additionalInfo"
            className="textarea-field" 
            value={formData.additionalInfo} 
            onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
            style={{ height: "200px", width: "100%", padding: "10px" }}
        ></textarea>

        <button type="submit" className="submit-button">Send Message</button>
        </form>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards-container">
        <div className="card">
          <img className='mail-logo' src={email} alt="this is ECOTECH's email"/>
          <p>amna.waqar@ecotech.com.pk</p>
        </div>
        <div className="card">
        <img className='mail-logo' src={location} alt="this is ECOTECH's location"/>
          <p>Office no. 457-E, Street 58, Sector I-8/3, Islamabad</p>
        </div>
        <div className="card">
        <img className='mail-logo' src={call} alt="this is ECOTECH's number"/>
          <p>+92 51 8449054</p>
        </div>
      </div>

      
      <section className="map-container">
        <div className="responsive-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.1533129868437!2d73.0479!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbef8c1c9679f%3A0x6849069edcf47a2d!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1616682825889!5m2!1sen!2s" 
            loading="lazy" 
            title="Office Location"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
