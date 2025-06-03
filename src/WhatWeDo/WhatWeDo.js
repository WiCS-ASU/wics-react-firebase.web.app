import { Container, Row, Col, Button } from "react-bootstrap";
import WWD from "../UI/Cards/WWD";
//import Scene from "../UI/Humaaans/Scene.svg";
import mentorships from "../UI/Humaaans/mentorships.svg";
import techTalks from "../UI/Humaaans/techTalks.svg";
import social from "../UI/Humaaans/social.svg";
import test from "../UI/Mentorship/MentorshipMeet1.png";
import mentorship1 from "../UI/Mentorship/MentorshipMeet1.png";
import mentorship2 from "../UI/Mentorship/MentorshipMeet2.png";
import mentorship3 from "../UI/Mentorship/MentorshipMeet3.png";
import social1 from "../UI/Socials/Cookie Decorating Social.png";
import social2 from "../UI/Socials/Game Social.png";
import social3 from "../UI/Socials/Jeapordy Night Social.png";
import social4 from "../UI/Socials/Painting Social.png";
import social5 from "../UI/Socials/Pumpkin Painting Social.png";
import social6 from "../UI/Socials/Tote Bag Social.png";
import tech1 from "../UI/TechTalks/Tech Talk Cybersecurity.png";
import tech2 from "../UI/TechTalks/Tech Talk Goldman Sachs.png";
import tech3 from "../UI/TechTalks/Tech Talk Statefarm.png";
import '../index.css';


function whatWeDo() {
  const imageData = [
/*     {
      title: "Mentorships Test",
      description: "Our Mentors offer safe spaces for underclassmen to come together and discuss any issues they are facing, offering support along the way.",
      images: [
        { src: test, alt: 'Test Image 1' },
        { src: test, alt: 'Test Image 2' },
        { src: test, alt: 'Test Image 3' }
      ]
    }, */
    {
      title: "Mentorships",
      description: "Our Mentors offer safe spaces for underclassmen to come together and discuss any issues they are facing, offering support along the way.",
      images: [
        { src: mentorship1, alt: 'Test Image 1' },
        { src: mentorship2, alt: 'Test Image 2' },
        { src: mentorship3, alt: 'Test Image 3' }
      ]
    },
    {
      title: "Socials",
      description: "In our socials, you'll have fun while building relationships with other students on campus.",
      images: [
        { src: social1, alt: 'Test Image 1' },
        { src: social2, alt: 'Test Image 2' },
        { src: social3, alt: 'Test Image 3' },
        { src: social4, alt: 'Test Image 4' },
        { src: social5, alt: 'Test Image 5' },
        { src: social6, alt: 'Test Image 6' }
      ]
    },
    {
      title: "Tech Talks",
      description: "Our Tech Talks offer informative sessions to help students understand important concepts in computer science.",
      images: [
        { src: tech1, alt: 'Test Image 1' },
        { src: tech2, alt: 'Test Image 2' },
        { src: tech3, alt: 'Test Image 3' }
      ]
    }
  ];

  return (
    <div className="light-purple2">
      <Row className="justify-content-center">
        {imageData.map((data, index) => (
          <Col xs={12} md={4} className="my-3 px-2 custom-image-col" key={index}>
            <WWD
              title={data.title}
              description={data.description}
              images={data.images}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default whatWeDo;