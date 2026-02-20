import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// This was changed from: import WiCSOption from "../UI/Branding/Logos/WiCSOption.png";
import WiCSOption from "../UI/Branding/Logos/WiCS Logo.png";

// bg = "light"
// className = "light-purple"
function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand="lg" className = "fw-bold px-4 text-lg">
        <Navbar.Brand as={Link} to="/" className="mx-1">
          {" "}
          <img src={WiCSOption} alt="woman" width="160" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="gap-4 ms-auto">
            <Nav.Link as={Link} to="/"> About Us </Nav.Link>
            <NavDropdown title="Events" id="collasible-nav-dropdown">
              {/** <NavDropdown.Item as={Link} to="/events-calendar">
                Events Calendar
              </NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to="/annual-competition">Annual Competition</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/past-competitions">Past Competitions</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/OHacks">OHacks</NavDropdown.Item>
              <NavDropdown.Item
                tag="a"
                href="https://calendar.google.com/calendar/u/2?cid=Z2xyMzI3bm5jbHY0ZW80aW5xNm5pMTRzYWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
                className="nav-add-calendar"> Add WiCS to Calendar</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sponsors" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/sponsors">Sponsors</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sponsors-competition-package">Sponsorship Package</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/our-team">Our Team</Nav.Link>
            <Nav.Link as={Link} to="/ohacks">OHacks</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarComp;
