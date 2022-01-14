import { Container, Row, Col } from "react-bootstrap";
import Sponsorships from "../UI/Cards/Sponsorships";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import GoldTier from "../Sponsor Tiers/GoldTier";
import SilverTier from "../Sponsor Tiers/SilverTier";
import BronzeTier from "../Sponsor Tiers/BronzeTier";


function Sponsors() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
<<<<<<< Updated upstream

      
    <Carousel
      variant="dark"
      activeIndex={index}
      onSelect={handleSelect}
      interval={null}
      indicators={null}
    >
      <Carousel.Item>
        <GoldTier />
      </Carousel.Item>

      <Carousel.Item>
        <SilverTier />
      </Carousel.Item>

      <Carousel.Item>
        <BronzeTier />
      </Carousel.Item>

      
      
    </Carousel>
=======
    <Container>
      <h1>Sponsors</h1>
      <h3>Lorem ipsum sit dolore</h3>
<Row>
  <h2 className="text-center">Gold Tier</h2>
  <Col md={6} s={1} > 
  <Sponsorships 
    title="Intel" 
  />
  </Col>
  <Col md={6} s={1} > 
  <Sponsorships
    title="Blue Yonder"
  />
  </Col>
</Row>
<h2 className="text-center">Silver Tier</h2>
<Row>
  <Col md={6} s={1}>
  <Sponsorships
  title="Octo"
  />
  <Sponsorships 
  title="Amazon"
  />
  <Sponsorships 
  title="Paradox"
  />
  <Sponsorships 
  title="USAA"
  />
  <Sponsorships 
  title="Workiva"
  />
  </Col>
  <Col md={6} s={1}>
  <Sponsorships 
  title="Goldman Sachs"
  />
  <Sponsorships 
  title="Fox"
  />
  <Sponsorships 
  title="State Farm"
  />
  <Sponsorships 
  title="General Dynamics Mission Systems"
  />
  </Col>
</Row>
<h2 className="text-center">Bronze Tier</h2>
<Row>
  <Col md={6} s={1}>
    <Sponsorships
    title="Carvana"
    />
    <Sponsorships
    title="Edward Jones"
    />
    </Col>
  <Col md={6} s={1}>
    <Sponsorships
    title="GoDaddy"
    />
  </Col>
</Row>
>>>>>>> Stashed changes
    


  );
}

export default Sponsors;
