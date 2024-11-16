import { Container, Row, Col } from "react-bootstrap";
import Sponsorships from "../UI/Cards/Sponsorships";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import PlatinumTier from "../Sponsor Tiers/PlatinumTier";
import SilverTier from "../Sponsor Tiers/SilverTier";
import BronzeTier from "../Sponsor Tiers/BronzeTier";

function Sponsors() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="vh-100 bg-light">
      <Carousel
        variant="dark"
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        indicators={null}
      >
        <Carousel.Item>
          <PlatinumTier />
        </Carousel.Item>

        <Carousel.Item>
          <SilverTier />
        </Carousel.Item>

        <Carousel.Item>
          <BronzeTier />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Sponsors;
