import React from "react";
import imgfrontpage from '../images/frontpage.jpg';
import '../App.css';

const Home = () => {
    return (
        <div className="image-container">
          <img className="frontpage" src={imgfrontpage} alt="ECO Tech front page" />
          <div className="image-text">
            Empower your business with innovative IT solutions—where technology meets sustainability and efficiency for a smarter, secure future!
          </div>
          <div className="vertical-text">MON-SAT</div>
          <div className="vertical-text-time">9AM  TO  6PM</div>
          <div className="translucent-overlay"></div>
          
        </div>
    );
  };
  
export default Home;