import { Container, Row, Col } from "react-bootstrap";
import Sponsorships from "../UI/Cards/Sponsorships";
function Sponsors() {
  return (
    <Container>
      <h1>Sponsors</h1>
      <h3>Lorem ipsum sit dolore</h3>
<Row>
  <Col> 
  <Sponsorships />
  <Sponsorships />
  </Col>
  <Col>
  <Sponsorships />
  <Sponsorships />
  </Col>
</Row>
    


    </Container>
  );
}

export default Sponsors;
