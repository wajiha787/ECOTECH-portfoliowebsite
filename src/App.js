import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Contactus from "./Components/Contactus";
import Clients from './Components/Clients';
import Aboutus from './Components/Aboutus';
import Footer from './Components/Footer';
import whatsapp from './images/whatsapplogo.png';
import DataWiredWireless from "./pages/DataWiredWireless";
import StructuredCabling from "./pages/StructuredCabling";
import DataCenterSolution from "./pages/DataCenterSolution";
import ICTELVSolutions from "./pages/ICTELVSolutions";
import UnifiedVoiceSolution from "./pages/UnifiedVoiceSolution"; 

function App() {
  return (
    <Router basename="/ECOTECH-portfoliowebsite">  {/* 👈 Added basename for GitHub Pages */}
      {/* WhatsApp Floating Button */}
      <div className="fixed-bottom-left">
        <a href="https://wa.me/923362220034?" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} width="60" alt="WhatsApp Logo" />
        </a>
      </div>
      
      <div className="app-container">
        {/* Fixed Header */}
        <Header />

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/data-wired-wireless" element={<DataWiredWireless />} />
          <Route path="/structured-cabling" element={<StructuredCabling />} />
          <Route path="/data-center-solution" element={<DataCenterSolution />} />
          <Route path="/ict-elv-solutions" element={<ICTELVSolutions />} />
          <Route path="/unified-voice-solution" element={<UnifiedVoiceSolution />} />
        </Routes>
      </div> 
      
    </Router>
  );
}

export default App;
