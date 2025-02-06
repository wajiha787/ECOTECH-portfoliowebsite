import React from 'react';
import '../App.css'; 

function WhyChooseUs() {
  return (
    <>
      <p className='whychooseus'> WHY CHOOSE US </p>
      <div className="containerw">
        {/* Small Box */}
        <div className="small-box">
          <p>WE NEVER COMPROMISE ON THE QUALITY OF WORK</p>
          <div className="since">
            <h3>SINCE 2022</h3>
          </div>
        </div>

        {/* Large Box */}
        <div className="large-box">
          <h2>TREMENDOUS NUMBER OF EXTREMELY SATISFIED CLIENTS.</h2>
          <p>
            We have an experience with both local as well as international clients from all across the world who were not
            only satisfied but also highly appreciative of our hard work and extraordinary services and always made sure to
            hire us for their future projects as well. Our clients’ trust in us has always been our driving force and a
            source of motivation that enables us to perform better every time.
          </p>

          {/* Tick Points */}
          <ul className="tick-list">
            <li>✔ 100% happy clients.</li>
            <li>✔ Long list of exceptionally outstanding projects.</li>
            <li>✔ Highly cooperative team.</li>
            <li>✔ Prioritizing our client over everything else.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
