import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavbarComp from "./Navigation/NavbarComp";
import FooterComp from "./Navigation/FooterComp";
import About from "./Pages/About";
import NewAbout from "./Pages/NewAbout";
import Events from "./Pages/Events";
import AnnualCompetition from "./Pages/AnnualCompetition";
import PastCompetitions from "./Pages/PastCompetitions";
import ContactUs from "./Pages/ContactUs";
import OurTeam from "./Pages/OurTeam";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Sponsors from "./Pages/Sponsors";
import SponsorsCompetitionPackage from "./Pages/SponsorsCompetitionPackage";
import OHacks from "./Pages/OHacks";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <Routes>
          <Route path="/" element={ <About/> } />
          <Route path="/events-calendar" element={ <Events/> } />
          <Route path="/annual-competition" element={ <AnnualCompetition/> } />
          <Route path="/past-competitions" element={ <PastCompetitions/> } />
          <Route path="/contact-us" element={ <ContactUs/> } />
          <Route path="/our-team" element={ <OurTeam/> } />
          <Route path="/privacy-policy" element={ <PrivacyPolicy/> } />
          <Route path="/sponsors" element={ <Sponsors/> } />
          <Route path="/sponsors-competition-package" element={ <SponsorsCompetitionPackage/> } />
          <Route path="/OHacks" element={<OHacks />} />
        </Routes>
        <FooterComp />
        {/**  Footer needs to be fixed for now */}
      </Router>
      
    </div>
  );
}

export default App;
