import { Container, Row, Col } from "react-bootstrap";
import Sponsorships from "../UI/Cards/Sponsorships";

// changed the name from goldTier to PlatinumTier
// bg-secondary text-light text-center p-4
// ORIGINAL: platinumTier text-center p-4
function PlatinumTier() {
  return (
    <div className="bg-light">
      <Container>
        <h1 className="bg-secondary text-light text-center p-4">⎯⎯⎯⎯ PlatinumTier ⎯⎯⎯⎯</h1>
      {/* I centered it since we only have one platinum sponser and its hexagon*/}
        <Row className="justify-content-center">
          <Col md={6} className="my-3">
            <Sponsorships title="Hexagon" color="bg-secondary" />
          </Col>
        
        {/*   <Col md={6} className="my-3">
            <Sponsorships title="Blue Yonder" color="bg-secondary" />
          </Col>
          <Col md={6} className="my-3">
            <Sponsorships
              title="General Automatics Mission Systems"
              color="bg-secondary"
            />
          </Col>
          <Col md={6} className="my-3">
            <Sponsorships title="Starbucks" color="bg-secondary" />
          </Col>  */}
        </Row>
      </Container>
    </div>
  );
}

export default PlatinumTier;
