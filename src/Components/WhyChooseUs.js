import React from 'react';
import { CheckCircle } from 'lucide-react';
import '../styles/WhyChooseUs.css';

function WhyChooseUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      <section className="why-choose-us-section">
        <h2 className="section-title text-white">Why Choose Us</h2>
        
        <div className="content-container">
          {/* Benefits Card */}
          <div className="benefits-card">
            <p className="benefits-statement">
              WE NEVER COMPROMISE ON THE QUALITY OF WORK
            </p>
          </div>

          {/* Main Content */}
          <article className="main-content">
            <h3 className="content-heading">
              Tremendous Number of Extremely Satisfied Clients
            </h3>
            <p className="content-description">
              We have experience with both local and international clients worldwide who 
              remain loyal due to our exceptional services and dedication. Their trust 
              fuels our continuous improvement and commitment to excellence.
            </p>

            <ul className="benefits-list">
              {[
                "100% happy clients",
                "Long list of outstanding projects",
                "Highly cooperative team",
                "Client-first prioritization"
              ].map((benefit, index) => (
                <li key={index} className="benefit-item">
                  <CheckCircle className="icon" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>  
      </section>
    </div>
  );
}

export default WhyChooseUs;
