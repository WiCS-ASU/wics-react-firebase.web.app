import React from "react";
import SeasonalCards from "./SeasonalCards.js";
import { Carousel, CarouselItem } from "react-bootstrap";
//import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function SeasonalDisplay() {
  return (
    <div className="seasonal-display">
      <SeasonalCards
        src="../images/Resume_Database.png"
        link="https://docs.google.com/forms/d/e/1FAIpQLSeagUwaOsPKmK_n-dM3_bAE55mSsLIT8dVFtCx931EEQmYpyA/viewform?usp=sf_link"
        button="Submit"
      />
      <SeasonalCards
        src="../images/Mentorship.png"
        link="https://forms.gle/JzcLaKUnpg7CB1yH7"
        button="Sign Up"
      />
      <SeasonalCards
        src="../images/FSO_Career_Fairs.png"
        link="https://career.engineering.asu.edu/events-calendar/"
        button="Learn More"
      />
    </div>
  );
}

export default SeasonalDisplay;
