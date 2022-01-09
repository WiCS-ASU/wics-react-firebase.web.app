import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavbarComp from "./Components/Navigation/NavbarComp";
import FooterComp from "./Components/Navigation/FooterComp";
import About from "./Components/Pages/About";
import Events from "./Components/Pages/Events";
import AnnualCompetition from "./Components/Pages/AnnualCompetition";
import ContactUs from "./Components/Pages/ContactUs";
import OurTeam from "./Components/Pages/OurTeam";
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy";
import Sponsors from "./Components/Pages/Sponsors";


function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <Routes>
          
        <Route path="/" element={ <About/> } />
          <Route path="/events-calendar" element={ <Events/> } />
          <Route path="/annual-competition" element={ <AnnualCompetition/> } />
          <Route path="/contact-us" element={ <ContactUs/> } />
          <Route path="/our-team" element={ <OurTeam/> } />
          <Route path="/privacy-policy" element={ <PrivacyPolicy/> } />
          <Route path="/sponsors" element={ <Sponsors/> } />
        </Routes>
        <FooterComp />
      </Router>
      
    </div>
  );
}

export default App;
