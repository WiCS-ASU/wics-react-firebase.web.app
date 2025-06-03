import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// This was changed from: import WiCSOption from "../UI/Branding/Logos/WiCSOption.png";
import WiCSOption from "../UI/Branding/Logos/WiCS Logo.png";

// bg = "light"
// className = "light-purple"
function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand="lg" className = "bg-light">
      <Container>
        <Navbar.Brand as={Link} to="/" className="mx-1">
          {" "}
          <img src={WiCSOption} alt="woman" width="160" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto p-1">
            <Nav.Link 
              className="px-5 mx-5 custom-font-size3" as={Link} to="/">
              <strong>About Us</strong>
            </Nav.Link>
            <NavDropdown
              className="px-5 mx-5 custom-font-size3"
              title={<strong>Events</strong>}
        /*       title="Events" */
              id="collasible-nav-dropdown"
            >
              {/** <NavDropdown.Item as={Link} to="/events-calendar">
                Events Calendar
              </NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to="/annual-competition">
                Annual Competition
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/past-competitions">
                Past Competitions
              </NavDropdown.Item>
              
              <NavDropdown.Item
                tag="a"
                href="https://calendar.google.com/calendar/u/2?cid=Z2xyMzI3bm5jbHY0ZW80aW5xNm5pMTRzYWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
                className="nav-add-calendar"
              >
                Add WiCS to Calendar
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="px-5 mx-5 custom-font-size3"
              /* title="Sponsors" */
              title={<strong>Sponsors</strong>}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/sponsors">
                Sponsors
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sponsors-competition-package">
                Sponsorship Package
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="px-5 mx-5 custom-font-size3" as={Link} to="/our-team">
              <strong>Our Team</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComp;
