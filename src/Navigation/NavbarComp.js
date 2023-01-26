import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import WiCSOption from "../UI/Branding/Logos/WiCSOption.svg";

function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand as={Link} to="/" className="mx-0">
          {" "}
          <img src={WiCSOption} alt="woman" width="100" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto p-1">
            <Nav.Link className="px-5" as={Link} to="/">
              About Us
            </Nav.Link>
            <NavDropdown
              className="px-5"
              title="Events"
              id="collasible-nav-dropdown"
            >
              {/** <NavDropdown.Item as={Link} to="/events-calendar">
                Events Calendar
              </NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to="/annual-competition">
                Annual Competition
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="https://calendar.google.com/calendar/u/1?cid=Z2xyMzI3bm5jbHY0ZW80aW5xNm5pMTRzYWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
                className="nav-add-calendar"
              >
                Add WiCS to Calendar
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="px-5"
              title="Sponsors"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/sponsors">
                Sponsors
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sponsors-competition-package">
                Sponsorship Package
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="px-5" as={Link} to="/our-team">
              Our Team
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComp;
