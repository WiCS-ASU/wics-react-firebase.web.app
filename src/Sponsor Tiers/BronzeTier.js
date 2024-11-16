import { Container, Row, Col } from "react-bootstrap";
import Sponsorships from "../UI/Cards/Sponsorships";

function BronzeTier() {
  return (
    <div className="bg-light">
      <Container>
        <h1 className="bg-danger text-light text-center p-4">⎯⎯⎯⎯ Bronze Tier ⎯⎯⎯⎯</h1>

        <Row>
          <Col md={6} className="my-3">
            <Sponsorships title="AVEVA" color="bg-danger" />
          </Col>
          <Col md={6} className="my-3">
            <Sponsorships title="StateFarm" color="bg-danger" />
          </Col>
          <Col md={6} className="my-3">
            <Sponsorships title="Nationwide" color="bg-danger" />
          </Col>
          <Col md={6} className="my-3">
            <Sponsorships title="Microchip" color="bg-danger" />
          </Col>
          <Col md={6} className="my-3">
            <Sponsorships title="MUFG" color="bg-danger" />
          </Col>
          <Col md={6} className="my-3">
            <Sponsorships title="Service Now" color="bg-danger" />
          </Col>
          


{/*           <Col md={6} className="my-3">
            <Sponsorships title="Viasat" color="bg-danger" />
          </Col>
          <Col md={6} className="my-3">
            <Sponsorships title="L3 Harris Technology" color="bg-danger" />
          </Col>
          <Col md={6} className="my-3">
            <Sponsorships title="Bloomberg" color="bg-danger" />
          </Col>
          <Col md={6} className="my-3">
            <Sponsorships title="Aveva" color="bg-danger" />
          </Col>
          <Col md={6} className="my-3">
            <Sponsorships title="GoDaddy" color="bg-danger" />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default BronzeTier;
