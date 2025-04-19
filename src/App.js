import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavbarComp from "./Navigation/NavbarComp";
import FooterComp from "./Navigation/FooterComp";
import About from "./Pages/About";
import Events from "./Pages/Events";
import AnnualCompetition from "./Pages/AnnualCompetition";
import PastCompetitions from "./Pages/PastCompetitions";
import ContactUs from "./Pages/ContactUs";
import OurTeam from "./Pages/OurTeam";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Sponsors from "./Pages/Sponsors";
import SponsorsCompetitionPackage from "./Pages/SponsorsCompetitionPackage";
import Competition2019 from "./Pages/Competition2019"
import Competition2025 from "./Pages/Competition2025";
//import Competition2024 from "./Pages/Competition2024";
// import other years as needed


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
          <Route path="/competitions/2019" element={<Competition2019 />} />
          <Route path="/competitions/2025" element={<Competition2025 />} />
          <Route path="/contact-us" element={ <ContactUs/> } />
          <Route path="/our-team" element={ <OurTeam/> } />
          <Route path="/privacy-policy" element={ <PrivacyPolicy/> } />
          <Route path="/sponsors" element={ <Sponsors/> } />
          <Route path="/sponsors-competition-package" element={ <SponsorsCompetitionPackage/> } />
        </Routes>
        <FooterComp />
        {/**  Footer needs to be fixed for now */}
      </Router>
      
    </div>
  );
}

export default App;
