import { Container, Row, Col, Button } from "react-bootstrap";
import WWD from "../UI/Cards/WWD";
import Scene from "../UI/Humaaans/Scene.svg";
import mentorships from "../UI/Humaaans/mentorships.svg";
import techTalks from "../UI/Humaaans/techTalks.svg";
import social from "../UI/Humaaans/social.svg";
// ---------------------------------------------------------
// ADDED IMPORTS - MICHELLE TAM
//import test from "../UI/Mentorship/MentorshipMeet1.png";
import WhatWeDo from "../WhatWeDo/WhatWeDo.js";
//import homePic from "../public/imagesCropped2024/wicsHomePage"
// ---------------------------------------------------------
import SeasonalDisplay from "../SeasonalDisplay/SeasonalDisplay.js";
// ----- Added imports - Diya -------
import SponsorScroll from "../Components/Sponsorscroll";
import Footer from "../Navigation/Footer.jsx";

//bg-light
function About() {
  return (
    <div className="light-purple font-serif">
      <Container>
        <div className="text-center pb-3">
          <h1 className="text-4xl md:text-6xl p-5 pb-2">Women In Computer Science </h1>
          <div className="club-vision">
            <h6 className="p-0 mb-4 custom-font-size2">
              A support network to empower women and other minorities in tech
            </h6>
            <Button href="https://asu.campuslabs.com/engage/organization/women-in-computer-science" 
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans">Join Now</Button>
          </div>
        </div>
{/* --- OLD BOOTSTRAP STYLING ----
        <Row className="mb-5">
          <Col className="d-flex align-items-center custom-font-size3">

            <div>
              <p className="align-middle">
                Women in Computer Science is a student-led organization at
                Arizona State University, which aims to support female and other
                minority students in technology.
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
              */}
        <div className="flex flex-col md:flex-row font-serif my-10">
          <div className="w-full md:w-1/2">
            <div>
              <p className="text-lg">Women in Computer Science is a student-led organization at
                Arizona State University, which aims to support female and other
                minority students in technology.</p>
            </div>
            <div>
            </div>
          </div>
          <img
              src={Scene}
              className="img-fluid mx-10 ml-20 hidden md:block"
              alt="scene of two women in collaboration"
          />
        </div>




        <h3 className="text-center m-2">What We Do</h3>
         <WhatWeDo /> 
         <h3 className="text-center m-2 pb-2 pt-10">Sponsors</h3> 
      </Container>
      <SponsorScroll/>
      <div className="py-10"></div>
      <Footer/>
    </div>
    );
}
{/* CODE FOR WHAT WE DO IS BELOW THIS ===================================================================================================== */}
{/* 
      <Row className="mt-5 pb-5">
        <Col xs={12} md={6} className="my-3 custom-image-col">
            <WWD
              title="Mentorships Test"
              description="Our Mentors offer safe spaces for underclassmen to come together and discuss any issues they are facing, offering suport along the way."
              image={Test}
            />
          </Col>

          <Col xs={12} md={6} className="my-3">
            <WWD
              title="Mentorships"
              description="Our Mentors offer safe spaces for underclassmen to come together and discuss any issues they are facing, offering suport along the way."
              image={mentorships}
            />
          </Col>

          <Col xs={12} md={6} className="my-3">
            <WWD
              title="Socials"
              description="In our socials, you'll have fun while building relationships with other students on campus. ADDING MORE TO SEE IF IT EVENS OUT THE BOX    "
              image={social}
            />
          </Col>

          <Col xs={12} md={6} className="my-3">
            <WWD
              title="Tech Talks"
              description="Our Tech Talks offer informative sessions to help students understand important concepts in computer science I MTESTING WHAT HAPPENS IF I ADD MORE THIONGS. JSUT A LITTLE BIT MORE "
              image={techTalks}
            />
          </Col>                  
        </Row> 
 
           <WhatWeDo /> 
      </Container>
    </div>
  );
} */}

export default About;
