import React from 'react';
import Client1 from '../images/Client-1.png';
import Client2 from '../images/Client-2.png';
import Client3 from '../images/Client-3.png';
import Client4 from '../images/Client-4.png'; 
import Client5 from '../images/Client-5.png';
import Client6 from '../images/Client-6.png';
import Client7 from '../images/Client-7.png';
import Client8 from '../images/Client-8.png';
import Client9 from '../images/Client-9.jpg';
import '../styles/ClientsHome.css'; // Import the CSS file

export default function ClientsHome() {
  const images = [
    Client1, Client2, Client3, Client4, Client5, 
    Client6, Client7, Client8, Client9
  ];  

  return (
    <div className="clients-container">
      <h2 className="clients-heading">Bringing over 10+ years of expertise in ICT infrastructure, applications, and services</h2> {/* Added heading */}
      <div className="clients-strip">
        {/* Repeat images twice for seamless effect */}
        {images.concat(images).map((img, index) => (
          <img key={index} src={img} alt={`Client-${index}`} className="client-image" />
        ))}
      </div>
    </div>
  );
}
