import React from "react";
import SeasonalCards from "./SeasonalCards.js";
import { Carousel, CarouselItem } from "react-bootstrap";
//import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



function SeasonalDisplay() {
  return (
    <div className="bg-dark">
      <Carousel className="seasonal-display">
        <CarouselItem>
          <div>
            <ul className="welcome-week-cards">
              <SeasonalCards src="./images/Welcome_Week_22/2.png" />
              <SeasonalCards src="./images/Welcome_Week_22/3.png" />
              <SeasonalCards src="./images/Welcome_Week_22/4.png" />
            </ul>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div>
            <SeasonalCards src="./images/Mentorship.png"/>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  );
}

export default SeasonalDisplay;
