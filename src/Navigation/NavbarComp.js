import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import WiCSOption from "../UI/Branding/Logos/WiCS Logo.png";

function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand="lg" className="fw-bold px-4 text-lg" style={{ background: 'transparent' }}>
        <Navbar.Brand as={Link} to="/" className="mx-1">
          <img src={WiCSOption} alt="woman" width="160" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="gap-4 ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              style={{ 
                color: '#8B5CF6',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#A78BFA'}
              onMouseLeave={(e) => e.target.style.color = '#8B5CF6'}
            >
              About Us
            </Nav.Link>
            
            <NavDropdown 
              title="Events" 
              id="collasible-nav-dropdown"
              style={{ 
                color: '#8B5CF6',
                fontWeight: '600'
              }}
            >
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
              title="Sponsors" 
              id="collasible-nav-dropdown"
              style={{ 
                color: '#8B5CF6',
                fontWeight: '600'
              }}
            >
              <NavDropdown.Item as={Link} to="/sponsors">
                Sponsors
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sponsors-competition-package">
                Sponsorship Package
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link 
              as={Link} 
              to="/our-team"
              style={{ 
                color: '#8B5CF6',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#A78BFA'}
              onMouseLeave={(e) => e.target.style.color = '#8B5CF6'}
            >
              Our Team
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComp;