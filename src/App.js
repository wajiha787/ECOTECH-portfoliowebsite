import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import WhyChooseUs from './Components/WhyChooseUs';
import whatsapp from './images/whatsapplogo.png';
//import TabNavigation from './Components/TabNavigation'; 

function App() {
  return (
    <>
      <div className="fixed-bottom-left">
        <a href="https://wa.me/923362220034?" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} width="60" alt="WhatsApp Logo" />
        </a>
      </div>
      <Header />
      <Home />
      <Services />
      <WhyChooseUs />
    </>
  );
}

export default App;