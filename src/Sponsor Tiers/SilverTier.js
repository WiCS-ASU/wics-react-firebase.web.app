import { Container, Row, Col } from "react-bootstrap";
import Sponsorships from "../UI/Cards/Sponsorships";

// bg-success text-light text-center p-4
function SilverTier() {
  return (
    <div className="bg-light">
      <Container>
        <h1 className="bg-success text-light text-center p-4">⎯⎯⎯⎯ Silver Tier ⎯⎯⎯⎯</h1>

        <Row>
          <Col md={6} className="my-3">
            <Sponsorships title="Workiva" color="bg-success" />
          </Col>
          <Col md={6} className="my-3">
            <Sponsorships title="General Dynamics" color="bg-success" />
          </Col>
{/*           <Col md={6} className="my-3">
            <Sponsorships title="Amazon" color="bg-success" />
          </Col>
          <Col md={6} className="my-3">
            <Sponsorships title="Chime" color="bg-success" />
          </Col>
          <Col md={6} className="my-3">
            <Sponsorships title="USAA" color="bg-success" />
          </Col> */}
 {/*          <Col md={6} className="my-3">
            <Sponsorships title="Goldman Sachs" color="bg-success" />
          </Col>
          <Col md={6} className="my-3">
            <Sponsorships title="Fox" color="bg-success" />
          </Col>
          <Col md={6} className="my-3">
            <Sponsorships title="State Farm" color="bg-success" />
          </Col> */}

        </Row>
      </Container>
    </div>
  );
}

export default SilverTier;
