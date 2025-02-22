import React, { useState, useEffect } from 'react';
import '../styles/Counter.css';

export default function Counter() {
  const [projects, setProjects] = useState(1);
  const [clients, setClients] = useState(1);
  const [happyClients, setHappyClients] = useState(1);

  useEffect(() => {
    const increment = (setState, max) => {
      let count = 1;
      const interval = setInterval(() => {
        setState(count);
        count++;
        if (count > max) clearInterval(interval);
      }, 10);
    };

    increment(setProjects, 205);
    increment(setClients, 80);
    increment(setHappyClients, 185); 
  }, []);

  return (
    <div className="counter-container">
      <h2 className='counter-heading'>Join Our Growing Community</h2>
      <div className="counter-grid">
        
        <div className="counter-item">
          <p className="counter-number">{projects}</p>
          <p className="counter-label">Projects Completed</p>
        </div>
        <div className="counter-item">
          <p className="counter-number">{clients}</p>
          <p className="counter-label">Active Clients</p>
        </div>
        <div className="counter-item">
          <p className="counter-number">{happyClients}</p>
          <p className="counter-label">Happy Clients</p>
        </div>
      </div>
    </div>
  );
}
