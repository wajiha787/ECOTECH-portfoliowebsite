import React, { useState } from "react";
import "../styles/TabNavigation.css";

const MissionVision = () => {
  const [selectedTab, setSelectedTab] = useState("mission");

  return (
    <div className="mission-vision">
      <div className="tabs">
        <button onClick={() => setSelectedTab("mission")}>Our Mission</button>
        <button onClick={() => setSelectedTab("vision")}>Our Vision</button>
        <button onClick={() => setSelectedTab("history")}>Our History</button>
      </div>

      <div className="tab-content">
        {selectedTab === "mission" && <p>To empower businesses through innovative digital solutions that drive growth and create meaningful connections with their audiences.</p>}
        {selectedTab === "vision" && <p>To be the global leader in transformative technology solutions, shaping a future where businesses thrive in an increasingly digital world</p>}
        {selectedTab === "history" && <p>Founded in 2015, we've grown from a small startup to an award-winning digital agency serving clients across 15 countries</p>}
      </div>
    </div>
  );
};

export default MissionVision;
