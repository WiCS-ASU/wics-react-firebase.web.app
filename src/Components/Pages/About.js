import { Container, Row, Col, Button } from "react-bootstrap";
import Scene from "../UI/Humaaans/Scene.svg";

function About() {
  return (
    <div className="bg-light">
      <Container>
        <div className="text-center pb-5">
          <h1 className=" display-1 p-3">Women in Computer Science</h1>
          <h6 className="p-3">
            A support network and resource for female and other minority
            students in technology
          </h6>
          <Button
            href="https://asu.campuslabs.com/engage/organization/women-in-computer-science"
            variant="primary"
          >
            Join Now
          </Button>
        </div>

        <Row className="mb-5">
          <Col className="d-flex align-items-center">
            <div>
              <p className="align-middle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Velit egestas dui id ornare arcu. Volutpat lacus laoree
              </p>
            </div>
          </Col>

          <Col>
            <img
              src={Scene}
              className="img-fluid"
              alt="scene of two women in collaboration"
            />
          </Col>
        </Row>

        <h3 className="text-center m-4">Lorem Ipsum Dolor</h3>

        <Row className="mt-5">
          <Col> </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
