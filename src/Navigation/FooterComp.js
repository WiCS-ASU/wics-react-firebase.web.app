import { Link } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaSyncAlt } from "react-icons/fa";

// lets redo this section probably

function FooterComp() {
  return (
    <div className="footer-container">
      
    </div>
  );
}
export default FooterComp;

// OLD FOOTER BELOW

{/**
<div className="bg-dark text-white ">
        <Nav className="footer-nav">
          <Nav.Item>
            <Nav.Link className="text-white" as={Link} to="/contact-us">
              Contact Us
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link className="link-light" as={Link} to="/privacy-policy">
              Privacy Policy
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="me-auto">
            <Nav.Link href="https://www.linkedin.com/company/wics-asu">
              <i className="bi bi-linkedin text-white"></i>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="">
            <Nav.Link href="https://www.facebook.com/wics.asu/">
              {" "}
              <FaFacebookSquare size="1.5rem" color="white" />{" "}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="">
            <Nav.Link href="https://www.instagram.com/wics.asu">
              {" "}
              <BsInstagram size="1.5rem" color="white" />{" "}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="">
            <Nav.Link href="https://twitter.com/wics_asu">
              {" "}
              <AiFillTwitterCircle size="1.5rem" color="white" />{" "}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="">
            <Nav.Link href="https://www.linkedin.com/company/wics-asu">
              {" "}
              <BsLinkedin size="1.5rem" color="white" />{" "}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="">
            <Nav.Link href="https://asu.campuslabs.com/engage/organization/women-in-computer-science">
              {" "}
              <FaSyncAlt size="1.5rem" color="white" />{" "}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
*/}