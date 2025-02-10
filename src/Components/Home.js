import React from "react";
import imgfrontpage from '../images/frontpage.jpg';
import '../styles/Home.css';
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
    return (
        <div className="home-container">
            <div className="image-container">
                <img className="frontpage" src={imgfrontpage} alt="ECO Tech front page" />
                <div className="overlay"></div>
                
                {/* Main Text Centered */}
                <div className="image-text">
                    <p>
                        Empower your business with innovative IT solutions—where technology meets sustainability and efficiency for a smarter, secure future!
                    </p>
                </div>

                {/* Vertical Text for Timings */}
                <div className="vertical-text">MON-SAT</div>
                <div className="vertical-text-time">9AM TO 6PM</div>
            </div>

            {/* Wrap Services and WhyChooseUs in a separate div to avoid styling issues */}
            <div className="home-sections">
                <Services />
                <WhyChooseUs />
            </div>
        </div>
    );
};

export default Home;
