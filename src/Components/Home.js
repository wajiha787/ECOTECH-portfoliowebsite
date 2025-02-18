import React, { useState, useEffect } from "react";
import coverPic1 from "../images/cover-page1.jpg";
import coverPic2 from "../images/cover-page2.jpg";
import coverPic3 from "../images/cover-page3.jpg";
import "../styles/Home.css";
import Services from "./Services";
import ClientsHome from "./ClientsHome";
import WhyChooseUs from "./WhyChooseUs";
import ServicesSection from "./ServicesSection";
import Counter from "./Counter";
import Footer from "./Footer";

const images = [coverPic1, coverPic2, coverPic3];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="image-container">
        <img
          className="frontpage"
          src={images[currentImage]}
          alt="ECO Tech front page"
        />

        {/* Main Text Centered */}
        <div className="image-text">
          <p>
            Empower your business with innovative IT solutions—where technology
            meets sustainability and efficiency for a smarter, secure future!
          </p>
        </div>

        {/* Vertical Text for Timings */}
        <div className="vertical-text">MON-SAT</div>
        <div className="vertical-text-time">9AM TO 6PM</div>
      </div>

      {/* Wrap Services and WhyChooseUs in a separate div */}
      <div className="home-sections">
        <ServicesSection />
        <Services />
      </div>
      <WhyChooseUs />
      <Counter />
      <ClientsHome />
      <Footer />
    </div>
  );
};

export default Home;
