import { Container, Row, Col } from "react-bootstrap";
import Sponsorships from "../UI/Cards/Sponsorships";

function GoldTier() {
  return (
    <div className="bg-light">
      <Container>
        <h1 className="goldTier text-center p-4">⎯⎯⎯⎯ Gold Tier ⎯⎯⎯⎯</h1>

        <Row>
          <Col md={6} className="my-3">
            <Sponsorships title="Intel" color="bg-warning" />
          </Col>
          <Col md={6} className="my-3">
            <Sponsorships title="Blue Yonder" color="bg-warning" />
          </Col>
          <Col md={6} className="my-3">
            <Sponsorships
              title="General Automatics Mission Systems"
              color="bg-warning"
            />
          </Col>
          <Col md={6} className="my-3">
            <Sponsorships title="Starbucks" color="bg-warning" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GoldTier;
