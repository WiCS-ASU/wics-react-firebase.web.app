import { Link } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaSyncAlt } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { BsMailbox } from "react-icons/bs";
import './FooterComp.css';
// lets redo this section probably

function FooterComp() {
  return (
    <div className="footer-container bg-dark text-white">
        
        
            <div id="logo">
              <img src="../images/Mentorship.png" />
              <Nav.Item>Description</Nav.Item>
            </div>
                    
            <div id="contact">
             <Nav.Link className="text-white" as={Link} to="/contact-us">
                Contact Us
              </Nav.Link>
              {/* List of social media */}
              <Nav.Link href="https://www.instagram.com/wics.asu">
                <BsInstagram size="1.5rem" color="white" />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/company/wics-asu">
                <BsLinkedin size="1.5rem" color="white" />
              </Nav.Link>
              <Nav.Link href="https://www.facebook.com/wics.asu/">
                {" "}
                <FaFacebookSquare size="1.5rem" color="white" />
              </Nav.Link>
              <Nav.Link href="https://twitter.com/wics_asu">
                {" "}
                <AiFillTwitterCircle size="1.5rem" color="white" />{" "}
              </Nav.Link>
              <Nav.Link href="https://asu.campuslabs.com/engage/organization/women-in-computer-science">
              {" "}
                <FaSyncAlt size="1.5rem" color="white" />{" "}
              </Nav.Link>
              {/* slack
                discord
                email */}
              <Nav.Link>
                <FaSlack  size="1.5rem" color="white"/>
              </Nav.Link>
              <Nav.Link>
                <BsDiscord size="1.5rem" color="white"/>
              </Nav.Link>

              <Nav.Link>
                <BsMailbox size="1.5rem" color="white"/>
              </Nav.Link>
            </div>

            <div id="pages">
            <Nav.Item>
            <Nav.Link className="link-light" as={Link} to="/privacy-policy">
              Privacy Policy
            </Nav.Link>
          </Nav.Item>
            </div>

          
    </div>
  );
}
export default FooterComp;

// OLD FOOTER BELOW

{/**

*/}