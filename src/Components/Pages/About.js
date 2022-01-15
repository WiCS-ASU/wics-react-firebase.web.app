import { Container, Row, Col, Button } from "react-bootstrap";
import WWD from "../UI/Cards/WWD";
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

          <Col className="d-none d-md-block">
            <img
              src={Scene}
              className="img-fluid"
              alt="scene of two women in collaboration"
            />
          </Col>
        </Row>

        <h3 className="text-center m-4">What we do</h3>

        <Row className="mt-5 pb-5">
          <Col xs={12} md={4} className="my-3">
            <WWD
              title="Mentorships"
              description="Some quick example text to build on the card title and make up the bulk of the card's content.

          "
            />
          </Col >
          <Col xs={12} md={4} className="my-3">
            <WWD
              title="Socials"
              description="Some quick example text to build on the card title and make up the bulk of the card's content.

           "
            />
          </Col>
          <Col xs={12} md={4} className="my-3">
            <WWD
              title="Tech Talks"
              description="Some quick example text to build on the card title and make up the bulk of the card's content.

           "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
