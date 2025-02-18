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
import '../styles/Clients.css';

export default function Clients() {
  const clients = [Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9];

  return (
    <div className="clients-container1">
      <h1>Our Clients</h1>
      <h2>Discover the outstanding organizations we collaborate with and explore how their innovation and vision align with our mission.</h2>
      <div className="clients-grid1">
        {clients.map((client, index) => (
          <img key={index} src={client} alt={`Client ${index + 1}`} className="client-image1" />
        ))}
      </div>
    </div>
  );
}
