import { Container, Row, Col, Button } from "react-bootstrap";
import WWD from "../UI/Cards/WWD";
import Scene from "../UI/Humaaans/Scene.svg";
import mentorships from "../UI/Humaaans/mentorships.svg";
import techTalks from "../UI/Humaaans/techTalks.svg";
import social from "../UI/Humaaans/social.svg";


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
                Women in Computer Science is a student-led organization at Arizona State University, which aims
                to support female and other minority students in technology.
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
              description="Our Mentors offer safe spaces for underclassmen to come together and discuss any issues they are facing, offering suport along the way."
              image={mentorships}
          
            />
          </Col >
          <Col xs={12} md={4} className="my-3">
            <WWD
              title="Socials"
              description="In our socials, you'll have fun while building relationships with other students on campus."
              image={social}
            />
          </Col>
          <Col xs={12} md={4} className="my-3">
            <WWD
              title="Tech Talks"
              description="Our Tech Talks offer informative sessions to help students understand important concepts in computer science. "
              image={techTalks}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
